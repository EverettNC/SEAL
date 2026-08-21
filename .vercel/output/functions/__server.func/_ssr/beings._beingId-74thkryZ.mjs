import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStamps, r as Route$1 } from "./router-DCPU2VTN.mjs";
import { t as HOUSE } from "./house-B3rM_BI0.mjs";
import { n as people, r as usd } from "./format-YndtVFFj.mjs";
import { r as beingById } from "./catalog-D4xH3faF.mjs";
import { n as value } from "./valuation-Bvq1t34I.mjs";
import { n as COMPETITORS, t as CHANNELS } from "./field-mMg3WJxL.mjs";
import { t as SealMark } from "./mark-B5rOGHML.mjs";
import { a as Stat, r as Note, t as Funds } from "./ui-bTpup7lW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/beings._beingId-74thkryZ.js
var import_jsx_runtime = require_jsx_runtime();
function BeingView({ being, stamped }) {
	const v = value(being);
	const channel = CHANNELS.find((c) => c.beingId === being.id);
	const rival = COMPETITORS.find((c) => c.beingId === being.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 md:flex-row md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
					mark: being.mark,
					color: being.color,
					size: "lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-muted",
							children: being.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-serif text-5xl tracking-tight md:text-6xl",
							children: being.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg text-muted",
							children: being.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-faint",
							children: being.legalLine
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "Stage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-mono",
									children: being.stage
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "IP"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-mono",
									children: HOUSE.patent.docket
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "Ask"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 font-mono",
									children: [
										usd(being.ask),
										" ",
										being.round
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "This round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 font-mono",
									children: [
										being.fieldUnits.toLocaleString(),
										" ",
										being.fieldLabel
									]
								})] }),
								stamped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "Stamp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-mono",
									children: "Seated"
								})] }) : null
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "TAM",
						v: usd(v.tam),
						hint: `from ${usd(v.tamRaw)} sourced headline`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "SAM",
						v: usd(v.sam),
						hint: "Channel, written"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "SOM",
						v: usd(v.som),
						hint: `${people(being.som.units)} ${being.som.unitLabel} × ${usd(being.som.arpu)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: being.tamHow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: being.somHow
			}),
			being.comparable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Comparable — not our price"
					}),
					"$",
					being.comparable.low.toLocaleString(),
					"–$",
					being.comparable.high.toLocaleString(),
					" /",
					" ",
					being.comparable.unit,
					". ",
					being.comparable.note
				] })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-faint",
				children: [
					"This-round model: ",
					being.fieldUnits.toLocaleString(),
					" × ",
					usd(being.som.arpu),
					" =",
					" ",
					usd(v.fieldDollars),
					". That is not booked revenue."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Problem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose",
						children: being.problem
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Solution"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose",
						children: being.solution
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Thesis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose",
						children: being.thesis
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Why this round"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose",
						children: being.whyThisRound
					})] })
				]
			}),
			channel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Who buys"
					}), channel.whoBuys] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Who sells this round"
					}), channel.whoSells] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Not yet — do not say it is"
					}), channel.notYet] })
				]
			}) : null,
			rival ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "In the room already"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: rival.names
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["We win: ", rival.weWin]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["We lose if: ", rival.weLoseIf]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: being.architecture.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-line bg-surface px-4 py-3",
							children: line
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["Covered invention: ", being.coveredInvention]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Safety law"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: being.safety.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", line] }, line))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "We refuse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: being.refuse.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", line] }, line))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Built"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: being.built.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", line] }, line))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Not yet — do not say it is"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: being.notYet.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", line] }, line))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: ["Use of funds · ", usd(being.ask)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-xl border border-line bg-surface px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funds, {
						ask: being.ask,
						lines: being.useOfFunds
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Risks we name first"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: being.risks.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg border border-line px-4 py-3",
						children: line
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/closer/$beingId",
						params: { beingId: being.id },
						className: "inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg",
						children: "Walk the close"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/math",
						className: "inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm",
						children: "Open the sources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/field",
						className: "inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm",
						children: "Open the field plan"
					})
				]
			})
		]
	});
}
function BeingRoute() {
	const { beingId } = Route$1.useParams();
	const being = beingById(beingId);
	const stamped = useStamps((s) => Boolean(s.stamps[beingId]));
	if (!being) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-6xl px-4 py-16 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "That being is not in this vault."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeingView, {
		being,
		stamped
	});
}
//#endregion
export { BeingRoute as component };
