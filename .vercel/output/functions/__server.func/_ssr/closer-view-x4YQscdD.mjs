import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, V as require_react, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn, i as useStamps } from "./router-DCPU2VTN.mjs";
import { t as HOUSE } from "./house-B3rM_BI0.mjs";
import { n as people, r as usd } from "./format-YndtVFFj.mjs";
import { r as beingById, t as BEINGS } from "./catalog-D4xH3faF.mjs";
import { n as value } from "./valuation-Bvq1t34I.mjs";
import { t as SealMark } from "./mark-B5rOGHML.mjs";
import { a as Stat, n as Kicker, r as Note, t as Funds } from "./ui-bTpup7lW.mjs";
import { t as Button } from "./button-CfrNCNoh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/closer-view-x4YQscdD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: "intake",
		label: "Intake"
	},
	{
		id: "dossier",
		label: "Dossier"
	},
	{
		id: "thesis",
		label: "Thesis"
	},
	{
		id: "math",
		label: "Math"
	},
	{
		id: "ask",
		label: "Ask"
	},
	{
		id: "close",
		label: "Close"
	}
];
function CloserView({ beingId }) {
	const navigate = useNavigate();
	const stamps = useStamps((s) => s.stamps);
	const stamp = useStamps((s) => s.stamp);
	const [picked, setPicked] = (0, import_react.useState)(beingId ?? BEINGS[0]?.id ?? "alphawolf");
	const current = beingById(beingId ?? picked) ?? BEINGS[0];
	const v = (0, import_react.useMemo)(() => current ? value(current) : null, [current]);
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (beingId) {
			setPicked(beingId);
			setStep(0);
		}
	}, [beingId]);
	if (!current || !v) return null;
	const currentStep = STEPS[step] ?? STEPS[0];
	const stamped = Boolean(stamps[current.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Closer" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl tracking-tight",
				children: "Walk the close."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Six steps. The math does not move because someone wants a bigger slide. Stamp only what you will say out loud."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: BEINGS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setPicked(b.id);
						setStep(0);
						navigate({
							to: "/closer/$beingId",
							params: { beingId: b.id }
						});
					},
					className: cn("min-h-11 rounded-full border px-4 text-sm", current.id === b.id ? "border-wax bg-wax text-wax-fg" : "border-line bg-surface"),
					children: b.name
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-[220px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex gap-2 overflow-x-auto md:flex-col md:overflow-visible",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setStep(i),
						className: cn("flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm", i === step ? "bg-raised text-fg" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: String(i + 1).padStart(2, "0")
						}), s.label]
					}) }, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-surface p-5 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
								mark: current.mark,
								color: current.color,
								size: "sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-faint",
								children: currentStep.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-serif text-3xl",
								children: current.name
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-prose text-lg",
							children: current.pipeline[currentStep.id]
						}),
						currentStep.id === "math" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "TAM",
									v: usd(v.tam),
									hint: current.tamHow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "SAM",
									v: usd(v.sam),
									hint: current.samHow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "SOM",
									v: usd(v.som),
									hint: `${people(current.som.units)} × ${usd(current.som.arpu)}`
								})
							]
						}), current.comparable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-faint",
									children: "Comparable — not our price"
								}),
								"$",
								current.comparable.low.toLocaleString(),
								"–$",
								current.comparable.high.toLocaleString(),
								" / ",
								current.comparable.unit,
								".",
								" ",
								current.comparable.note
							] })
						}) : null] }) : null,
						currentStep.id === "ask" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-3xl",
									children: [
										usd(current.ask),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg text-muted",
											children: current.round
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										"Buys ",
										current.fieldUnits.toLocaleString(),
										" ",
										current.fieldLabel,
										". Modeled",
										" ",
										usd(v.fieldDollars),
										" at list. Not booked."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funds, {
										ask: current.ask,
										lines: current.useOfFunds
									})
								})
							]
						}) : null,
						currentStep.id === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm text-muted",
								children: [
									current.stage,
									" · ",
									HOUSE.patent.docket,
									" · ",
									HOUSE.patent.status
								]
							}), stamped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm",
								children: "This close is already stamped on the ledger."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "wax",
								className: "mt-6",
								onClick: () => stamp(current.id),
								children: "Stamp the close"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: step === 0,
								onClick: () => setStep((n) => Math.max(0, n - 1)),
								children: "Back"
							}), step < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "paper",
								onClick: () => setStep((n) => Math.min(STEPS.length - 1, n + 1)),
								children: "Next"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/beings/$beingId",
								params: { beingId: current.id },
								className: "inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm",
								children: "Open the dossier"
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { CloserView as t };
