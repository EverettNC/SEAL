import { usd } from "@/lib/seal/format";

type Row = { name: string; value: number; fill?: string };

export function MoneyBars({ rows }: { rows: Row[]; height?: number }) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  return (
    <ul className="space-y-3">
      {rows.map((row) => (
        <li key={row.name}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span>{row.name}</span>
            <span className="font-mono tabular-nums text-ink">{usd(row.value)}</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-bg">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max(4, (row.value / max) * 100)}%`,
                background: row.fill ?? "#8b3a32",
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
