export const NAV = [
  { to: "/", label: "Command", match: (p: string) => p === "/" },
  { to: "/health", label: "Health", match: (p: string) => p.startsWith("/health") },
  { to: "/ledger", label: "Ledger", match: (p: string) => p.startsWith("/ledger") },
  { to: "/math", label: "Math", match: (p: string) => p.startsWith("/math") },
  { to: "/house", label: "House", match: (p: string) => p.startsWith("/house") },
  { to: "/field", label: "Field", match: (p: string) => p.startsWith("/field") },
  { to: "/terms", label: "Terms", match: (p: string) => p.startsWith("/terms") },
  { to: "/room", label: "Room", match: (p: string) => p.startsWith("/room") },
  { to: "/vault", label: "Vault", match: (p: string) => p.startsWith("/vault") },
  { to: "/closer", label: "Closer", match: (p: string) => p.startsWith("/closer") },
] as const;

export const PARTNER_PATH = [
  { to: "/math", n: "01", label: "Math", line: "The law. Sources. What we refuse." },
  { to: "/field", n: "02", label: "Field", line: "Eighteen months. Who else is in the room." },
  { to: "/terms", n: "03", label: "Terms", line: "The paper, including the blanks." },
  { to: "/room", n: "04", label: "Room", line: "The questions we ask ourselves first." },
  { to: "/vault", n: "05", label: "Vault", line: "What exists. What does not." },
  { to: "/closer", n: "06", label: "Closer", line: "Stamp only what you will say out loud." },
] as const;

export const HEALTH_PATH: {
  n: string;
  label: string;
  line: string;
  to?: "/health" | "/vault" | "/house";
  beingId?: "alphawolf" | "alphavox" | "inferno";
}[] = [
  { n: "01", label: "Health", line: "For Megan. Not a term sheet.", to: "/health" },
  {
    n: "02",
    label: "AlphaWolf",
    line: "The 2:32am house. Supermajority lock.",
    beingId: "alphawolf",
  },
  {
    n: "03",
    label: "AlphaVox",
    line: "A board that still speaks when the tower dies.",
    beingId: "alphavox",
  },
  {
    n: "04",
    label: "Inferno",
    line: "Safety before processing. Clinician in the loop.",
    beingId: "inferno",
  },
  {
    n: "05",
    label: "Vault",
    line: "Empty folders named. Including silicon we have not seated.",
    to: "/vault",
  },
  { n: "06", label: "House", line: "Who we are. Inception as membership.", to: "/house" },
];
