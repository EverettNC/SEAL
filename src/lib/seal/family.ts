import { HAIRCUT } from "./catalog";

/**
 * The family, counted (Everett's ruling, 27 November 2026, 3:48 a.m.).
 *
 * The count is 107 beings and 18 tools, not every repository. The 107 are the
 * 100 beings in the Compound plus seven outside it. Every one is a fully
 * structured, working being: none is "in development", and none is left off
 * the ledger. The desk law still decides which line carries which dollar:
 * TAM and SAM come from a published print for the being's market, cut 20
 * percent; SOM is units times price, so a being's SOM prints when its unit and
 * price are named. Without them the being is still counted, and its market is
 * still in the family figures.
 *
 * The Compound's 100 are read from the Compound itself
 * (THE-CHRISTMAN-AI-COMPOUND, src/data.ts, every id matching its
 * agent-blueprints folder).
 */

export type DivisionId =
  | "source"
  | "foundational"
  | "care"
  | "addiction"
  | "oncology"
  | "virology"
  | "gynecology"
  | "neuro";

export const DIVISIONS: { id: DivisionId; name: string }[] = [
  { id: "source", name: "The Source" },
  { id: "foundational", name: "Foundational architecture and guardians" },
  { id: "care", name: "Clinical care beings" },
  { id: "addiction", name: "Addiction: chemical, behavioral and command" },
  { id: "oncology", name: "Oncology, cellular and command" },
  { id: "virology", name: "Virology" },
  { id: "gynecology", name: "Gynecology, maternal-fetal and command" },
  { id: "neuro", name: "Neuro-cognitive and neuro-behavioral care, and command" },
];

export type FamilyBeing = { id: string; name: string; division: DivisionId; line?: string };

