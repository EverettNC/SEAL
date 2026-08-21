import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Page } from "./ui-bTpup7lW.mjs";
import { t as OBJECTIONS } from "./objections-NuzZQNRJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/room-CuSpWwGf.js
var import_jsx_runtime = require_jsx_runtime();
var DESK = {
	"/": "/",
	"/health": "/health",
	"/ledger": "/ledger",
	"/math": "/math",
	"/house": "/house",
	"/field": "/field",
	"/terms": "/terms",
	"/room": "/room",
	"/vault": "/vault",
	"/closer": "/closer",
	"/packet": "/packet"
};
function DeskLink({ go }) {
	const className = "mt-4 inline-flex min-h-11 items-center text-sm text-ink underline";
	const being = go.match(/^\/beings\/([^/]+)$/);
	if (being?.[1]) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/beings/$beingId",
		params: { beingId: being[1] },
		className,
		children: "Open the desk that holds this"
	});
	if (go in DESK) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: DESK[go],
		className,
		children: "Open the desk that holds this"
	});
	return null;
}
function RoomPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		kicker: "Room",
		title: "The questions we ask ourselves first.",
		lead: "A closer that cannot survive its own objections is a brochure. These are the ones a partner will ask. The answers do not get prettier because the meeting is tomorrow.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-4",
			children: OBJECTIONS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-surface p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: item.ask
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-muted",
						children: item.answer
					}),
					item.go ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskLink, { go: item.go }) : null
				]
			}, item.id))
		})
	});
}
//#endregion
export { RoomPage as component };
