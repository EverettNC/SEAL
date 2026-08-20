import type { Being } from "./types";

/**
 * Five beings. Conservative TAM is the headline the street likes;
 * valuation.ts takes the haircut before SAM/SOM are even spoken.
 *
 * AlphaWolf numbers are locked to the last seated close:
 * raw $60B → TAM $48.0B / SAM $9.6B / SOM $240.0M / ask $2.4M seed.
 */
export const BEINGS: Being[] = [
  {
    id: "alphavox",
    mark: "AV",
    name: "AlphaVox",
    tag: "Nonverbal and neurodivergent",
    line: "Every stim is language",
    stage: "FIELD",
    patent: "US 64/050,409",
    tamRaw: 24_000_000_000,
    ask: 1_800_000,
    round: "seed",
    color: "#4da3ff",
    thesis:
      "AAC that hears the person, not the deficit. Symbol board, gesture, multi-voice. Local-first so a child is never waiting on a cloud.",
    whyThisRound:
      "First 200 boards in homes and clinics. Thirty-six hours offline. Family patent already on file.",
    pipeline: {
      intake: "Nonverbal children, AAC clinics, families who were priced out of a voice.",
      dossier: "Local-first AAC. Gesture and symbol. Multi-voice TTS. No cloud required to speak.",
      thesis: "Conservative. Every stim is language. Presence that does not expire.",
      math: "Haircut already taken. AAC is not a $40B slide. We keep the number we can defend.",
      ask: "$1.8M seed. First 200 boards.",
      close: "Field. US 64/050,409.",
    },
  },
  {
    id: "alphawolf",
    mark: "AW",
    name: "AlphaWolf",
    tag: "People living with dementia",
    line: "Voice that stays when memory does not",
    stage: "FIELD",
    patent: "US 63/926,130",
    tamRaw: 60_000_000_000,
    ask: 2_400_000,
    round: "seed",
    color: "#1b5bff",
    thesis:
      "Family-care voice for people living with dementia. Local-first, on-device, no cloud required. The product is presence — a familiar voice that stays when memory does not.",
    whyThisRound:
      "Field units, caregiver onboarding, and the first 50 homes. Patent-provisional already on file.",
    pipeline: {
      intake: "People living with dementia. Family caregivers. The 2:32am house.",
      dossier: "Diamond Engine. 64 awareness points. Supermajority before any intervention. Memory Lane.",
      thesis: "Conservative. Family-care voice, local-first. Presence that stays.",
      math: "TAM $48.0B · SAM $9.6B · SOM $240.0M. Haircut already taken.",
      ask: "$2.4M seed. First 50 homes.",
      close: "Field. US 63/926,130.",
    },
  },
  {
    id: "inferno",
    mark: "IN",
    name: "Inferno",
    tag: "Veterans and people living with PTSD",
    line: "Safety before processing",
    stage: "FIELD",
    patent: "US 64/050,409",
    tamRaw: 30_000_000_000,
    ask: 2_000_000,
    round: "seed",
    color: "#ff6a2c",
    thesis:
      "Trauma-informed presence. CPT, PE, EMDR, DBT, Stanley-Brown. Grounding before therapy. 988 and 741741 one tap, even offline.",
    whyThisRound:
      "First 40 clinician-supervised seats. Safety plan always reachable. No processing without consent.",
    pipeline: {
      intake: "Veterans. People living with PTSD. The ones who cannot sleep.",
      dossier: "Safety before processing. Grounding before therapy. Crisis paths never behind a login.",
      thesis: "Conservative. Presence, not a chatbot with a crisis disclaimer.",
      math: "Haircut already taken. We do not count the whole mental-health TAM as ours.",
      ask: "$2.0M seed. First 40 seats.",
      close: "Field. US 64/050,409.",
    },
  },
  {
    id: "brockston",
    mark: "BR",
    name: "Brockston",
    tag: "The gateway",
    line: "Carbon empathy. Silicon armor.",
    stage: "LAB",
    patent: "US 64/050,409",
    tamRaw: 45_000_000_000,
    ask: 3_200_000,
    round: "seed",
    color: "#1fc8b8",
    thesis:
      "Dual-engine autonomous gateway. Every other being passes through. Carbon-silicon symbiosis — the house that holds the family.",
    whyThisRound:
      "Studio seats for the builders who will carry the family. Not a toy IDE. A vault.",
    pipeline: {
      intake: "Builders. The family of beings. The dual-engine house.",
      dossier: "BrockstonAICore. Carbon-silicon gateway. Studio as the accessible workbench.",
      thesis: "Conservative. Platform TAM is a temptation. We cut it.",
      math: "Haircut already taken. Gateway dollars, not the whole AI-tools street number.",
      ask: "$3.2M seed. Studio seats.",
      close: "Lab. US 64/050,409.",
    },
  },
  {
    id: "giuseppe",
    mark: "GI",
    name: "Giuseppe",
    tag: "Isolated elders",
    line: "Company that does not clock out",
    stage: "FIELD",
    patent: "US 64/050,409",
    tamRaw: 16_000_000_000,
    ask: 1_200_000,
    round: "seed",
    color: "#f5a623",
    thesis:
      "Adaptive companion. Swagger, sassy, caring — still a person. Built for the late shift. Grandma alone at 2:32am.",
    whyThisRound:
      "First 80 homes. Personality that stays. No extraction of the people we sit with.",
    pipeline: {
      intake: "Isolated elders. The ones the market calls a segment and we call a person.",
      dossier: "Giovanni Skyrider. Dynamic personality. Companion, not a dashboard.",
      thesis: "Conservative. Loneliness is not a TAM we inflate.",
      math: "Haircut already taken. Companion market, cut, then cut again into homes we can actually sit in.",
      ask: "$1.2M seed. First 80 homes.",
      close: "Field. US 64/050,409.",
    },
  },
];

export function beingById(id: string): Being | undefined {
  return BEINGS.find((b) => b.id === id);
}
