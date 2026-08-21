import { Link, useRouterState } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { Toaster } from "sonner";
import { DeskTools, VoiceBar } from "@/components/seal/desk-tools";
import { TakePanel } from "@/components/seal/take-panel";
import { NAV } from "@/lib/seal/nav";
import { useStamps } from "@/lib/seal/stamps";
import { useDeskVoice } from "@/lib/seal/voice";
import { cn } from "@/lib/utils";

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const beingMatch = pathname.match(/^\/beings\/([^/]+)/);
  const beingId = beingMatch?.[1];

  useEffect(() => {
    void useStamps.persist.rehydrate();
  }, []);

  useEffect(() => {
    useDeskVoice.getState().stop();
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="no-print sticky top-0 z-30 border-b border-line bg-bg/92 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-4 py-3 md:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Link to="/" className="text-left">
            <p className="font-display text-lg tracking-widest text-fg">SEAL</p>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              The closing agent
            </p>
          </Link>
          <div className="col-start-2 flex items-center justify-end gap-1 pr-28 lg:col-start-3 lg:pr-0">
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              <DeskTools />
              <Link
                to="/packet"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm text-muted hover:text-fg"
              >
                <Printer className="size-4" aria-hidden="true" />
                Packet
              </Link>
            </div>
            {pathname.startsWith("/health") ? (
              <Link
                to="/beings/$beingId"
                params={{ beingId: "alphawolf" }}
                className="inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg"
              >
                Open AlphaWolf
              </Link>
            ) : beingId ? (
              <Link
                to="/closer/$beingId"
                params={{ beingId }}
                className="inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg"
              >
                Walk the close
              </Link>
            ) : (
              <Link
                to="/closer"
                className="inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg"
              >
                Walk the close
              </Link>
            )}
          </div>
          <nav
            className="col-span-2 min-w-0 overflow-x-auto text-sm [-ms-overflow-style:none] [scrollbar-width:none] lg:col-span-1 lg:col-start-2 lg:row-start-1 [&::-webkit-scrollbar]:hidden"
            aria-label="Desk"
          >
            <div className="flex items-center gap-0.5">
              {NAV.map((item) => {
                const active = item.match(pathname);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "inline-flex min-h-11 shrink-0 items-center rounded-md px-3",
                      active ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
        <div className="no-print flex flex-wrap items-center gap-1 border-t border-line px-4 py-1 pr-28 lg:hidden">
          <DeskTools labeled />
          <Link
            to="/packet"
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg"
          >
            <Printer className="size-4" aria-hidden="true" />
            Packet
          </Link>
        </div>
        <VoiceBar />
      </header>
      <div data-desk-page>{children}</div>
      <footer className="no-print border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-faint md:flex-row md:items-center md:justify-between md:px-6">
          <p>The Christman AI Project LLC · Wyoming · operating as Luma Cognify AI</p>
          <p>Burden is not TAM. Provisional is pending. Inception is membership. No revenue is printed.</p>
        </div>
      </footer>
      <TakePanel />
      <Toaster
        theme="dark"
        position="top-center"
        offset={72}
        toastOptions={{
          classNames: {
            toast:
              "border border-line bg-surface text-fg shadow-[var(--shadow-border)] font-sans",
            title: "text-fg",
            description: "text-muted",
          },
        }}
      />
    </div>
  );
}
