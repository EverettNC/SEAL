import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn } from "./router-DCPU2VTN.mjs";
import { r as usd } from "./format-YndtVFFj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-bTpup7lW.js
var import_jsx_runtime = require_jsx_runtime();
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium uppercase tracking-widest text-muted",
		children
	});
}
function Stat({ k, v, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs uppercase tracking-widest text-faint",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-mono text-2xl tabular-nums",
				children: v
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-faint",
				children: hint
			}) : null
		]
	});
}
function Note({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: cn("rounded-lg border border-line bg-raised px-4 py-3 text-sm text-muted", className),
		children
	});
}
function Funds({ ask, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-left text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "text-xs uppercase tracking-widest text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 font-medium",
					children: "Use"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 font-medium",
					children: "Share"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 font-medium",
					children: "Dollars"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-t border-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: line.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-faint",
						children: line.note
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "py-3 font-mono tabular-nums",
					children: [Math.round(line.pct * 100), "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-3 font-mono tabular-nums",
					children: usd(ask * line.pct)
				})
			]
		}, line.label)) })]
	});
}
function Page({ kicker, title, lead, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl tracking-tight md:text-5xl",
				children: title
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 max-w-2xl text-muted",
				children: lead
			}) : null,
			children
		]
	});
}
//#endregion
export { Stat as a, Page as i, Kicker as n, Note as r, Funds as t };