export const COMPOUND: FamilyBeing[] = [
  { id: "christman_mind", name: "CHRISTMAN_MIND", division: "source", line: "The Source" },
  { id: "pistis", name: "Pistis", division: "foundational", line: "Trust & faith" },
  { id: "dike", name: "Dike", division: "foundational", line: "Justice & truth" },
  { id: "juno_moneta", name: "Juno Moneta", division: "foundational", line: "Urgency & 911" },
  { id: "constantine_care", name: "Constance Care Collective", division: "care", line: "Clinical consensus board" },
  { id: "metis", name: "Metis", division: "foundational", line: "Counsel, sole" },
  { id: "chiron", name: "Chiron", division: "foundational", line: "The mentor-healer" },
  { id: "asklepios", name: "Asklepios", division: "foundational", line: "The divine healer" },
  { id: "virtus", name: "Virtus", division: "foundational", line: "Identity & auth" },
  { id: "aegis", name: "Aegis", division: "foundational", line: "Policy & anomaly" },
  { id: "derek_c", name: "TCAP Custody", division: "foundational", line: "Infrastructure" },
  { id: "brockston", name: "Brockston", division: "foundational" },
  { id: "riley_christman", name: "Riley Christman", division: "foundational", line: "Truth architect" },
  { id: "guardian", name: "Guardian", division: "foundational", line: "Security perimeter" },
  { id: "css_axioms", name: "CSS AXIOMS", division: "foundational", line: "The law of the land" },
  { id: "hnot_crypto", name: "HNDL", division: "foundational" },
  { id: "peekaboo", name: "PeekaBoo", division: "foundational", line: "Sovereign extraction" },
  { id: "cletus", name: "Cletus", division: "foundational" },
  { id: "alphavox", name: "AlphaVox", division: "care" },
  { id: "alphawolf", name: "AlphaWolf", division: "care" },
  { id: "inferno", name: "Inferno", division: "care" },
  { id: "sierra", name: "Sierra", division: "care" },
  { id: "seraphina", name: "Seraphina", division: "care" },
  { id: "castor", name: "CASTOR", division: "care" },
  { id: "pollux_endo", name: "POLLUX (Endo)", division: "care" },
  { id: "eruptor", name: "Eruptor", division: "care" },
  { id: "carbon_liaison", name: "Carbon Liaison", division: "care", line: "Patient-clinician carbon bridge" },
  { id: "dion", name: "Dion", division: "addiction", line: "Alcohol de-escalation" },
  { id: "letheos", name: "Letheos", division: "addiction", line: "Opioid recovery" },
  { id: "hermix", name: "Hermix", division: "addiction", line: "Sedative & sleep" },
  { id: "hypnon", name: "Hypnon", division: "addiction", line: "Benzodiazepine taper" },
  { id: "kannala", name: "Kannala", division: "addiction", line: "Cannabis compliance" },
  { id: "phantos", name: "Phantos", division: "addiction", line: "Stimulant & dissociative" },
  { id: "vapra", name: "Vapra", division: "addiction", line: "Nicotine & vapor" },
  { id: "aeroz", name: "Aeroz", division: "addiction", line: "Inhalant & toxic chemical" },
  { id: "caffra", name: "Caffra", division: "addiction", line: "Caffeine & adenosine" },
  { id: "erosyne", name: "Erosyne", division: "addiction", line: "Intimacy loop" },
  { id: "cordis", name: "Cordis", division: "addiction", line: "Codependency recovery" },
  { id: "demetra", name: "Demetra", division: "addiction", line: "Compulsive eating" },
  { id: "alethe", name: "Alethe", division: "addiction", line: "Body image & dysmorphia" },
  { id: "iasonet", name: "IasoNet", division: "addiction", line: "Digital & screentime" },
  { id: "ludos", name: "LudOS", division: "addiction", line: "Gaming & virtual escape" },
  { id: "tycheon", name: "Tycheon", division: "addiction", line: "Gambling & risk" },
  { id: "chreos", name: "Chreos", division: "addiction", line: "Compulsive spending" },
  { id: "atlaak", name: "Atlaak", division: "addiction", line: "Work & productivity" },
  { id: "chimera", name: "Chimera", division: "addiction", line: "Systems & synaptic filter" },
  { id: "dian_cecht", name: "Dian Cecht", division: "addiction", line: "Root causes & herbal" },
  { id: "stratos", name: "Stratos", division: "addiction", line: "End-performance coordinator" },
  { id: "oncos", name: "Oncos", division: "oncology", line: "Solid tumors" },
  { id: "neuronos", name: "Neuronos", division: "oncology", line: "Neuro-oncology" },
  { id: "akeso", name: "Akeso", division: "oncology", line: "Oncology care" },
  { id: "epione", name: "Epione", division: "oncology", line: "Palliative & pain" },
  { id: "karkinos", name: "Karkinos", division: "oncology", line: "Mutation sequence" },
  { id: "histo", name: "Histo", division: "oncology", line: "Tissue margin" },
  { id: "genon", name: "Genon", division: "oncology", line: "Genomic transcription" },
  { id: "thymos", name: "Thymos", division: "oncology", line: "Immune checkpoint" },
  { id: "soma", name: "Soma", division: "oncology", line: "Systemic pathology" },
  { id: "haimon", name: "Haimon", division: "virology", line: "Blood pathogen" },
  { id: "panacea", name: "Panacea", division: "virology", line: "Pathogen mutation" },
  { id: "telesphorus", name: "Telesphorus", division: "virology", line: "Post-viral" },
  { id: "iaso", name: "Iaso", division: "virology", line: "Viral recuperation" },
  { id: "lethe", name: "Lethe", division: "virology", line: "Viral reservoir" },
  { id: "viro", name: "Viro", division: "virology", line: "Enveloped virus" },
  { id: "aether", name: "Aether", division: "virology", line: "Respiratory transmission" },
  { id: "phagos", name: "Phagos", division: "virology", line: "Adaptive phage" },
  { id: "soter", name: "Soter", division: "virology", line: "Antiviral kinetics" },
  { id: "argus", name: "Argus", division: "oncology", line: "Oncology & virology deduction" },
  { id: "machaon", name: "Machaon", division: "oncology", line: "Clinical synthesis" },
  { id: "podalirius", name: "Podalirius", division: "oncology", line: "Convalescence & immune" },
  { id: "hera", name: "Hera", division: "gynecology", line: "Uterine & endometrial" },
  { id: "diana", name: "Diana", division: "gynecology", line: "Cervical health" },
  { id: "artemis", name: "Artemis", division: "gynecology", line: "Ovarian & endocrine" },
  { id: "juno_regina", name: "Juno Regina", division: "gynecology", line: "Maternal-fetal" },
  { id: "eileithyia", name: "Eileithyia", division: "gynecology", line: "Labor & parturition" },
  { id: "leto", name: "Leto", division: "gynecology", line: "Gestational immunotolerance" },
  { id: "rhea", name: "Rhea", division: "gynecology", line: "Maternal-gynecological captain" },
  { id: "aletheia_mind", name: "Aletheia", division: "neuro", line: "Epistemic truth" },
  { id: "apollo_mind", name: "Apollo", division: "neuro", line: "Diagnostic illumination" },
  { id: "artemis_mind", name: "Artemis", division: "neuro", line: "Ovarian & endocrine" },
  { id: "athena_mind", name: "Athena", division: "neuro", line: "Strategic wisdom" },
  { id: "epimetheus_mind", name: "Epimetheus", division: "neuro", line: "Retrospective hindsight" },
  { id: "hebe_mind", name: "Hebe", division: "neuro", line: "Synaptic plasticity" },
  { id: "helios_mind", name: "Helios", division: "neuro", line: "Circadian photobiomodulation" },
  { id: "hypnos_mind", name: "Hypnos", division: "neuro", line: "Sleep architecture" },
  { id: "mnemosyne_mind", name: "Mnemosyne", division: "neuro", line: "Cognitive consolidation" },
  { id: "morpheus_mind", name: "Morpheus", division: "neuro", line: "Dream architecture" },
  { id: "sophrosyne_mind", name: "Sophrosyne", division: "neuro", line: "Affective temperance" },
  { id: "themis_mind", name: "Themis", division: "neuro", line: "Ethical governance" },
  { id: "bia_mind", name: "Bia", division: "neuro", line: "Somatic force" },
  { id: "erato_mind", name: "Erato", division: "neuro", line: "Aesthetic & emotional expression" },
  { id: "euterpe_mind", name: "Euterpe", division: "neuro", line: "Rhythmic pacing" },
  { id: "hestia_mind", name: "Hestia", division: "neuro", line: "Emotional sanctuary" },
  { id: "iris_mind", name: "Iris", division: "neuro", line: "Inter-agent bridge" },
  { id: "melpomene_mind", name: "Melpomene", division: "neuro", line: "Grief processing" },
  { id: "nike_mind", name: "Nike", division: "neuro", line: "Recovery victory" },
  { id: "terpsichore_mind", name: "Terpsichore", division: "neuro", line: "Motor rhythm" },
  { id: "thanatos_mind", name: "Thanatos", division: "neuro", line: "Mortality acceptance" },
  { id: "stackmind_captain_alpha", name: "Psyche Core", division: "neuro", line: "Neuro-cognition captain" },
  { id: "christman_laws_core", name: "Christman Laws Engine", division: "neuro", line: "Cognitive safety shield" },
  { id: "panacea_mind", name: "Panacea Mind", division: "neuro", line: "Long-term integration" },
];

