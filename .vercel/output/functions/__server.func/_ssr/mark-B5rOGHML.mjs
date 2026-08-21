import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn } from "./router-DCPU2VTN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mark-B5rOGHML.js
var import_jsx_runtime = require_jsx_runtime();
var SIZE = {
	sm: "h-10 w-10 text-xs",
	md: "h-16 w-16 text-sm",
	lg: "h-28 w-28 text-2xl md:h-32 md:w-32 md:text-3xl"
};
function SealMark({ mark, color, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative inline-grid shrink-0 place-items-center rounded-full font-display tracking-[0.18em] text-fg", SIZE[size]),
		style: {
			background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${color} 35%, #5a221c), #3a1410 62%, #1a0c0a)`,
			boxShadow: `inset 0 0 0 2px color-mix(in oklab, ${color} 45%, #8b3a32), inset 0 -8px 16px rgb(0 0 0 / 0.45)`
		},
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-[3px] rounded-full border border-fg/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative font-medium",
			children: mark
		})]
	});
}
//#endregion
export { SealMark as t };
