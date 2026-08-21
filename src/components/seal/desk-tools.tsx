import { Check, Copy, Pause, Printer, Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTake } from "@/lib/seal/take";
import { useDeskVoice, VOICE_RATES } from "@/lib/seal/voice";
import { cn } from "@/lib/utils";

const tap = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";

export function DeskTools({ labeled = false }: { labeled?: boolean }) {
  const status = useDeskVoice((s) => s.status);
  const play = useDeskVoice((s) => s.play);
  const pause = useDeskVoice((s) => s.pause);
  const resume = useDeskVoice((s) => s.resume);
  const openTake = useTake((s) => s.openTake);
  const takeOpen = useTake((s) => s.open);
  const clipboard = useTake((s) => s.clipboard);

  return (
    <div className="flex items-center gap-1" aria-label="Take, print, and voice reader">
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg",
          tap,
        )}
        aria-label="Take this room"
        onClick={() => void openTake()}
      >
        <span className="relative size-4">
          <Check
            className={cn(
              "absolute inset-0 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
              takeOpen && clipboard === "ok"
                ? "scale-100 opacity-100 blur-none"
                : "scale-[0.25] opacity-0 blur-[4px]",
            )}
            aria-hidden="true"
          />
          <Copy
            className={cn(
              "size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
              takeOpen && clipboard === "ok"
                ? "scale-[0.25] opacity-0 blur-[4px]"
                : "scale-100 opacity-100 blur-none",
            )}
            aria-hidden="true"
          />
        </span>
        <span className={labeled ? "" : "hidden lg:inline"}>Take</span>
      </button>

      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg",
          tap,
        )}
        aria-label="Download a printable file of this room"
        onClick={() => void openTake({ download: "html" })}
      >
        <Printer className="size-4" aria-hidden="true" />
        <span className={labeled ? "" : "hidden lg:inline"}>Print</span>
      </button>

      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm",
          status === "idle" ? "text-muted hover:text-fg" : "text-fg",
          tap,
        )}
        aria-pressed={status !== "idle"}
        aria-label={
          status === "playing"
            ? "Pause voice reader"
            : status === "paused"
              ? "Resume voice reader"
              : "Read this room aloud"
        }
        onClick={() => {
          if (status === "playing") pause();
          else if (status === "paused") resume();
          else play();
        }}
      >
        <span className="relative size-4">
          <Pause
            className={cn(
              "absolute inset-0 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
              status === "playing"
                ? "scale-100 opacity-100 blur-none"
                : "scale-[0.25] opacity-0 blur-[4px]",
            )}
            aria-hidden="true"
          />
          <Volume2
            className={cn(
              "size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
              status === "playing"
                ? "scale-[0.25] opacity-0 blur-[4px]"
                : "scale-100 opacity-100 blur-none",
            )}
            aria-hidden="true"
          />
        </span>
        <span className={labeled ? "" : "hidden lg:inline"}>{status === "playing" ? "Pause" : "Listen"}</span>
      </button>
    </div>
  );
}

export function VoiceBar() {
  const status = useDeskVoice((s) => s.status);
  const index = useDeskVoice((s) => s.index);
  const total = useDeskVoice((s) => s.total);
  const rate = useDeskVoice((s) => s.rate);
  const error = useDeskVoice((s) => s.error);
  const pause = useDeskVoice((s) => s.pause);
  const resume = useDeskVoice((s) => s.resume);
  const stop = useDeskVoice((s) => s.stop);
  const setRate = useDeskVoice((s) => s.setRate);

  if (status === "idle") return null;

  return (
    <div className="border-t border-line bg-raised/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2 md:px-6">
        <p className="mr-auto text-xs text-muted" aria-live="polite">
          {status === "paused" ? "Paused" : "Reading this room"}
          {total ? ` · ${index + 1} of ${total}` : ""}
        </p>
        {error ? <p className="text-xs text-ink">{error}</p> : null}
        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg",
            tap,
          )}
          onClick={() => (status === "playing" ? pause() : resume())}
        >
          {status === "playing" ? "Pause" : "Resume"}
        </button>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg",
            tap,
          )}
          onClick={() => stop()}
        >
          <Square className="size-3.5" aria-hidden="true" />
          Stop
        </button>
        <div className="flex items-center gap-1" role="group" aria-label="Reading speed">
          {VOICE_RATES.map((item) => (
            <button
              key={item.value}
              type="button"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-3 text-xs uppercase tracking-widest",
                tap,
                item.value === rate ? "text-fg" : "text-faint hover:text-muted",
              )}
              aria-pressed={item.value === rate}
              onClick={() => setRate(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CopyListenRow({ className }: { className?: string }) {
  const status = useDeskVoice((s) => s.status);
  const play = useDeskVoice((s) => s.play);
  const pause = useDeskVoice((s) => s.pause);
  const resume = useDeskVoice((s) => s.resume);
  const openTake = useTake((s) => s.openTake);
  const clipboard = useTake((s) => s.clipboard);
  const takeOpen = useTake((s) => s.open);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (takeOpen && clipboard === "ok") setCopied(true);
  }, [takeOpen, clipboard]);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <div className={cn("flex flex-wrap gap-3", className)} data-desk-skip>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-md bg-wax px-4 text-sm font-medium text-wax-fg",
          tap,
        )}
        onClick={() => void openTake()}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        Take this room
      </button>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm",
          tap,
        )}
        onClick={() => void openTake({ download: "html" })}
      >
        <Printer className="size-4" aria-hidden="true" />
        Print
      </button>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm",
          tap,
        )}
        onClick={() => {
          if (status === "playing") pause();
          else if (status === "paused") resume();
          else play();
        }}
      >
        {status === "playing" ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Volume2 className="size-4" aria-hidden="true" />
        )}
        {status === "playing" ? "Pause" : "Listen"}
      </button>
    </div>
  );
}
