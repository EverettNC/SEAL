export const OBJECTIONS: {
  id: string;
  ask: string;
  answer: string;
  go?: string;
}[] = [
  {
    id: "revenue",
    ask: "There is no revenue.",
    answer:
      "Correct. None has been collected, so none is printed. This round buys named field units. The only dollars we will model until money is in the door are this-round units × seated price. That is not booked ARR, and we will not dress it as a multiple.",
    go: "/ledger",
  },
  {
    id: "provisional",
    ask: "A provisional is not a patent.",
    answer:
      "Correct. The family filing is a USPTO provisional, patent pending, unpublished. Filed April 27, 2026. Conversion is due April 27, 2027. Conversion is a line in the use of funds. Serials live in the vault and are not printed here until they can be confirmed.",
    go: "/vault",
  },
  {
    id: "inception",
    ask: "NVIDIA Inception is a logo.",
    answer:
      "It is membership. Accepted August 15, 2026. Not a grant. Not an investment. Not a GPU sitting in the bank. We will speak it as a path, not as capital. The health desk is the room that asks NVIDIA to name the next door — still not a check.",
    go: "/health",
  },
  {
    id: "nvidia-stack",
    ask: "Do you run on NVIDIA silicon.",
    answer:
      "Architecture is local-first. Brockston specifies a 32B Qwen on the same machine. No field unit is seated on a named NVIDIA SKU. We will not print Jetson, IGX, or Holoscan as a demo we do not have. MONAI and BioNeMo are the wrong door — we sit in the house, not the scanner.",
    go: "/health",
  },
  {
    id: "family",
    ask: "107 beings is a zoo.",
    answer:
      "One company. One provisional covering the family. 107 beings and 18 tools, every one fully structured and working, and every one counted. Eight carry a unit and a price today, so eight carry an SOM and an ask: seven FIELD, one LAB — Brockston is the gateway the others ride, which is why it is the largest ask and why it is labeled LAB on purpose. The Compound's divisions and Riley and THEBENCH sit in TAM and SAM from their own published prints. Their SOM prints when their units and prices are named. Nothing is left off the ledger, and nothing is invented to fill it.",
    go: "/field",
  },
  {
    id: "tam",
    ask: "The TAM is still a vanity number.",
    answer:
      "Burden is not TAM. We take the low published print, then haircut 20%. SOM is units × price. If the units do not hold, the dollar does not hold. AlphaWolf SOM is 100,000 homes × $2,400 — 1.35% of 7.4 million. Attack the units. Do not ask us for the $781B disease cost.",
    go: "/math",
  },
  {
    id: "wolf-homes",
    ask: "100,000 AlphaWolf homes is a wish.",
    answer:
      "It is a five-year reachable we named so it can be attacked. This round is 50 homes. Field dollars at list are 50 × $2,400. A partner who cannot defend 100,000 should not stamp AlphaWolf. They can still stamp the family, or stamp a being whose units they will defend.",
    go: "/beings/alphawolf",
  },
  {
    id: "ask-size",
    ask: "Why $10.6M instead of $2M into one being.",
    answer:
      "Because the provisional is a family filing and the conversion clock is one clock. A being-level check is allowed — it still lands in the same company. $10.6M is field units, on-device engineering, clinical/caregiver humans, IP conversion, and runway. It is not 2% of SOM. A $2M check that starves conversion is a check that wastes the priority date.",
    go: "/terms",
  },
  {
    id: "who-sells",
    ask: "Who sells this.",
    answer:
      "This round: founder-led clinic, caregiver, and home onboarding. Ang LeBlanc is head of sales. Channel is written per being. Clinic for AlphaVox. Home for AlphaWolf and Giovanni Skyrider. Clinician-supervised for Inferno. Studio seats for Brockston. We do not invent titles on a slide to look staffed.",
    go: "/field",
  },
  {
    id: "team",
    ask: "The team is four people.",
    answer:
      "Yes. Everett Christman, founder and CEO. Misty Christman, CFO. Patty Mette, CDO. Ang LeBlanc, head of sales. Gaps we name: clinical director / medical advisor, regulatory / SaMD counsel, more clinic-channel sales hands, additional on-device engineering. The round hires them. We do not seat ghosts.",
    go: "/house",
  },
  {
    id: "regulatory",
    ask: "FDA, SaMD, duty of care, 3 a.m. crisis.",
    answer:
      "Named first, per being. AlphaVox: SaMD path if we cross from communication aid into clinical claim. AlphaWolf: wandering and crisis invite liability; supermajority is the lock; insurance is round-two. Inferno: crisis product, 988 on the path, we are not 988; unsupervised therapy is refused. Giovanni Skyrider: company, not a medical device. This round does not claim FDA clearance, IRB, or a trial.",
    go: "/vault",
  },
  {
    id: "cap",
    ask: "Where is the cap.",
    answer:
      "Not on this desk. The paper is a post-money SAFE. Cap, discount, and MFN stay blank until a term sheet is a term sheet. Printing a cap to take a meeting is inventing a valuation. We will not.",
    go: "/terms",
  },
  {
    id: "founder",
    ask: "Why should this founder lead clinical-adjacent products.",
    answer:
      "He was nonverbal until five. Neurodivergent. Self-taught. Twenty years over-the-road. 2010: crushing injury, eight-month coma, told he would never walk again. He walked. Taught 3,000+ students in underserved rooms. 2018 Knox County Board of DD Community Partner Award — cooking and nutrition with developmentally disabled individuals, not a tech award. The beings are not a pitch he rented. He lived the rooms. That is not a substitute for a clinical trial. It is why the safety law is architectural.",
    go: "/house",
  },
  {
    id: "wait",
    ask: "Why not wait until 200 boards have sat.",
    answer:
      "Because the provisional clock does not wait. Conversion is April 27, 2027. Field units are what the ask buys. Waiting for revenue that the structure has not seated yet is how a family filing expires while a partner 'stays in touch.' Stamp the units, or do not stamp.",
    go: "/terms",
  },
  {
    id: "science-fair",
    ask: "OpenSmell and HNDL look like a science fair.",
    answer:
      "They are named as such. HNDL: post-quantum transit, ML-KEM / NIST FIPS 203. Reference path exists; live backend is future work. OpenSmell: low-cost olfactory / VOC sensing, open source and complete, held by the Constance Care Collective; the sensor is a device each family buys. AlphaWolf is designed to take the feed. It is not a SKU in the 50-home count. Open source is a separate report from the valuation. A closer that hid them would be the dishonest one.",
    go: "/house",
  },
  {
    id: "only-vox",
    ask: "What if we only fund AlphaVox.",
    answer:
      "Then you fund 200 boards, $1.8M, FIELD. The company still holds the family IP. Conversion of the family provisional still has to be paid or the priority date is at risk for the whole family. A Vox-only check that does not contribute to conversion is a check that rides the family's clock without funding it. Say that out loud if that is the deal.",
    go: "/beings/alphavox",
  },
];

export const TEAM_GAPS = [
  {
    seat: "Clinical director / medical advisor",
    why: "AlphaWolf and Inferno are clinical-adjacent. Architecture is not an RCT. Someone with a license has to sit in the loop before we pretend otherwise.",
  },
  {
    seat: "Regulatory / SaMD counsel",
    why: "AAC can cross into SaMD. Crisis features invite duty of care. Conversion of the provisional needs a lawyer who has done it.",
  },
  {
    seat: "Clinic and caregiver channel",
    why: "Ang LeBlanc leads sales. A channel that seats 15,000 boards needs more hands than one head of sales. The round funds them.",
  },
  {
    seat: "On-device / systems engineering beyond the house",
    why: "Local 32B-class models and offline TTS are hardware-and-systems problems. Patty Mette is CDO. The rest is the round.",
  },
] as const;
