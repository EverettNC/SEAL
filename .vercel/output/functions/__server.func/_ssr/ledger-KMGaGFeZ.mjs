import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStamps } from "./router-DCPU2VTN.mjs";
import { n as people, r as usd, t as pct } from "./format-YndtVFFj.mjs";
import { n as HAIRCUT, t as BEINGS } from "./catalog-D4xH3faF.mjs";
import { n as value, r as valueAll } from "./valuation-Bvq1t34I.mjs";
import { i as Page } from "./ui-bTpup7lW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ledger-KMGaGFeZ.js
var import_jsx_runtime = require_jsx_runtime();
function Ledger() {
	const stamps = useStamps((s) => s.stamps);
	const total = valueAll(BEINGS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: "Ledger",
		title: "Every number, seated.",
		lead: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"TAM is sourced headline × ",
			pct(HAIRCUT),
			". SOM is units × price. Ask is the round. Field dollars are this-round units × the same price — that is the only revenue we will model until money is actually in the door."
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-x-auto rounded-xl border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[1080px] text-left text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface text-xs uppercase tracking-widest text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Being"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Stage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "TAM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "SAM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "SOM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Units"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "This round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Ask"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Stamp"
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: BEINGS.map((being) => {
						const v = value(being);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/beings/$beingId",
										params: { beingId: being.id },
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium",
											children: being.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-muted",
											children: being.legalLine
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs",
									children: being.stage
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: usd(v.tam)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: usd(v.sam)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: usd(v.som)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 font-mono text-xs tabular-nums",
									children: [
										people(being.som.units),
										" × ",
										usd(being.som.arpu)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 font-mono text-xs tabular-nums",
									children: [
										being.fieldUnits.toLocaleString(),
										" · ",
										usd(v.fieldDollars)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: [
										usd(v.ask),
										" ",
										being.round
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-xs text-muted",
									children: stamps[being.id] ? stamps[being.id].slice(0, 10) : "—"
								})
							]
						}, being.id);
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: "Family"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs",
								children: "LLC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: usd(total.tam)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: usd(total.sam)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: usd(total.som)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs text-muted",
								children: "units named per being"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs tabular-nums",
								children: usd(total.fieldDollars)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: usd(total.ask)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 text-xs text-muted",
								children: [
									Object.keys(stamps).length,
									" of ",
									BEINGS.length
								]
							})
						]
					}) })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-xs text-faint",
			children: [
				"Haircut ",
				pct(1 - HAIRCUT),
				" on every sourced headline. SOM window is five years. Field this-round is smaller on purpose — that is what the ask buys. ",
				usd(total.fieldDollars),
				" ",
				"modeled is not booked."
			]
		})]
	});
}
//#endregion
export { Ledger as component };
