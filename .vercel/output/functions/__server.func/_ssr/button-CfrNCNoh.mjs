import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn } from "./router-DCPU2VTN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CfrNCNoh.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-[box-shadow,background-color,color,opacity] duration-150 ease-out disabled:opacity-40", {
	variants: { tone: {
		wax: "bg-wax text-wax-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
		paper: "bg-fg text-bg hover:bg-fg/90",
		line: "border border-line bg-transparent text-fg hover:bg-raised",
		ghost: "text-muted hover:text-fg"
	} },
	defaultVariants: { tone: "line" }
});
function Button({ className, tone, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({ tone }), className),
		...props
	});
}
//#endregion
export { Button as t };
