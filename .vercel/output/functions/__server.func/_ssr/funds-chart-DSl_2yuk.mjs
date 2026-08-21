import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usd } from "./format-YndtVFFj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/funds-chart-DSl_2yuk.js
var import_jsx_runtime = require_jsx_runtime();
function MoneyBars({ rows }) {
	const max = Math.max(...rows.map((row) => row.value), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular-nums text-ink",
				children: usd(row.value)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 h-2 overflow-hidden rounded-full bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full",
				style: {
					width: `${Math.max(4, row.value / max * 100)}%`,
					background: row.fill ?? "#8b3a32"
				}
			})
		})] }, row.name))
	});
}
//#endregion
export { MoneyBars as t };
