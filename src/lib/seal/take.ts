import { create } from "zustand";
import { collectDeskBlocks, deskRoot, formatDeskCopy, writeClipboard } from "./page-text";

export type ClipboardState = "idle" | "ok" | "blocked";

type TakeState = {
  open: boolean;
  text: string;
  title: string;
  clipboard: ClipboardState;
  downloaded: null | "txt" | "html";
  openTake: (opts?: { download?: "txt" | "html" }) => Promise<void>;
  close: () => void;
  retryCopy: () => Promise<void>;
  download: (kind: "txt" | "html") => void;
};

export function isFramed(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export function roomSlug(): string {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "command";
  return path.replace(/^\//, "").replace(/\//g, "-");
}

export function roomTitle(): string {
  return (
    document.querySelector("[data-desk-page] h1")?.textContent?.replace(/\s+/g, " ").trim() ??
    "SEAL"
  );
}

export function collectRoomText(): string | null {
  const root = deskRoot();
  if (!root) return null;
  const blocks = collectDeskBlocks(root);
  if (!blocks.length) return null;
  return formatDeskCopy(window.location.href, blocks);
}

function escapeHtml(value: string): string {
  const amp = String.fromCharCode(38);
  return value
    .replace(/&/g, `${amp}amp;`)
    .replace(/</g, `${amp}lt;`)
    .replace(/>/g, `${amp}gt;`)
    .replace(/"/g, `${amp}quot;`);
}

export function printableHtml(text: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(title)} · SEAL</title>
<style>
  @page { margin: 0.7in; }
  html, body { margin: 0; background: #f0e6d4; color: #1c1410; }
  body { font: 16px/1.55 Georgia, "Times New Roman", serif; }
  main { max-width: 40rem; margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
  .kicker { letter-spacing: 0.22em; text-transform: uppercase; font-size: 0.72rem; color: #5c4f3f; }
  h1 { font-size: 1.7rem; font-weight: 500; margin: 0.6rem 0 1.25rem; }
  pre { white-space: pre-wrap; font: inherit; margin: 0; }
</style>
</head>
<body>
<main>
<p class="kicker">SEAL · The Christman AI Project LLC</p>
<h1>${escapeHtml(title)}</h1>
<pre>${escapeHtml(text)}</pre>
</main>
</body>
</html>`;
}

export function downloadTextFile(filename: string, content: string, mime: string): boolean {
  try {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500);
    return true;
  } catch {
    return false;
  }
}

export const useTake = create<TakeState>((set, get) => ({
  open: false,
  text: "",
  title: "SEAL",
  clipboard: "idle",
  downloaded: null,
  openTake: async (opts) => {
    const text = collectRoomText();
    if (!text) {
      set({
        open: true,
        text: "Nothing to take from this room.",
        title: "SEAL",
        clipboard: "blocked",
        downloaded: null,
      });
      return;
    }
    const title = roomTitle();
    const copied = await writeClipboard(text);
    let downloaded: null | "txt" | "html" = null;
    if (opts?.download === "txt") {
      downloadTextFile(`seal-${roomSlug()}.txt`, text, "text/plain");
      downloaded = "txt";
    }
    if (opts?.download === "html") {
      downloadTextFile(`seal-${roomSlug()}.html`, printableHtml(text, title), "text/html");
      downloaded = "html";
    }
    set({
      open: true,
      text,
      title,
      clipboard: copied ? "ok" : "blocked",
      downloaded,
    });
  },
  close: () => set({ open: false, downloaded: null }),
  retryCopy: async () => {
    const ok = await writeClipboard(get().text);
    set({ clipboard: ok ? "ok" : "blocked" });
  },
  download: (kind) => {
    const { text, title } = get();
    if (kind === "txt") {
      downloadTextFile(`seal-${roomSlug()}.txt`, text, "text/plain");
    } else {
      downloadTextFile(`seal-${roomSlug()}.html`, printableHtml(text, title), "text/html");
    }
    set({ downloaded: kind });
  },
}));
