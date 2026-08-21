import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/seal/ui";
import { BEINGS, HAIRCUT } from "@/lib/seal/catalog";
import { usd, pct, people } from "@/lib/seal/format";
import { useStamps } from "@/lib/seal/stamps";
import { value, valueAll } from "@/lib/seal/valuation";

export const Route = createFileRoute("/ledger")({ component: Ledger });

function Ledger() {
  const stamps = useStamps((s) => s.stamps);
  const total = valueAll(BEINGS);

  return (
    <Page
      kicker="Ledger"
      title="Every number, seated."
      lead={
        <>
          TAM is sourced headline × {pct(HAIRCUT)}. SOM is units × price. Ask is the round. Field
          dollars are this-round units × the same price — that is the only revenue we will model
          until money is actually in the door.
        </>
      }
    >
      <div className="mt-8 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[1080px] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-widest text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Being</th>
              <th className="px-4 py-3 font-medium">Stage</th>
              <th className="px-4 py-3 font-medium">TAM</th>
              <th className="px-4 py-3 font-medium">SAM</th>
              <th className="px-4 py-3 font-medium">SOM</th>
              <th className="px-4 py-3 font-medium">Units</th>
              <th className="px-4 py-3 font-medium">This round</th>
              <th className="px-4 py-3 font-medium">Ask</th>
              <th className="px-4 py-3 font-medium">Stamp</th>
            </tr>
          </thead>
          <tbody>
            {BEINGS.map((being) => {
              const v = value(being);
              return (
                <tr key={being.id} className="border-t border-line">
                  <td className="px-4 py-3">
                    <Link to="/beings/$beingId" params={{ beingId: being.id }} className="text-left">
                      <span className="block font-medium">{being.name}</span>
                      <span className="block text-xs text-muted">{being.legalLine}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{being.stage}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{usd(v.tam)}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{usd(v.sam)}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{usd(v.som)}</td>
                  <td className="px-4 py-3 font-mono text-xs tabular-nums">
                    {people(being.som.units)} × {usd(being.som.arpu)}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs tabular-nums">
                    {being.fieldUnits.toLocaleString()} · {usd(v.fieldDollars)}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums">
                    {usd(v.ask)} {being.round}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {stamps[being.id] ? stamps[being.id].slice(0, 10) : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t border-line bg-surface">
              <td className="px-4 py-3 font-medium">Family</td>
              <td className="px-4 py-3 font-mono text-xs">LLC</td>
              <td className="px-4 py-3 font-mono tabular-nums">{usd(total.tam)}</td>
              <td className="px-4 py-3 font-mono tabular-nums">{usd(total.sam)}</td>
              <td className="px-4 py-3 font-mono tabular-nums">{usd(total.som)}</td>
              <td className="px-4 py-3 text-xs text-muted">units named per being</td>
              <td className="px-4 py-3 font-mono text-xs tabular-nums">{usd(total.fieldDollars)}</td>
              <td className="px-4 py-3 font-mono tabular-nums">{usd(total.ask)}</td>
              <td className="px-4 py-3 text-xs text-muted">
                {Object.keys(stamps).length} of {BEINGS.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="mt-4 text-xs text-faint">
        Haircut {pct(1 - HAIRCUT)} on every sourced headline. SOM window is five years. Field
        this-round is smaller on purpose — that is what the ask buys. {usd(total.fieldDollars)}{" "}
        modeled is not booked.
      </p>
    </Page>
  );
}
