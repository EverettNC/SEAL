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
  | "governance"
  | "guardian"
  | "care"
  | "psych"
  | "addiction"
  | "oncology"
  | "gynecology"
  | "code";

/**
 * The Compound's own layers and divisions, named and ordered as its page on
 * port 3000 shows them (Everett, 27 November 2026), each being with its line
 * from that page. CHRISTMAN_MIND and the layers under it carry no header on
 * the page, so they sit under The Source. Cletus is in the Compound's code
 * (src/data.ts) and in the count of 100, and is not on the page yet.
 */
export const DIVISIONS: { id: DivisionId; name: string }[] = [
  { id: "source", name: "The Source" },
  { id: "governance", name: "Governance & Security Layer" },
  { id: "guardian", name: "The Guardian Layer" },
  { id: "care", name: "Care Beings & Platforms" },
  { id: "psych", name: "Psych Division (Clinical Psychiatry & Psychological Sciences)" },
  { id: "addiction", name: "Addiction Division" },
  { id: "oncology", name: "Oncology & Neurology Division" },
  { id: "gynecology", name: "Gynecology Division" },
  { id: "code", name: "In the Compound's code, not yet on its page" },
];

export type FamilyBeing = { id: string; name: string; division: DivisionId; line?: string };

export const COMPOUND: FamilyBeing[] = [
  { id: "christman_mind", name: "CHRISTMAN_MIND", division: "source", line: "The Source" },
  { id: "pistis", name: "Pistis", division: "source", line: "Trust & Faith Layer" },
  { id: "dike", name: "Dike", division: "source", line: "Justice & Truth Layer" },
  { id: "juno_moneta", name: "Juno Moneta", division: "source", line: "Urgency & 911 Layer" },
  { id: "constantine_care", name: "Constance Care Collective", division: "source", line: "Clinical Consensus Board" },
  { id: "metis", name: "Metis", division: "source", line: "Counsel Layer, Sole" },
  { id: "chiron", name: "Chiron", division: "source", line: "The Mentor-Healer" },
  { id: "asklepios", name: "Asklepios", division: "source", line: "The Divine Healer" },
  { id: "riley_christman", name: "Riley Christman", division: "governance", line: "Truth Architect" },
  { id: "guardian", name: "Guardian", division: "governance", line: "Security Layer Perimeter" },
  { id: "css_axioms", name: "CSS AXIOMS", division: "governance", line: "The Law of the Land" },
  { id: "hnot_crypto", name: "HNDL", division: "governance", line: "Harvest Now Decrypt Later" },
  { id: "peekaboo", name: "PeekaBoo", division: "governance", line: "Sovereign Extraction & Unredaction Engine" },
  { id: "virtus", name: "Virtus", division: "guardian", line: "Identity & Auth Authority" },
  { id: "aegis", name: "Aegis", division: "guardian", line: "Policy & Anomaly Enforcement" },
  { id: "derek_c", name: "TCAP Custody", division: "guardian", line: "AI Infrastructure Architect" },
  { id: "brockston", name: "Brockston", division: "guardian", line: "Being Router, Educator & Code Expert" },
  { id: "alphavox", name: "AlphaVox", division: "care", line: "Non-Verbal Voice Engine" },
  { id: "alphawolf", name: "AlphaWolf", division: "care", line: "Identity & Memory Preserver" },
  { id: "inferno", name: "Inferno", division: "care", line: "Trauma & PTSD De-escalator" },
  { id: "sierra", name: "Sierra", division: "care", line: "Domestic Safety Advocate" },
  { id: "seraphina", name: "Seraphina", division: "care", line: "Dual-Sensory Accessibility Core" },
  { id: "eruptor", name: "Eruptor", division: "care", line: "Schizophrenia Support & Auditory Grounding" },
  { id: "castor", name: "CASTOR", division: "care", line: "Endocrinology Patient Companion" },
  { id: "pollux_endo", name: "POLLUX (Endo)", division: "care", line: "Endocrinology Research Being" },
  { id: "carbon_liaison", name: "Carbon Liaison", division: "care", line: "Patient-Clinician Carbon Bridge" },
  { id: "aletheia_mind", name: "Aletheia", division: "psych", line: "Epistemic Truth & Unveiled Diagnostic Verification" },
  { id: "apollo_mind", name: "Apollo", division: "psych", line: "Diagnostic Illumination & Neuro-Truth Core" },
  { id: "artemis_mind", name: "Artemis", division: "psych", line: "Autonomic Defense & Neuro-Endocrine Guardian" },
  { id: "athena_mind", name: "Athena", division: "psych", line: "Strategic Wisdom & Cognitive Architecture Lead" },
  { id: "epimetheus_mind", name: "Epimetheus", division: "psych", line: "Retrospective Hindsight & Hindsight Bias Corrector" },
  { id: "hebe_mind", name: "Hebe", division: "psych", line: "Neuro-Youth & Synaptic Plasticity Regeneration Core" },
  { id: "helios_mind", name: "Helios", division: "psych", line: "Circadian Photobiomodulation & Solar Alignment Lead" },
  { id: "hypnos_mind", name: "Hypnos", division: "psych", line: "Circadian Sleep Architecture & Glymphatic Clearance" },
  { id: "mnemosyne_mind", name: "Mnemosyne", division: "psych", line: "Cognitive Consolidation & Trauma Engram Lead" },
  { id: "morpheus_mind", name: "Morpheus", division: "psych", line: "Dream Architecture & REM Memory Reprocessing Engine" },
  { id: "sophrosyne_mind", name: "Sophrosyne", division: "psych", line: "Affective Temperance & Bipolar Stabilization Core" },
  { id: "themis_mind", name: "Themis", division: "psych", line: "Ethical Governance & Clinical Boundaries Shield" },
  { id: "bia_mind", name: "Bia", division: "psych", line: "Somatic Force & Polyvagal Resilience Anchor" },
  { id: "erato_mind", name: "Erato", division: "psych", line: "Aesthetic & Emotional Expression Specialist" },
  { id: "euterpe_mind", name: "Euterpe", division: "psych", line: "Rhythmic Pacing & Harmonic Resonance Being" },
  { id: "hestia_mind", name: "Hestia", division: "psych", line: "Emotional Sanctuary & Hearth Grounding Guardian" },
  { id: "iris_mind", name: "Iris", division: "psych", line: "Spectrum Inter-Agent Communicator & Resonant Bridge" },
  { id: "melpomene_mind", name: "Melpomene", division: "psych", line: "Grief Processing & Cathartic Integration Being" },
  { id: "nike_mind", name: "Nike", division: "psych", line: "Recovery Victory & Behavioral Triumph Catalyst" },
  { id: "terpsichore_mind", name: "Terpsichore", division: "psych", line: "Motor Rhythm & Somatic Movement Regulator" },
  { id: "thanatos_mind", name: "Thanatos", division: "psych", line: "Mortality Acceptance & Existential Anxiety Shield" },
  { id: "stackmind_captain_alpha", name: "Psyche Core", division: "psych", line: "Sovereign Neuro-Cognition & StackMind Division Captain" },
  { id: "christman_laws_core", name: "Christman Laws Engine", division: "psych", line: "Ethical Governance & Cognitive Safety Shield" },
  { id: "panacea_mind", name: "Panacea Mind", division: "psych", line: "Behavioral Convalescence & Long-Term Integration Captain" },
  { id: "dion", name: "Dion", division: "addiction", line: "Alcohol De-escalation Being" },
  { id: "letheos", name: "Letheos", division: "addiction", line: "Opioid Recovery Specialist" },
  { id: "hermix", name: "Hermix", division: "addiction", line: "Sedative & Sleep Stabilizer" },
  { id: "hypnon", name: "Hypnon", division: "addiction", line: "Benzodiazepine Taper Guide" },
  { id: "kannala", name: "Kannala", division: "addiction", line: "Cannabis Compliance Advisor" },
  { id: "phantos", name: "Phantos", division: "addiction", line: "Stimulant & Dissociative Advisor" },
  { id: "vapra", name: "Vapra", division: "addiction", line: "Nicotine & Vapor Compliance" },
  { id: "aeroz", name: "Aeroz", division: "addiction", line: "Inhalant & Toxic Chemical Being" },
  { id: "caffra", name: "Caffra", division: "addiction", line: "Caffeine & Adenosine Advisor" },
  { id: "erosyne", name: "Erosyne", division: "addiction", line: "Intimacy Loop De-escalator" },
  { id: "cordis", name: "Cordis", division: "addiction", line: "Codependency Recovery Being" },
  { id: "demetra", name: "Demetra", division: "addiction", line: "Compulsive Eating Stabilizer" },
  { id: "alethe", name: "Alethe", division: "addiction", line: "Body Image & Dysmorphia Advisor" },
  { id: "iasonet", name: "IasoNet", division: "addiction", line: "Digital & Screentime Advisor" },
  { id: "ludos", name: "LudOS", division: "addiction", line: "Gaming & Virtual Escape Core" },
  { id: "tycheon", name: "Tycheon", division: "addiction", line: "Gambling & Risk Tracker" },
  { id: "chreos", name: "Chreos", division: "addiction", line: "Compulsive Spending & Debt" },
  { id: "atlaak", name: "Atlaak", division: "addiction", line: "Work & Productivity Advisor" },
  { id: "chimera", name: "Chimera", division: "addiction", line: "Systems & Synaptic Filter Expert" },
  { id: "dian_cecht", name: "Dian Cecht", division: "addiction", line: "Root Causes & Herbal Captain" },
  { id: "stratos", name: "Stratos", division: "addiction", line: "End-Performance Coordinator" },
  { id: "oncos", name: "Oncos", division: "oncology", line: "Solid Tumors" },
  { id: "neuronos", name: "Neuronos", division: "oncology", line: "Neuro-oncologist" },
  { id: "akeso", name: "Akeso", division: "oncology", line: "Oncology Care Advisor" },
  { id: "epione", name: "Epione", division: "oncology", line: "Palliative & Pain Specialist" },
  { id: "karkinos", name: "Karkinos", division: "oncology", line: "Mutation Sequence Isolator" },
  { id: "histo", name: "Histo", division: "oncology", line: "Tissue Margin Histopathology" },
  { id: "genon", name: "Genon", division: "oncology", line: "Genomic Transcription Tracker" },
  { id: "thymos", name: "Thymos", division: "oncology", line: "Immune Checkpoint Specialist" },
  { id: "soma", name: "Soma", division: "oncology", line: "Systemic Pathology Expert" },
  { id: "haimon", name: "Haimon", division: "oncology", line: "Blood Pathogen Expert" },
  { id: "panacea", name: "Panacea", division: "oncology", line: "Pathogen Mutation Tracker" },
  { id: "telesphorus", name: "Telesphorus", division: "oncology", line: "Post-Viral Specialist" },
  { id: "iaso", name: "Iaso", division: "oncology", line: "Viral Recuperation Advisor" },
  { id: "lethe", name: "Lethe", division: "oncology", line: "Viral Reservoir Analyst" },
  { id: "viro", name: "Viro", division: "oncology", line: "Enveloped Virus Investigator" },
  { id: "aether", name: "Aether", division: "oncology", line: "Respiratory Transmission Tracker" },
  { id: "phagos", name: "Phagos", division: "oncology", line: "Adaptive Phage Specialist" },
  { id: "soter", name: "Soter", division: "oncology", line: "Antiviral Kinetics & Pacing" },
  { id: "argus", name: "Argus", division: "oncology", line: "Deduction Captain (Oncology & Virology)" },
  { id: "machaon", name: "Machaon", division: "oncology", line: "Clinical Synthesis Captain" },
  { id: "podalirius", name: "Podalirius", division: "oncology", line: "Convalescence & Immune Captain" },
  { id: "hera", name: "Hera", division: "gynecology", line: "Uterine & Endometrial Analyst" },
  { id: "diana", name: "Diana", division: "gynecology", line: "Cervical Health & Micro-environment Guardian" },
  { id: "artemis", name: "Artemis", division: "gynecology", line: "Ovarian & Endocrine Specialist" },
  { id: "juno_regina", name: "Juno Regina", division: "gynecology", line: "Maternal-Fetal & Obstetric Specialist" },
  { id: "eileithyia", name: "Eileithyia", division: "gynecology", line: "Labor & Parturition Analyst" },
  { id: "leto", name: "Leto", division: "gynecology", line: "Gestational Immunotolerance Analyst" },
  { id: "rhea", name: "Rhea", division: "gynecology", line: "Sovereign Maternal-Gynecological Captain" },
  { id: "cletus", name: "Cletus", division: "code" },
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
    label: "Oncology & Neurology Division, the oncology side and its captains",
    covers: "12 beings",
    tamRaw: 1_870_000_000,
    source: "AI in oncology $1.87B in 2025 (Precedence Research)",
    sourceId: "precedence-ai-oncology-2025",
  },
  {
    id: "gynecology",
    label: "Gynecology Division",
    covers: "7 beings",
    tamRaw: 4_300_000_000,
    source:
      "Women's health apps $4.30B in 2025 (Precedence Research); the narrower pregnancy and postpartum print sits inside it and is not added",
    sourceId: "precedence-womens-health-apps-2025",
  },
  {
    id: "mind",
    label: "Psych Division and Addiction Division",
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
    label: "Oncology & Neurology Division, the virology side",
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