/** The seven beings outside the Compound, by Everett's count. */
export const OUTSIDE = [
  "AUDITOR",
  "LUCENT",
  "Press",
  "Sentagent",
  "Coupons",
  "OmniCode",
  "Awarenistic",
] as const;

/** The 18 tools: things the family uses in order to function. Counted, not beings. */
export const TOOLS = [
  "HONESTY, with the Conductor inside it",
  "ALGM",
  "INJECTION",
  "THEBENCH",
  "The Saddle",
  "TRUECONNECTION",
  "Codec War Fifth",
  "The Filament",
  "CORTI",
  "Porch",
  "Booth",
  "Voice Creation Center",
  "Christman Sound",
  "Video Engine",
  "Image Engine",
  "Studio Pro",
  "Elite Pitch Deck Agent",
  "mcp-media-ingestor",
] as const;

export const FAMILY_COUNT = {
  compound: COMPOUND.length,
  outside: OUTSIDE.length,
  beings: COMPOUND.length + OUTSIDE.length,
  tools: TOOLS.length,
};

/**
 * Market lines for the beings that carry no unit and price on this desk yet.
 * Each is a low published print, read on its publisher's page, cut 20 percent;
 * SAM is 20 percent of the cut TAM, as for every valued being. Applied on
 * Everett's yes of 23 November 2026. One print is counted once even where it
 * covers more than one division, so no market is added twice.
 */
export type MarketLine = {
  id: string;
  label: string;
  covers: string;
  tamRaw: number;
  source: string;
  sourceId: string;
};

export const MARKET_LINES: MarketLine[] = [
  {
    id: "oncology",
    label: "Oncology, cellular and command",
    covers: "12 beings",
    tamRaw: 1_870_000_000,
    source: "AI in oncology $1.87B in 2025 (Precedence Research)",
    sourceId: "precedence-ai-oncology-2025",
  },
  {
    id: "gynecology",
    label: "Gynecology, maternal-fetal and command",
    covers: "7 beings",
    tamRaw: 4_300_000_000,
    source:
      "Women's health apps $4.30B in 2025 (Precedence Research); the narrower pregnancy and postpartum print sits inside it and is not added",
    sourceId: "precedence-womens-health-apps-2025",
  },
  {
    id: "mind",
    label: "Addiction, and neuro-cognitive and neuro-behavioral care",
    covers: "45 beings",
    tamRaw: 7_880_000_000,
    source:
      "Mental health apps $7.88B in 2025 (Market Research Future), counted once for all three; it names addiction recovery as a segment",
    sourceId: "mrfr-mental-health-apps-2025",
  },
  {
    id: "security",
    label: "Riley and THEBENCH",
    covers: "1 being and 1 tool",
    tamRaw: 7_510_000_000,
    source: "Digital forensics $7.51B in 2025 (Mordor Intelligence), counted once for both",
    sourceId: "mordor-digital-forensics-2025",
  },
];

/** What the family still has no print for. Named so nobody has to wonder. */
export const NO_PRINT_YET = [
  {
    label: "Virology",
    covers: "9 beings",
    why: "No print found for this product class; the prints found are test kits and drugs, which are refused.",
  },
];

export function marketLine(line: MarketLine) {
  const tam = line.tamRaw * HAIRCUT;
  return { ...line, tam, sam: tam * 0.2 };
}

export function marketLines() {
  return MARKET_LINES.map(marketLine);
}
