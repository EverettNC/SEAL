import type { ReactNode } from "react";
import { usd } from "./format";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest text-muted">{children}</p>
  );
}

export function Stat({
  k,
  v,
  hint,
}: {
  k: string;
  v: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface px-4 py-3">
      <dt className="text-xs uppercase tracking-widest text-faint">{k}</dt>
      <dd className="mt-1 font-mono text-2xl tabular-nums">{v}</dd>
      {hint ? <p className="mt-1 text-xs text-faint">{hint}</p> : null}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-line bg-raised px-4 py-3 text-sm text-muted">
      {children}
    </aside>
  );
}

export function Funds({
  ask,
  lines,
}: {
  ask: number;
  lines: { label: string; pct: number; note: string }[];
}) {
  return (
    <table className="w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-widest text-muted">
        <tr>
          <th className="py-2 font-medium">Use</th>
          <th className="py-2 font-medium">Share</th>
          <th className="py-2 font-medium">Dollars</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line) => (
          <tr key={line.label} className="border-t border-line">
            <td className="py-3">
              <span className="block">{line.label}</span>
              <span className="block text-xs text-faint">{line.note}</span>
            </td>
            <td className="py-3 font-mono">{Math.round(line.pct * 100)}%</td>
            <td className="py-3 font-mono">{usd(ask * line.pct)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
