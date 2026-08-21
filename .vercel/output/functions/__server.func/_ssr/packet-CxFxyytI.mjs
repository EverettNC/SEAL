import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useTake } from "./router-DCPU2VTN.mjs";
import { t as HOUSE } from "./house-B3rM_BI0.mjs";
import { r as usd, t as pct } from "./format-YndtVFFj.mjs";
import { t as BEINGS } from "./catalog-D4xH3faF.mjs";
import { n as value, r as valueAll, t as familyUseOfFunds } from "./valuation-Bvq1t34I.mjs";
import { t as SealMark } from "./mark-B5rOGHML.mjs";
import { t as Button } from "./button-CfrNCNoh.mjs";
import { t as INSTRUMENT } from "./terms-sEpU8KnD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packet-CxFxyytI.js
var import_jsx_runtime = require_jsx_runtime();
function PacketPage() {
	const family = valueAll(BEINGS);
	const funds = familyUseOfFunds(BEINGS);
	const openTake = useTake((s) => s.openTake);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper text-paper-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print mx-auto flex max-w-3xl items-center justify-between px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-paper-muted",
				children: "Printable partner packet · cream paper"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "wax",
				onClick: () => void openTake({ download: "html" }),
				children: "Print"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-8 md:px-0 md:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-paper-line pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-[0.35em]",
							children: "SEAL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-serif text-4xl tracking-tight",
							children: "The Christman AI Project LLC"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-paper-muted",
							children: [
								HOUSE.formed,
								". Operating as ",
								HOUSE.trade,
								". ",
								HOUSE.operates,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl",
							children: "Five beings. Sourced math. One close at a time. Burden is not TAM. Provisional is pending. Inception is membership. No revenue is printed because none has been collected."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PacketStat, {
							k: "Family TAM",
							v: usd(family.tam)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PacketStat, {
							k: "Family SAM",
							v: usd(family.sam)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PacketStat, {
							k: "Family SOM",
							v: usd(family.som)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PacketStat, {
							k: "Family ask",
							v: usd(family.ask)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-paper-muted",
					children: [
						"This-round field modeled ",
						usd(family.fieldDollars),
						" at list. Not booked. Paper:",
						" ",
						INSTRUMENT.paper,
						". Cap is blank. Conversion of ",
						HOUSE.patent.docket,
						" due",
						" ",
						INSTRUMENT.conversion.due,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Law"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-sm",
						children: HOUSE.law.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", line] }, line))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Five beings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: BEINGS.map((being) => {
							const v = value(being);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-4 border-b border-paper-line pb-4 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
									mark: being.mark,
									color: being.color,
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-serif text-xl",
											children: [
												being.name,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-sans text-xs uppercase tracking-widest text-paper-muted",
													children: being.stage
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-paper-muted",
											children: being.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 font-mono text-xs",
											children: [
												"TAM ",
												usd(v.tam),
												" · SAM ",
												usd(v.sam),
												" · SOM ",
												usd(v.som),
												" · ask ",
												usd(being.ask),
												" ",
												"· ",
												being.fieldUnits.toLocaleString(),
												" ",
												being.fieldLabel
											]
										})
									]
								})]
							}, being.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-2xl",
						children: ["One-check use of funds · ", usd(family.ask)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-sm",
						children: funds.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4 border-b border-paper-line py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								row.label,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-paper-muted",
									children: [
										"(",
										pct(row.pct),
										")"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: usd(row.dollars)
							})]
						}, row.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "Paper"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: INSTRUMENT.paperNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm",
							children: [
								HOUSE.patent.docket,
								" · filed ",
								HOUSE.patent.filed,
								" · ",
								HOUSE.patent.status,
								".",
								" ",
								HOUSE.inventor
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm",
							children: [
								"Contact ",
								HOUSE.contact,
								" · ",
								HOUSE.web
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 font-display text-xs tracking-[0.3em] text-paper-muted",
					children: "STAMP ONLY WHAT YOU WILL SAY OUT LOUD"
				})
			]
		})]
	});
}
function PacketStat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-paper-line px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-widest text-paper-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-mono text-xl tabular-nums",
			children: v
		})]
	});
}
//#endregion
export { PacketPage as component };
