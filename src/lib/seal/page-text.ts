const SKIP = "[data-desk-skip], .no-print";

const LEAF = new Set([
  "P",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "LI",
  "DT",
  "DD",
  "TR",
  "BLOCKQUOTE",
  "FIGCAPTION",
]);

const STRUCTURAL = new Set([
  "DIV",
  "SECTION",
  "ARTICLE",
  "UL",
  "OL",
  "DL",
  "TABLE",
  "THEAD",
  "TBODY",
  "HEADER",
  "FOOTER",
  "ASIDE",
  "FIGURE",
  "MAIN",
  "NAV",
  "A",
]);

export type DeskBlock = { el: HTMLElement; text: string };

function normalize(text: string): string {
  return text.replace(/\u00a0/g, " ").replace(/[ \t]+\n/g, "\n").replace(/\s+/g, " ").trim();
}

export function deskRoot(): HTMLElement | null {
  return document.querySelector<HTMLElement>("[data-desk-page]");
}

export function collectDeskBlocks(root: HTMLElement): DeskBlock[] {
  const out: DeskBlock[] = [];

  const walk = (el: HTMLElement) => {
    if (el.matches(SKIP) || el.closest(SKIP)) return;
    if (el.getAttribute("aria-hidden") === "true") return;
    if (el.tagName === "BUTTON" || el.tagName === "SVG") return;

    const tag = el.tagName;
    if (LEAF.has(tag)) {
      const text = normalize(el.innerText);
      if (text) out.push({ el, text });
      return;
    }

    const kids = [...el.children].filter((c): c is HTMLElement => c instanceof HTMLElement);
    if (kids.length === 0) {
      const text = normalize(el.innerText);
      if (text) out.push({ el, text });
      return;
    }

    const hasStructure = kids.some((k) => LEAF.has(k.tagName) || STRUCTURAL.has(k.tagName));
    if (!hasStructure) {
      const text = normalize(el.innerText);
      if (text) out.push({ el, text });
      return;
    }

    for (const kid of kids) walk(kid);
  };

  walk(root);
  return out;
}

export function formatDeskCopy(url: string, blocks: DeskBlock[]): string {
  const title =
    document.querySelector("[data-desk-page] h1")?.textContent?.replace(/\s+/g, " ").trim() ??
    "SEAL";
  const kicker =
    document.querySelector("[data-desk-page] p")?.textContent?.replace(/\s+/g, " ").trim() ?? "";

  const body = blocks
    .map(({ el, text }) => {
      const tag = el.tagName;
      if (tag === "H1") return `\n${text}\n`;
      if (tag === "H2" || tag === "H3") return `\n${text}`;
      if (tag === "LI") return `— ${text}`;
      return text;
    })
    .join("\n");

  return [
    "SEAL · The Christman AI Project LLC",
    kicker && kicker.length < 80 ? kicker : null,
    title,
    url,
    "",
    body.trim(),
    "",
    "Burden is not TAM. Provisional is pending. Inception is membership. No revenue is printed.",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

export async function copyDeskPage(): Promise<boolean> {
  const root = deskRoot();
  if (!root) return false;
  const blocks = collectDeskBlocks(root);
  if (!blocks.length) return false;
  return writeClipboard(formatDeskCopy(window.location.href, blocks));
}

export async function copyDeskLink(): Promise<boolean> {
  return writeClipboard(window.location.href);
}
