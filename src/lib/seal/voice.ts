import { create } from "zustand";
import { collectDeskBlocks, deskRoot, type DeskBlock } from "./page-text";

export type VoiceStatus = "idle" | "playing" | "paused";

type VoiceState = {
  status: VoiceStatus;
  index: number;
  total: number;
  rate: number;
  error: string | null;
  play: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  setRate: (rate: number) => void;
};

const RATES = [0.8, 0.92, 1.08] as const;

let blocks: DeskBlock[] = [];
let charStarts: number[] = [];
let fullText = "";
let utterance: SpeechSynthesisUtterance | null = null;
let wantPlay = false;

function clearHighlight() {
  document.querySelectorAll("[data-reading]").forEach((el) => el.removeAttribute("data-reading"));
}

function highlight(el: HTMLElement | undefined) {
  clearHighlight();
  if (!el) return;
  el.setAttribute("data-reading", "1");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  const pool = en.length ? en : voices;
  return (
    pool.find((v) => /premium|neural|natural|samantha|daniel|aria|jenny|ava/i.test(v.name)) ??
    pool.find((v) => v.localService) ??
    pool[0] ??
    null
  );
}

function blockAtChar(index: number): number {
  for (let i = charStarts.length - 1; i >= 0; i--) {
    if (index >= charStarts[i]) return i;
  }
  return 0;
}

function speak() {
  if (!wantPlay) return;
  const synth = window.speechSynthesis;
  if (!synth) {
    useDeskVoice.setState({
      status: "idle",
      error: "This browser has no voice reader. Copy the room instead.",
    });
    return;
  }

  try {
    synth.cancel();
  } catch {
    /* some browsers throw if nothing is queued */
  }

  const u = new SpeechSynthesisUtterance(fullText);
  u.lang = "en-US";
  u.rate = useDeskVoice.getState().rate;
  u.pitch = 1;
  try {
    const voice = pickVoice();
    if (voice) u.voice = voice;
  } catch {
    /* keep the default voice */
  }

  u.onboundary = (event) => {
    if (!wantPlay) return;
    const i = blockAtChar(event.charIndex);
    highlight(blocks[i]?.el);
    useDeskVoice.setState({ index: i });
  };

  u.onend = () => {
    if (!wantPlay) return;
    wantPlay = false;
    clearHighlight();
    utterance = null;
    useDeskVoice.setState({ status: "idle", index: 0 });
  };

  u.onerror = (event) => {
    if (event.error === "interrupted" || event.error === "canceled") return;
    wantPlay = false;
    clearHighlight();
    utterance = null;
    useDeskVoice.setState({
      status: "idle",
      error: "The voice reader stopped. Copy the room, or try Listen again.",
    });
  };

  utterance = u;
  highlight(blocks[0]?.el);
  useDeskVoice.setState({ status: "playing", error: null, index: 0, total: blocks.length });

  const start = () => {
    if (!wantPlay) return;
    try {
      synth.speak(u);
    } catch {
      wantPlay = false;
      clearHighlight();
      utterance = null;
      useDeskVoice.setState({
        status: "idle",
        error: "This browser blocked the voice reader. Copy the room instead.",
      });
    }
  };

  window.setTimeout(start, 0);
}

function loadAndSpeak() {
  const root = deskRoot();
  if (!root) {
    useDeskVoice.setState({ error: "Nothing to read on this room." });
    return;
  }
  const collected = collectDeskBlocks(root);
  if (!collected.length) {
    useDeskVoice.setState({ error: "Nothing to read on this room." });
    return;
  }

  blocks = collected;
  charStarts = [];
  let cursor = 0;
  const pieces: string[] = [];
  for (let i = 0; i < blocks.length; i++) {
    charStarts.push(cursor);
    const text = blocks[i].text;
    pieces.push(text);
    cursor += text.length;
    if (i < blocks.length - 1) {
      const sep = /[.!?]$/.test(text) ? " " : ". ";
      pieces.push(sep);
      cursor += sep.length;
    }
  }
  fullText = pieces.join("");

  let voices: SpeechSynthesisVoice[] = [];
  try {
    voices = window.speechSynthesis.getVoices();
  } catch {
    voices = [];
  }
  if (!voices.length && typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", () => speak(), { once: true });
    window.setTimeout(() => {
      if (wantPlay && useDeskVoice.getState().status !== "playing") speak();
    }, 400);
    useDeskVoice.setState({ total: blocks.length, error: null });
    return;
  }
  speak();
}

export const useDeskVoice = create<VoiceState>((set, get) => ({
  status: "idle",
  index: 0,
  total: 0,
  rate: 0.92,
  error: null,
  play: () => {
    if (!("speechSynthesis" in window)) {
      set({ error: "This browser has no voice reader. Copy the room instead." });
      return;
    }
    wantPlay = true;
    loadAndSpeak();
  },
  pause: () => {
    if (get().status !== "playing") return;
    try {
      window.speechSynthesis.pause();
    } catch {
      return;
    }
    set({ status: "paused" });
  },
  resume: () => {
    if (get().status !== "paused") return;
    wantPlay = true;
    try {
      window.speechSynthesis.resume();
    } catch {
      loadAndSpeak();
      return;
    }
    if (!window.speechSynthesis.speaking) {
      loadAndSpeak();
      return;
    }
    set({ status: "playing" });
  },
  stop: () => {
    wantPlay = false;
    try {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
    utterance = null;
    clearHighlight();
    set({ status: "idle", index: 0, error: null });
  },
  setRate: (rate) => {
    const next = RATES.reduce((best, n) => (Math.abs(n - rate) < Math.abs(best - rate) ? n : best), RATES[1]);
    set({ rate: next });
    if (get().status === "idle") return;
    wantPlay = true;
    loadAndSpeak();
  },
}));

export const VOICE_RATES: { value: number; label: string }[] = [
  { value: 0.8, label: "Slow" },
  { value: 0.92, label: "Steady" },
  { value: 1.08, label: "Quick" },
];
