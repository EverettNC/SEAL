import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn } from "./router-DCPU2VTN.mjs";
import { t as HOUSE } from "./house-B3rM_BI0.mjs";
import { i as Page } from "./ui-bTpup7lW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vault-BVlRi1Zd.js
var import_jsx_runtime = require_jsx_runtime();
var VAULT = [
	{
		id: "closer",
		item: "This closer — math, sources, field, terms, objections",
		status: "desk",
		note: "What you are sitting in. Every dollar maps to a source or a unit."
	},
	{
		id: "site",
		item: "Public architecture contracts (reference implementations)",
		status: "desk",
		note: "thechristmanaiproject.com. Tested as reference. Not production field units."
	},
	{
		id: "provisional",
		item: "USPTO provisional TCAP-2026-001 — filing receipt",
		status: "request",
		note: "Filed April 27, 2026. Unpublished. Patent pending. Not a grant."
	},
	{
		id: "serials",
		item: "Application serial numbers",
		status: "request",
		note: "Live in the data room. Not printed on this desk until they can be confirmed."
	},
	{
		id: "llc",
		item: "Wyoming LLC articles — The Christman AI Project LLC",
		status: "request",
		note: "Established 2026. Operating as Luma Cognify AI. Columbus, Ohio."
	},
	{
		id: "inception",
		item: "NVIDIA Inception acceptance",
		status: "request",
		note: "August 15, 2026. Membership letter. Not a grant, not an investment."
	},
	{
		id: "nvidia-silicon",
		item: "NVIDIA hardware seated in the field",
		status: "absent",
		note: "Local-first architecture is specified. No Jetson, IGX, or workstation GPU is seated as a field SKU. That conversation lives on the health desk."
	},
	{
		id: "holoscan",
		item: "Holoscan / MONAI / Clara / BioNeMo integration",
		status: "absent",
		note: "Wrong to claim. Holoscan is an open door for AlphaWolf + OpenSmell. MONAI and BioNeMo are the wrong door. Not a demo."
	},
	{
		id: "knox",
		item: "2018 Knox County Board of DD Community Partner Award",
		status: "request",
		note: "Cooking and nutrition classes. Community award. Not a tech award."
	},
	{
		id: "cap-table",
		item: "Cap table / 409A / priced round docs",
		status: "absent",
		note: "Pre-revenue LLC. No invented valuation. SAFE blanks stay blank."
	},
	{
		id: "financials",
		item: "Audited financials",
		status: "absent",
		note: "No revenue has been collected. There is nothing honest to audit yet."
	},
	{
		id: "revenue",
		item: "Paid pilots, LOIs, customer contracts",
		status: "absent",
		note: "Do not say they exist. This round funds the field units that would generate them."
	},
	{
		id: "irb",
		item: "IRB / RCT protocol",
		status: "absent",
		note: "Named as not yet on AlphaWolf and Inferno. Architecture plus lived thesis is not a trial."
	},
	{
		id: "fda",
		item: "FDA pre-sub / SaMD filing",
		status: "absent",
		note: "Risk named. Filing not claimed. This round does not buy a clearance."
	},
	{
		id: "insurance",
		item: "Liability / wandering / crisis insurance",
		status: "absent",
		note: "Round-two problem, named on AlphaWolf. Supermajority is the lock; insurance is not."
	},
	{
		id: "va",
		item: "VA contract",
		status: "absent",
		note: "Inferno not-yet. Clinician-supervised seats this round. Federal later."
	},
	{
		id: "hndl",
		item: "HNDL live post-quantum backend",
		status: "absent",
		note: "christman-crypto. ML-KEM / NIST FIPS 203. Reference path exists. Live backend is future work."
	},
	{
		id: "opensmell",
		item: "OpenSmell as a shipped SKU",
		status: "absent",
		note: "In development. AlphaWolf is designed to take the feed. Not in the 50-home count."
	}
];
var VAULT_LAW = "A data room that hides the empty folders is a data room a partner should walk out of. Absent is a status. It is not a shame. It is the round.";
var LABEL = {
	desk: "In this desk",
	request: "On request",
	absent: "Does not exist"
};
function VaultPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: "Vault",
		title: "What exists. What does not.",
		lead: VAULT_LAW,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-x-auto rounded-xl border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[720px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-surface text-xs uppercase tracking-widest text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Item"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Note"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: VAULT.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line align-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 font-medium",
							children: row.item
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("inline-flex rounded-full px-2 py-1 font-mono text-xs uppercase tracking-wider", row.status === "desk" && "bg-raised text-fg", row.status === "request" && "bg-wax/20 text-ink", row.status === "absent" && "text-faint"),
								children: LABEL[row.status]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted",
							children: row.note
						})
					]
				}, row.id)) })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 grid gap-3 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium",
							children: HOUSE.contact
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: HOUSE.web,
							className: "mt-1 block break-all text-sm text-ink underline",
							target: "_blank",
							rel: "noreferrer",
							children: HOUSE.web
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "IP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium",
							children: HOUSE.patent.docket
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								"Filed ",
								HOUSE.patent.filed,
								". ",
								HOUSE.patent.status,
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Packet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "The one-pager a partner can print. Family ask, law, five beings, blanks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/packet",
							className: "mt-3 inline-flex min-h-11 items-center text-sm text-ink underline",
							children: "Open the packet"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { VaultPage as component };
