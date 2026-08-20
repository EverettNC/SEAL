import type { Citation } from "./types";

/** Every number spoken in this closer maps to one of these, or to unit math. */
export const SOURCES: Citation[] = [
  {
    id: "alz-2026",
    title: "2026 Alzheimer's Disease Facts and Figures",
    publisher: "Alzheimer's Association",
    year: "2026",
    url: "https://www.alz.org/alzheimers-dementia/facts-figures",
    usedFor:
      "7.4 million Americans age 65+ living with Alzheimer's. Caregiver hours and unpaid-care value. AlphaWolf people count.",
  },
  {
    id: "schaeffer-2025",
    title: "The Cost of Dementia in 2025",
    publisher: "USC Schaeffer Center",
    year: "2025",
    url: "https://schaeffer.usc.edu/research/the-cost-of-dementia-in-2025/",
    usedFor:
      "US total cost of dementia $781B (2025 dollars). Medical + long-term care $232B. Labeled BURDEN — not TAM.",
  },
  {
    id: "precedence-dementia-2026",
    title: "Dementia Care Market Size",
    publisher: "Precedence Research",
    year: "2026",
    url: "https://www.precedenceresearch.com/dementia-care-market",
    usedFor:
      "Global dementia CARE market $22.97B in 2026. Category context. Not claimed as AlphaWolf TAM (includes facilities and services we do not sell).",
  },
  {
    id: "bri-aac-2025",
    title: "AAC Devices Market",
    publisher: "Business Research Insights",
    year: "2025",
    url: "https://www.businessresearchinsights.com/market-reports/augmentative-and-alternative-communication-aac-devices-market-121208",
    usedFor:
      "AAC devices ~$1.3B in 2025. We take the LOW published print, not the $3.4B high print.",
  },
  {
    id: "dataintelo-aac-2025",
    title: "AAC Device Market Research Report",
    publisher: "Dataintelo",
    year: "2025",
    url: "https://dataintelo.com/report/aac-device-market-report",
    usedFor: "High print $3.4B (2025). Shown so a partner can see we refused the top of the range.",
  },
  {
    id: "precedence-ptsd-2025",
    title: "PTSD Treatment Market",
    publisher: "Precedence Research",
    year: "2025",
    url: "https://www.precedenceresearch.com/post-traumatic-stress-disorder-treatment-market",
    usedFor: "PTSD treatment market $2.37B in 2025. Inferno category. Not the $19B wad.",
  },
  {
    id: "vfu-residential",
    title: "Treatment Centers",
    publisher: "Veterans Families United",
    year: "n.d.",
    url: "https://veteransfamiliesunited.org/treatment-centers/",
    usedFor:
      "Private PTSD / veteran treatment centers $20,000–$40,000 for a 30-day stay. Inferno comparable — a bed, not our product. We refuse that rate.",
  },
  {
    id: "dataintelo-companion-2025",
    title: "Elder Companion Volunteer App Market",
    publisher: "Dataintelo",
    year: "2025",
    url: "https://dataintelo.com/report/elder-companion-volunteer-app-market",
    usedFor: "Elder companion apps $2.8B in 2025. Tighter number; we take this over $8.9B virtual companion care.",
  },
  {
    id: "fmi-companion-2025",
    title: "Virtual Companion Care Market",
    publisher: "Future Market Insights",
    year: "2025",
    url: "https://www.futuremarketinsights.com/reports/virtual-companion-care-market",
    usedFor: "Virtual companion care $8.9B in 2025. Refused as Giuseppe TAM — too wide.",
  },
  {
    id: "tcap-site",
    title: "The Christman AI Project",
    publisher: "thechristmanaiproject.com",
    year: "2026",
    url: "https://thechristmanaiproject.com/",
    usedFor:
      "Entity, team, TCAP-2026-001 (filed April 27, 2026), architecture, safety law, in-development beings.",
  },
];
