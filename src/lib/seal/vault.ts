export type VaultStatus = "desk" | "request" | "absent";

export const VAULT: {
  id: string;
  item: string;
  status: VaultStatus;
  note: string;
}[] = [
  {
    id: "closer",
    item: "This closer — math, sources, field, terms, objections",
    status: "desk",
    note: "What you are sitting in. Every dollar maps to a source or a unit.",
  },
  {
    id: "site",
    item: "Public architecture contracts (reference implementations)",
    status: "desk",
    note: "thechristmanaiproject.com. Tested as reference. Not production field units.",
  },
  {
    id: "provisional",
    item: "USPTO provisional TCAP-2026-001 — filing receipt",
    status: "request",
    note: "Filed April 27, 2026. Unpublished. Patent pending. Not a grant.",
  },
  {
    id: "serials",
    item: "Application serial numbers",
    status: "request",
    note: "Live in the data room. Not printed on this desk until they can be confirmed.",
  },
  {
    id: "llc",
    item: "Wyoming LLC articles — The Christman AI Project LLC",
    status: "request",
    note: "Established 2026. Operating as Luma Cognify AI. Columbus, Ohio.",
  },
  {
    id: "inception",
    item: "NVIDIA Inception acceptance",
    status: "request",
    note: "August 15, 2026. Membership letter. Not a grant, not an investment.",
  },
  {
    id: "nvidia-silicon",
    item: "NVIDIA hardware seated in the field",
    status: "absent",
    note: "Local-first architecture is specified. No Jetson, IGX, or workstation GPU is seated as a field SKU. That conversation lives on the health desk.",
  },
  {
    id: "holoscan",
    item: "Holoscan / MONAI / Clara / BioNeMo integration",
    status: "absent",
    note: "Wrong to claim. Holoscan is an open door for AlphaWolf + OpenSmell. MONAI and BioNeMo are the wrong door. Not a demo.",
  },
  {
    id: "knox",
    item: "2018 Knox County Board of DD Community Partner Award",
    status: "request",
    note: "Cooking and nutrition classes. Community award. Not a tech award.",
  },
  {
    id: "cap-table",
    item: "Cap table / 409A / priced round docs",
    status: "absent",
    note: "Pre-revenue LLC. No invented valuation. SAFE blanks stay blank.",
  },
  {
    id: "financials",
    item: "Audited financials",
    status: "absent",
    note: "No revenue has been collected. There is nothing honest to audit yet.",
  },
  {
    id: "revenue",
    item: "Paid pilots, LOIs, customer contracts",
    status: "absent",
    note: "Do not say they exist. This round funds the field units that would generate them.",
  },
  {
    id: "irb",
    item: "IRB / RCT protocol",
    status: "absent",
    note: "Named as not yet on AlphaWolf and Inferno. Architecture plus lived thesis is not a trial.",
  },
  {
    id: "fda",
    item: "FDA pre-sub / SaMD filing",
    status: "absent",
    note: "Risk named. Filing not claimed. This round does not buy a clearance.",
  },
  {
    id: "insurance",
    item: "Liability / wandering / crisis insurance",
    status: "absent",
    note: "Round-two problem, named on AlphaWolf. Supermajority is the lock; insurance is not.",
  },
  {
    id: "va",
    item: "VA contract",
    status: "absent",
    note: "Inferno not-yet. Clinician-supervised seats this round. Federal later.",
  },
  {
    id: "hndl",
    item: "HNDL live post-quantum backend",
    status: "absent",
    note: "christman-crypto. ML-KEM / NIST FIPS 203. Reference path exists. Live backend is future work.",
  },
  {
    id: "opensmell",
    item: "OpenSmell as a shipped SKU",
    status: "absent",
    note: "In development. AlphaWolf is designed to take the feed. Not in the 50-home count.",
  },
];

export const VAULT_LAW =
  "A data room that hides the empty folders is a data room a partner should walk out of. Absent is a status. It is not a shame. It is the round.";
