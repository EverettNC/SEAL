// The desk's figures, checked against the desk of record.
//
// WHY (2026-11-27): Everett ruled that every being is counted (107 beings and
// 18 tools) and that none is "in development" or kept off the ledger. These
// tests load SEAL's own code through Vite, the way the app does, and check:
// the eight priced beings reproduce the desk printed in the SEAL evaluation of
// 23 November 2026 (TAM $22.88B, SAM $5.29B, SOM $682.8M, asks $15.1M); the
// division lines bring the family to TAM $40.12B and SAM $8.74B, as that paper
// applied on his yes; the count is his count; every figure names a source that
// is on the sources page; and no line of the desk still says a being is not
// valued, prints a docket number, or carries a superseded name or fact.
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
let vite;
let mod;

before(async () => {
  vite = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    appType: "custom",
    server: { middlewareMode: true, hmr: false },
    resolve: { alias: { "@": join(root, "src") } },
  });
  const load = (p) => vite.ssrLoadModule(p);
  mod = {
    catalog: await load("/src/lib/seal/catalog.ts"),
    valuation: await load("/src/lib/seal/valuation.ts"),
    family: await load("/src/lib/seal/family.ts"),
    sources: await load("/src/lib/seal/sources.ts"),
    house: await load("/src/lib/seal/house.ts"),
  };
});

after(async () => {
  await vite?.close();
});

const near = (actual, expected, tolerance, what) =>
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${what}: ${actual} is not within ${tolerance} of ${expected}`,
  );

test("the eight priced beings reproduce the desk of record", () => {
  const { BEINGS } = mod.catalog;
  assert.deepEqual(
    BEINGS.map((b) => b.name),
    ["AlphaVox", "AlphaWolf", "Inferno", "Brockston", "Giovanni Skyrider", "Sierra", "Seraphina", "Eruptor"],
  );
  const v = mod.valuation.valueAll(BEINGS);
  near(v.tam, 22.88e9, 0.005e9, "TAM");
  near(v.sam, 5.29e9, 0.005e9, "SAM");
  assert.equal(v.som, 682_800_000);
  assert.equal(v.ask, 15_100_000);
});

test("each being's SOM is its units times its price", () => {
  for (const being of mod.catalog.BEINGS) {
    assert.equal(mod.valuation.value(being).som, being.som.units * being.som.arpu, being.name);
  }
});

test("the division lines bring the family to the 23 November figures", () => {
  const family = mod.valuation.familyValue(mod.catalog.BEINGS);
  near(family.tam, 40.12e9, 0.01e9, "family TAM");
  near(family.sam, 8.74e9, 0.005e9, "family SAM");
  // SOM and the ask are units times price only: the division lines add none.
  assert.equal(family.som, 682_800_000);
  assert.equal(family.ask, 15_100_000);
  for (const line of family.lines) {
    near(line.tam, line.tamRaw * 0.8, 1, `${line.label} TAM`);
    near(line.sam, line.tam * 0.2, 1, `${line.label} SAM`);
  }
});

test("the count is Everett's count: 107 beings and 18 tools", () => {
  const { COMPOUND, OUTSIDE, TOOLS, FAMILY_COUNT } = mod.family;
  assert.equal(COMPOUND.length, 100);
  assert.equal(new Set(COMPOUND.map((b) => b.id)).size, 100, "a Compound id repeats");
  assert.deepEqual([...OUTSIDE], ["AUDITOR", "LUCENT", "Press", "Sentagent", "Coupons", "OmniCode", "Awarenistic"]);
  assert.equal(TOOLS.length, 18);
  assert.deepEqual(FAMILY_COUNT, { compound: 100, outside: 7, beings: 107, tools: 18 });
  const divisions = new Set(mod.family.DIVISIONS.map((d) => d.id));
  for (const being of COMPOUND) assert.ok(divisions.has(being.division), being.name);
});

test("every figure names a source that is on the sources page", () => {
  const ids = new Set(mod.sources.SOURCES.map((s) => s.id));
  for (const being of mod.catalog.BEINGS) {
    for (const id of being.citations) assert.ok(ids.has(id), `${being.name} cites ${id}`);
  }
  for (const line of mod.family.MARKET_LINES) {
    assert.ok(ids.has(line.sourceId), `${line.label} cites ${line.sourceId}`);
  }
});

test("the house is the Delaware Inc and its law counts every being", () => {
  const { HOUSE } = mod.house;
  assert.equal(HOUSE.name, "The Christman AI Project and Robotics Division Inc");
  assert.ok(HOUSE.law.some((line) => line.startsWith("Every being is counted: 107 beings and 18 tools.")));
  assert.equal("later" in HOUSE, false, "the not-valued list is gone");
});

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : [path];
  });
}

test("no line of the desk keeps a being off the ledger or prints what was superseded", () => {
  const banned = [
    [/not valued/i, "a being named as not valued"],
    [/in-development/i, "a being called in development"],
    [/TCAP-2026-\d+/, "a docket number"],
    [/\bGiuseppe\b/, "the old name for Giovanni Skyrider"],
    [/nonverbal until (age )?6\b|until four or five/i, "the founder's age, which is five"],
    [/The Christman AI Project LLC/, "the LLC named as the investment vehicle"],
  ];
  const desk = [...files(join(root, "src/lib/seal")), ...files(join(root, "src/routes")), ...files(join(root, "src/components/seal"))]
    .filter((p) => /\.(ts|tsx)$/.test(p) && !p.endsWith("routeTree.gen.ts"));
  const found = [];
  for (const path of desk) {
    readFileSync(path, "utf8")
      .split("\n")
      .forEach((line, i) => {
        if (path.endsWith("family.ts") && line.trimStart().startsWith("*")) return;
        for (const [re, what] of banned) {
          if (re.test(line)) found.push(`${path.slice(root.length)}:${i + 1}: ${what}`);
        }
      });
  }
  assert.deepEqual(found, []);
});
