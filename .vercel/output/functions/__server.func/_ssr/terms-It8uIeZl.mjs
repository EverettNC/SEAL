import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usd, t as pct } from "./format-YndtVFFj.mjs";
import { t as BEINGS } from "./catalog-D4xH3faF.mjs";
import { r as valueAll, t as familyUseOfFunds } from "./valuation-Bvq1t34I.mjs";
import { a as Stat, i as Page, r as Note } from "./ui-bTpup7lW.mjs";
import { t as MoneyBars } from "./funds-chart-DSl_2yuk.mjs";
import { n as TERMS_LAW, t as INSTRUMENT } from "./terms-sEpU8KnD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-It8uIeZl.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	const family = valueAll(BEINGS);
	const funds = familyUseOfFunds(BEINGS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: "Terms",
		title: "The paper, including the blanks.",
		lead: INSTRUMENT.paperNote,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Vehicle",
						v: "One LLC",
						hint: INSTRUMENT.formed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Paper",
						v: "SAFE",
						hint: `${INSTRUMENT.round} · post-money`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Family ask",
						v: usd(INSTRUMENT.familyAsk),
						hint: "One wire, or a being-level check"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Conversion",
						v: "Apr 27",
						hint: `${INSTRUMENT.conversion.docket} due ${INSTRUMENT.conversion.due}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-2 text-sm text-muted md:grid-cols-2",
				children: TERMS_LAW.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-line bg-surface px-4 py-3",
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12 grid gap-3 md:grid-cols-2",
				children: INSTRUMENT.checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "block text-xs uppercase tracking-widest text-faint",
					children: [check.label, check.amount ? ` · ${usd(check.amount)}` : ""]
				}), check.note] }, check.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "What they buy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: INSTRUMENT.theyBuy.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg border border-line px-4 py-3",
						children: line
					}, line))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "What they do not buy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: INSTRUMENT.theyDoNotBuy.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg border border-line px-4 py-3",
						children: line
					}, line))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Blanks we will not fill in to take a meeting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 text-sm text-muted md:grid-cols-2",
					children: INSTRUMENT.blanks.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg border border-line bg-raised px-4 py-3",
						children: line
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-2xl",
						children: ["One-check use of funds · ", usd(family.ask)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: [
							"Rolled from the five beings. Not a new budget invented for the family slide. Field modeled this round ",
							usd(family.fieldDollars),
							" at list — not booked."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-xl border border-line bg-surface p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyBars, {
							rows: funds.map((row) => ({
								name: row.label,
								value: row.dollars,
								fill: "#8b3a32"
							})),
							height: 260
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-xl border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface text-xs uppercase tracking-widest text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Bucket"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Share"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Dollars"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: funds.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: row.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono tabular-nums",
										children: pct(row.pct)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono tabular-nums",
										children: usd(row.dollars)
									})
								]
							}, row.label)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "The clock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: INSTRUMENT.conversion.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: INSTRUMENT.counsel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vault",
					className: "inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg",
					children: "Open the vault"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/room",
					className: "inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm",
					children: "Open the room"
				})]
			})
		]
	});
}
//#endregion
export { TermsPage as component };
