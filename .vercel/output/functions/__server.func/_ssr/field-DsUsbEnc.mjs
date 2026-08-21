import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usd } from "./format-YndtVFFj.mjs";
import { r as beingById } from "./catalog-D4xH3faF.mjs";
import { i as SEQUENCE, n as COMPETITORS, r as QUARTERS, t as CHANNELS } from "./field-mMg3WJxL.mjs";
import { t as SealMark } from "./mark-B5rOGHML.mjs";
import { i as Page, r as Note } from "./ui-bTpup7lW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-DsUsbEnc.js
var import_jsx_runtime = require_jsx_runtime();
function FieldPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: "Field",
		title: "Eighteen months. Who else is in the room.",
		lead: "Sequence is a choice. AlphaVox first because the founder lived it and the comparable is a board. Brockston last because it is LAB, and the others ride it. Units that have not sat are not spoken as shipped.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Order we will defend"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 space-y-3",
					children: SEQUENCE.map((item) => {
						const being = beingById(item.id);
						if (!being) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/beings/$beingId",
							params: { beingId: being.id },
							className: "flex items-start gap-4 rounded-xl border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-faint",
									children: String(item.order).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
									mark: being.mark,
									color: being.color,
									size: "sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex flex-wrap items-baseline gap-x-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-xl",
											children: being.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs uppercase tracking-widest text-muted",
											children: [
												being.stage,
												" · ",
												being.fieldUnits.toLocaleString(),
												" ",
												being.fieldLabel,
												" ·",
												" ",
												usd(being.ask)
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: item.why
									})]
								})
							]
						}) }, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "The eighteen months"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "April 27, 2027 is the provisional clock. This is not a hockey stick. It is whether the architecture survives a real room before the priority date has to be converted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: QUARTERS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-faint",
									children: q.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-2xl",
									children: q.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: q.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 text-sm",
									children: q.sits.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "text-muted",
										children: ["— ", line]
									}, line))
								})
							]
						}, q.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Who buys. Who sells. What we will not say."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3",
					children: CHANNELS.map((ch) => {
						const being = beingById(ch.beingId);
						if (!being) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl",
								children: being.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid gap-3 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-faint",
										children: "Who buys"
									}), ch.whoBuys] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-faint",
										children: "Who sells this round"
									}), ch.whoSells] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-faint",
										children: "Not yet"
									}), ch.notYet] })
								]
							})]
						}, ch.beingId);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Named competitors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "We win on dignity, offline, and the safety law. We lose if the buyer wants a facility, a bed, a Copilot clone, or engagement metrics on lonely people."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-3 md:grid-cols-2",
						children: COMPETITORS.map((c) => {
							const being = beingById(c.beingId);
							if (!being) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-line bg-surface p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-xl",
										children: being.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: c.names
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-sm text-muted",
										children: ["We win: ", c.weWin]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: ["We lose if: ", c.weLoseIf]
									})
								]
							}, c.beingId);
						})
					})
				]
			})
		]
	});
}
//#endregion
export { FieldPage as component };
