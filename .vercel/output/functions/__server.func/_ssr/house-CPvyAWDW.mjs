import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as HOUSE } from "./house-B3rM_BI0.mjs";
import { i as Page, r as Note } from "./ui-bTpup7lW.mjs";
import { n as TEAM_GAPS } from "./objections-NuzZQNRJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-CPvyAWDW.js
var import_jsx_runtime = require_jsx_runtime();
function HousePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: "House",
		title: HOUSE.name,
		lead: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			HOUSE.formed,
			". Operating as ",
			HOUSE.trade,
			". ",
			HOUSE.operates,
			". ",
			HOUSE.ipOwner
		] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Patent"
					}),
					HOUSE.patent.docket,
					". Filed ",
					HOUSE.patent.filed,
					". ",
					HOUSE.patent.status,
					".",
					" ",
					HOUSE.patent.covers
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs uppercase tracking-widest text-faint",
						children: "Contact"
					}),
					HOUSE.contact,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					HOUSE.web
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Law of the family"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted",
						children: HOUSE.framework.carbonSilicon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted",
						children: HOUSE.framework.sovereignty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted",
						children: HOUSE.framework.dignity
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "What is already true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: HOUSE.traction.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-surface px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-faint",
								children: t.when
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: t.what
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: t.note
							})
						]
					}, t.what))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "People"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: HOUSE.team.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl",
								children: person.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-widest text-muted",
								children: person.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: person.bio
							})
						]
					}, person.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Seats that do not sit yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Three people. The round hires the rest. We do not seat ghosts to look staffed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: TEAM_GAPS.map((gap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-line bg-surface px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: gap.seat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: gap.why
							})]
						}, gap.seat))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Open work, named as such"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 md:grid-cols-2",
					children: HOUSE.opensource.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-surface px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.line
						})]
					}, item.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Later. Not valued."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "These rooms exist in the house. They do not sit on the ledger. A partner who wants them in the TAM is asking us to lie."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: HOUSE.later.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-line px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: item.line
							})]
						}, item.name))
					})
				]
			})
		]
	});
}
//#endregion
export { HousePage as component };
