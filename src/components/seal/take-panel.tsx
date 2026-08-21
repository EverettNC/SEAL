import { Check, Copy, Download, Printer, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { isFramed, useTake } from "@/lib/seal/take";
import { cn } from "@/lib/utils";

const tap = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";

export function TakePanel() {
  const open = useTake((s) => s.open);
  const text = useTake((s) => s.text);
  const clipboard = useTake((s) => s.clipboard);
  const downloaded = useTake((s) => s.downloaded);
  const close = useTake((s) => s.close);
  const retryCopy = useTake((s) => s.retryCopy);
  const download = useTake((s) => s.download);
  const box = useRef<HTMLTextAreaElement>(null);
  const framed = typeof window !== "undefined" ? isFramed() : true;

  useEffect(() => {
    if (!open) return;
    const node = box.current;
    if (node) {
      node.focus();
      node.select();
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, text, close]);

  if (!open) return null;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-start justify-center p-3 pt-6 md:pt-12" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-bg/80"
        aria-label="Close take panel"
        onClick={() => close()}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="take-title"
        className="relative z-10 flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-border)]"
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3 md:px-5">
          <div>
            <p id="take-title" className="font-serif text-2xl">
              Take this room
            </p>
            <p className="mt-1 text-sm text-muted">
              {clipboard === "ok"
                ? "On your clipboard. Also in the box if you want a file."
                : framed
                  ? "This preview cannot write your clipboard or open a printer. That is the frame, not the desk. The words are selected. Copy them, or download a file you can print from your machine."
                  : "The words are selected. Copy them, or download a file."}
            </p>
            {downloaded ? (
              <p className="mt-1 text-sm text-ink">
                {downloaded === "html"
                  ? "Printable file sent to your downloads. Open it, then print."
                  : "Text file sent to your downloads."}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted hover:text-fg",
              tap,
            )}
            aria-label="Close"
            onClick={() => close()}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-line px-4 py-3 md:px-5">
          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md bg-wax px-4 text-sm font-medium text-wax-fg",
              tap,
            )}
            onClick={() => {
              box.current?.focus();
              box.current?.select();
              void retryCopy();
            }}
          >
            {clipboard === "ok" ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Copy className="size-4" aria-hidden="true" />
            )}
            {clipboard === "ok" ? "Copied" : "Copy"}
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm",
              tap,
            )}
            onClick={() => download("txt")}
          >
            <Download className="size-4" aria-hidden="true" />
            Download text
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm",
              tap,
            )}
            onClick={() => download("html")}
          >
            <Printer className="size-4" aria-hidden="true" />
            Download printable
          </button>
        </div>

        <label className="sr-only" htmlFor="take-text">
          Room text
        </label>
        <textarea
          id="take-text"
          ref={box}
          readOnly
          value={text}
          className="min-h-64 flex-1 resize-none bg-paper p-4 font-serif text-sm leading-relaxed text-paper-ink outline-none"
        />
      </div>
    </div>
  );
}
