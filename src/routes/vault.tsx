import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/seal/ui";
import { HOUSE } from "@/lib/seal/house";
import { VAULT, VAULT_LAW, type VaultStatus } from "@/lib/seal/vault";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vault")({ component: VaultPage });

const LABEL: Record<VaultStatus, string> = {
  desk: "In this desk",
  request: "On request",
  absent: "Does not exist",
};

function VaultPage() {
  return (
    <Page kicker="Vault" title="What exists. What does not." lead={VAULT_LAW}>
      <div className="mt-8 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-widest text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Note</th>
            </tr>
          </thead>
          <tbody>
            {VAULT.map((row) => (
              <tr key={row.id} className="border-t border-line align-top">
                <td className="px-4 py-3 font-medium">{row.item}</td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-1 font-mono text-xs uppercase tracking-wider",
                      row.status === "desk" && "bg-raised text-fg",
                      row.status === "request" && "bg-wax/20 text-ink",
                      row.status === "absent" && "text-faint",
                    )}
                  >
                    {LABEL[row.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="text-xs uppercase tracking-widest text-faint">Contact</p>
          <p className="mt-2 font-medium">{HOUSE.contact}</p>
          <a href={HOUSE.web} className="mt-1 block break-all text-sm text-ink underline" target="_blank" rel="noreferrer">
            {HOUSE.web}
          </a>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="text-xs uppercase tracking-widest text-faint">IP</p>
          <p className="mt-2 font-medium">{HOUSE.patent.docket}</p>
          <p className="mt-1 text-sm text-muted">
            Filed {HOUSE.patent.filed}. {HOUSE.patent.status}.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="text-xs uppercase tracking-widest text-faint">Packet</p>
          <p className="mt-2 text-sm text-muted">
            The one-pager a partner can print. Family ask, law, five beings, blanks.
          </p>
          <Link to="/packet" className="mt-3 inline-flex min-h-11 items-center text-sm text-ink underline">
            Open the packet
          </Link>
        </div>
      </section>
    </Page>
  );
}
