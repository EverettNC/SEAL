import { i as __toESM } from "../_runtime.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { S as require_jsx_runtime, V as require_react, _ as createFileRoute, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, c as Copy, i as Square, l as Check, n as Volume2, o as Pause, r as TriangleAlert, s as Download, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/take-C4KPcguN.js
var SKIP = "[data-desk-skip], .no-print";
var LEAF = /* @__PURE__ */ new Set([
	"P",
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"LI",
	"DT",
	"DD",
	"TR",
	"BLOCKQUOTE",
	"FIGCAPTION"
]);
var STRUCTURAL = /* @__PURE__ */ new Set([
	"DIV",
	"SECTION",
	"ARTICLE",
	"UL",
	"OL",
	"DL",
	"TABLE",
	"THEAD",
	"TBODY",
	"HEADER",
	"FOOTER",
	"ASIDE",
	"FIGURE",
	"MAIN",
	"NAV",
	"A"
]);
function normalize(text) {
	return text.replace(/\u00a0/g, " ").replace(/[ \t]+\n/g, "\n").replace(/\s+/g, " ").trim();
}
function deskRoot() {
	return document.querySelector("[data-desk-page]");
}
function collectDeskBlocks(root) {
	const out = [];
	const walk = (el) => {
		if (el.matches(SKIP) || el.closest(SKIP)) return;
		if (el.getAttribute("aria-hidden") === "true") return;
		if (el.tagName === "BUTTON" || el.tagName === "SVG") return;
		const tag = el.tagName;
		if (LEAF.has(tag)) {
			const text = normalize(el.innerText);
			if (text) out.push({
				el,
				text
			});
			return;
		}
		const kids = [...el.children].filter((c) => c instanceof HTMLElement);
		if (kids.length === 0) {
			const text = normalize(el.innerText);
			if (text) out.push({
				el,
				text
			});
			return;
		}
		if (!kids.some((k) => LEAF.has(k.tagName) || STRUCTURAL.has(k.tagName))) {
			const text = normalize(el.innerText);
			if (text) out.push({
				el,
				text
			});
			return;
		}
		for (const kid of kids) walk(kid);
	};
	walk(root);
	return out;
}
function formatDeskCopy(url, blocks) {
	const title = document.querySelector("[data-desk-page] h1")?.textContent?.replace(/\s+/g, " ").trim() ?? "SEAL";
	const kicker = document.querySelector("[data-desk-page] p")?.textContent?.replace(/\s+/g, " ").trim() ?? "";
	const body = blocks.map(({ el, text }) => {
		const tag = el.tagName;
		if (tag === "H1") return `\n${text}\n`;
		if (tag === "H2" || tag === "H3") return `\n${text}`;
		if (tag === "LI") return `— ${text}`;
		return text;
	}).join("\n");
	return [
		"SEAL · The Christman AI Project LLC",
		kicker && kicker.length < 80 ? kicker : null,
		title,
		url,
		"",
		body.trim(),
		"",
		"Burden is not TAM. Provisional is pending. Inception is membership. No revenue is printed."
	].filter((line) => line !== null).join("\n");
}
async function writeClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const ta = document.createElement("textarea");
			ta.value = text;
			ta.setAttribute("readonly", "");
			ta.style.position = "fixed";
			ta.style.left = "-9999px";
			document.body.appendChild(ta);
			ta.select();
			const ok = document.execCommand("copy");
			ta.remove();
			return ok;
		} catch {
			return false;
		}
	}
}
function isFramed() {
	try {
		return window.self !== window.top;
	} catch {
		return true;
	}
}
function roomSlug() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";
	if (path === "/") return "command";
	return path.replace(/^\//, "").replace(/\//g, "-");
}
function roomTitle() {
	return document.querySelector("[data-desk-page] h1")?.textContent?.replace(/\s+/g, " ").trim() ?? "SEAL";
}
function collectRoomText() {
	const root = deskRoot();
	if (!root) return null;
	const blocks = collectDeskBlocks(root);
	if (!blocks.length) return null;
	return formatDeskCopy(window.location.href, blocks);
}
function escapeHtml(value) {
	const amp = String.fromCharCode(38);
	return value.replace(/&/g, `${amp}amp;`).replace(/</g, `${amp}lt;`).replace(/>/g, `${amp}gt;`).replace(/"/g, `${amp}quot;`);
}
function printableHtml(text, title) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(title)} · SEAL</title>
<style>
  @page { margin: 0.7in; }
  html, body { margin: 0; background: #f0e6d4; color: #1c1410; }
  body { font: 16px/1.55 Georgia, "Times New Roman", serif; }
  main { max-width: 40rem; margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
  .kicker { letter-spacing: 0.22em; text-transform: uppercase; font-size: 0.72rem; color: #5c4f3f; }
  h1 { font-size: 1.7rem; font-weight: 500; margin: 0.6rem 0 1.25rem; }
  pre { white-space: pre-wrap; font: inherit; margin: 0; }
</style>
</head>
<body>
<main>
<p class="kicker">SEAL · The Christman AI Project LLC</p>
<h1>${escapeHtml(title)}</h1>
<pre>${escapeHtml(text)}</pre>
</main>
</body>
</html>`;
}
function downloadTextFile(filename, content, mime) {
	try {
		const blob = new Blob([content], { type: `${mime};charset=utf-8` });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.rel = "noopener";
		a.style.display = "none";
		document.body.appendChild(a);
		a.click();
		a.remove();
		window.setTimeout(() => URL.revokeObjectURL(url), 1500);
		return true;
	} catch {
		return false;
	}
}
var useTake = create((set, get) => ({
	open: false,
	text: "",
	title: "SEAL",
	clipboard: "idle",
	downloaded: null,
	openTake: async (opts) => {
		const text = collectRoomText();
		if (!text) {
			set({
				open: true,
				text: "Nothing to take from this room.",
				title: "SEAL",
				clipboard: "blocked",
				downloaded: null
			});
			return;
		}
		const title = roomTitle();
		const copied = await writeClipboard(text);
		let downloaded = null;
		if (opts?.download === "txt") {
			downloadTextFile(`seal-${roomSlug()}.txt`, text, "text/plain");
			downloaded = "txt";
		}
		if (opts?.download === "html") {
			downloadTextFile(`seal-${roomSlug()}.html`, printableHtml(text, title), "text/html");
			downloaded = "html";
		}
		set({
			open: true,
			text,
			title,
			clipboard: copied ? "ok" : "blocked",
			downloaded
		});
	},
	close: () => set({
		open: false,
		downloaded: null
	}),
	retryCopy: async () => {
		set({ clipboard: await writeClipboard(get().text) ? "ok" : "blocked" });
	},
	download: (kind) => {
		const { text, title } = get();
		if (kind === "txt") downloadTextFile(`seal-${roomSlug()}.txt`, text, "text/plain");
		else downloadTextFile(`seal-${roomSlug()}.html`, printableHtml(text, title), "text/html");
		set({ downloaded: kind });
	}
}));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DCPU2VTN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var RATES = [
	.8,
	.92,
	1.08
];
var blocks = [];
var charStarts = [];
var fullText = "";
var wantPlay = false;
function clearHighlight() {
	document.querySelectorAll("[data-reading]").forEach((el) => el.removeAttribute("data-reading"));
}
function highlight(el) {
	clearHighlight();
	if (!el) return;
	el.setAttribute("data-reading", "1");
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	el.scrollIntoView({
		block: "center",
		behavior: reduce ? "auto" : "smooth"
	});
}
function pickVoice() {
	const voices = window.speechSynthesis.getVoices();
	const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
	const pool = en.length ? en : voices;
	return pool.find((v) => /premium|neural|natural|samantha|daniel|aria|jenny|ava/i.test(v.name)) ?? pool.find((v) => v.localService) ?? pool[0] ?? null;
}
function blockAtChar(index) {
	for (let i = charStarts.length - 1; i >= 0; i--) if (index >= charStarts[i]) return i;
	return 0;
}
function speak() {
	if (!wantPlay) return;
	const synth = window.speechSynthesis;
	if (!synth) {
		useDeskVoice.setState({
			status: "idle",
			error: "This browser has no voice reader. Copy the room instead."
		});
		return;
	}
	try {
		synth.cancel();
	} catch {}
	const u = new SpeechSynthesisUtterance(fullText);
	u.lang = "en-US";
	u.rate = useDeskVoice.getState().rate;
	u.pitch = 1;
	try {
		const voice = pickVoice();
		if (voice) u.voice = voice;
	} catch {}
	u.onboundary = (event) => {
		if (!wantPlay) return;
		const i = blockAtChar(event.charIndex);
		highlight(blocks[i]?.el);
		useDeskVoice.setState({ index: i });
	};
	u.onend = () => {
		if (!wantPlay) return;
		wantPlay = false;
		clearHighlight();
		useDeskVoice.setState({
			status: "idle",
			index: 0
		});
	};
	u.onerror = (event) => {
		if (event.error === "interrupted" || event.error === "canceled") return;
		wantPlay = false;
		clearHighlight();
		useDeskVoice.setState({
			status: "idle",
			error: "The voice reader stopped. Copy the room, or try Listen again."
		});
	};
	highlight(blocks[0]?.el);
	useDeskVoice.setState({
		status: "playing",
		error: null,
		index: 0,
		total: blocks.length
	});
	const start = () => {
		if (!wantPlay) return;
		try {
			synth.speak(u);
		} catch {
			wantPlay = false;
			clearHighlight();
			useDeskVoice.setState({
				status: "idle",
				error: "This browser blocked the voice reader. Copy the room instead."
			});
		}
	};
	window.setTimeout(start, 0);
}
function loadAndSpeak() {
	const root = deskRoot();
	if (!root) {
		useDeskVoice.setState({ error: "Nothing to read on this room." });
		return;
	}
	const collected = collectDeskBlocks(root);
	if (!collected.length) {
		useDeskVoice.setState({ error: "Nothing to read on this room." });
		return;
	}
	blocks = collected;
	charStarts = [];
	let cursor = 0;
	const pieces = [];
	for (let i = 0; i < blocks.length; i++) {
		charStarts.push(cursor);
		const text = blocks[i].text;
		pieces.push(text);
		cursor += text.length;
		if (i < blocks.length - 1) {
			const sep = /[.!?]$/.test(text) ? " " : ". ";
			pieces.push(sep);
			cursor += sep.length;
		}
	}
	fullText = pieces.join("");
	let voices = [];
	try {
		voices = window.speechSynthesis.getVoices();
	} catch {
		voices = [];
	}
	if (!voices.length && typeof window.speechSynthesis.addEventListener === "function") {
		window.speechSynthesis.addEventListener("voiceschanged", () => speak(), { once: true });
		window.setTimeout(() => {
			if (wantPlay && useDeskVoice.getState().status !== "playing") speak();
		}, 400);
		useDeskVoice.setState({
			total: blocks.length,
			error: null
		});
		return;
	}
	speak();
}
var useDeskVoice = create((set, get) => ({
	status: "idle",
	index: 0,
	total: 0,
	rate: .92,
	error: null,
	play: () => {
		if (!("speechSynthesis" in window)) {
			set({ error: "This browser has no voice reader. Copy the room instead." });
			return;
		}
		wantPlay = true;
		loadAndSpeak();
	},
	pause: () => {
		if (get().status !== "playing") return;
		try {
			window.speechSynthesis.pause();
		} catch {
			return;
		}
		set({ status: "paused" });
	},
	resume: () => {
		if (get().status !== "paused") return;
		wantPlay = true;
		try {
			window.speechSynthesis.resume();
		} catch {
			loadAndSpeak();
			return;
		}
		if (!window.speechSynthesis.speaking) {
			loadAndSpeak();
			return;
		}
		set({ status: "playing" });
	},
	stop: () => {
		wantPlay = false;
		try {
			if ("speechSynthesis" in window) window.speechSynthesis.cancel();
		} catch {}
		clearHighlight();
		set({
			status: "idle",
			index: 0,
			error: null
		});
	},
	setRate: (rate) => {
		set({ rate: RATES.reduce((best, n) => Math.abs(n - rate) < Math.abs(best - rate) ? n : best, RATES[1]) });
		if (get().status === "idle") return;
		wantPlay = true;
		loadAndSpeak();
	}
}));
var VOICE_RATES = [
	{
		value: .8,
		label: "Slow"
	},
	{
		value: .92,
		label: "Steady"
	},
	{
		value: 1.08,
		label: "Quick"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var tap$1 = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";
function DeskTools({ labeled = false }) {
	const status = useDeskVoice((s) => s.status);
	const play = useDeskVoice((s) => s.play);
	const pause = useDeskVoice((s) => s.pause);
	const resume = useDeskVoice((s) => s.resume);
	const openTake = useTake((s) => s.openTake);
	const takeOpen = useTake((s) => s.open);
	const clipboard = useTake((s) => s.clipboard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		"aria-label": "Take, print, and voice reader",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg", tap$1),
				"aria-label": "Take this room",
				onClick: () => void openTake(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative size-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: cn("absolute inset-0 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", takeOpen && clipboard === "ok" ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
						className: cn("size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", takeOpen && clipboard === "ok" ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
						"aria-hidden": "true"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labeled ? "" : "hidden lg:inline",
					children: "Take"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg", tap$1),
				"aria-label": "Download a printable file of this room",
				onClick: () => void openTake({ download: "html" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
					className: "size-4",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labeled ? "" : "hidden lg:inline",
					children: "Print"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-3 text-sm", status === "idle" ? "text-muted hover:text-fg" : "text-fg", tap$1),
				"aria-pressed": status !== "idle",
				"aria-label": status === "playing" ? "Pause voice reader" : status === "paused" ? "Resume voice reader" : "Read this room aloud",
				onClick: () => {
					if (status === "playing") pause();
					else if (status === "paused") resume();
					else play();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative size-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
						className: cn("absolute inset-0 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", status === "playing" ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						className: cn("size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", status === "playing" ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
						"aria-hidden": "true"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labeled ? "" : "hidden lg:inline",
					children: status === "playing" ? "Pause" : "Listen"
				})]
			})
		]
	});
}
function VoiceBar() {
	const status = useDeskVoice((s) => s.status);
	const index = useDeskVoice((s) => s.index);
	const total = useDeskVoice((s) => s.total);
	const rate = useDeskVoice((s) => s.rate);
	const error = useDeskVoice((s) => s.error);
	const pause = useDeskVoice((s) => s.pause);
	const resume = useDeskVoice((s) => s.resume);
	const stop = useDeskVoice((s) => s.stop);
	const setRate = useDeskVoice((s) => s.setRate);
	if (status === "idle") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-line bg-raised/90",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mr-auto text-xs text-muted",
					"aria-live": "polite",
					children: [status === "paused" ? "Paused" : "Reading this room", total ? ` · ${index + 1} of ${total}` : ""]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("inline-flex min-h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg", tap$1),
					onClick: () => status === "playing" ? pause() : resume(),
					children: status === "playing" ? "Pause" : "Resume"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg", tap$1),
					onClick: () => stop(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
						className: "size-3.5",
						"aria-hidden": "true"
					}), "Stop"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1",
					role: "group",
					"aria-label": "Reading speed",
					children: VOICE_RATES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("inline-flex min-h-11 items-center rounded-md px-3 text-xs uppercase tracking-widest", tap$1, item.value === rate ? "text-fg" : "text-faint hover:text-muted"),
						"aria-pressed": item.value === rate,
						onClick: () => setRate(item.value),
						children: item.label
					}, item.value))
				})
			]
		})
	});
}
function CopyListenRow({ className }) {
	const status = useDeskVoice((s) => s.status);
	const play = useDeskVoice((s) => s.play);
	const pause = useDeskVoice((s) => s.pause);
	const resume = useDeskVoice((s) => s.resume);
	const openTake = useTake((s) => s.openTake);
	const clipboard = useTake((s) => s.clipboard);
	const takeOpen = useTake((s) => s.open);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (takeOpen && clipboard === "ok") setCopied(true);
	}, [takeOpen, clipboard]);
	(0, import_react.useEffect)(() => {
		if (!copied) return;
		const id = window.setTimeout(() => setCopied(false), 1600);
		return () => window.clearTimeout(id);
	}, [copied]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap gap-3", className),
		"data-desk-skip": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 items-center gap-2 rounded-md bg-wax px-4 text-sm font-medium text-wax-fg", tap$1),
				onClick: () => void openTake(),
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Take this room"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm", tap$1),
				onClick: () => void openTake({ download: "html" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Print"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm", tap$1),
				onClick: () => {
					if (status === "playing") pause();
					else if (status === "paused") resume();
					else play();
				},
				children: [status === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
					className: "size-4",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
					className: "size-4",
					"aria-hidden": "true"
				}), status === "playing" ? "Pause" : "Listen"]
			})
		]
	});
}
var tap = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";
function TakePanel() {
	const open = useTake((s) => s.open);
	const text = useTake((s) => s.text);
	const clipboard = useTake((s) => s.clipboard);
	const downloaded = useTake((s) => s.downloaded);
	const close = useTake((s) => s.close);
	const retryCopy = useTake((s) => s.retryCopy);
	const download = useTake((s) => s.download);
	const box = (0, import_react.useRef)(null);
	const framed = typeof window !== "undefined" ? isFramed() : true;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const node = box.current;
		if (node) {
			node.focus();
			node.select();
		}
		const onKey = (event) => {
			if (event.key === "Escape") close();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [
		open,
		text,
		close
	]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print fixed inset-0 z-50 flex items-start justify-center p-3 pt-6 md:pt-12",
		role: "presentation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-bg/80",
			"aria-label": "Close take panel",
			onClick: () => close()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "take-title",
			className: "relative z-10 flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 border-b border-line px-4 py-3 md:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "take-title",
							className: "font-serif text-2xl",
							children: "Take this room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: clipboard === "ok" ? "On your clipboard. Also in the box if you want a file." : framed ? "This preview cannot write your clipboard or open a printer. That is the frame, not the desk. The words are selected. Copy them, or download a file you can print from your machine." : "The words are selected. Copy them, or download a file."
						}),
						downloaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink",
							children: downloaded === "html" ? "Printable file sent to your downloads. Open it, then print." : "Text file sent to your downloads."
						}) : null
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted hover:text-fg", tap),
						"aria-label": "Close",
						onClick: () => close(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 border-b border-line px-4 py-3 md:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("inline-flex min-h-11 items-center gap-2 rounded-md bg-wax px-4 text-sm font-medium text-wax-fg", tap),
							onClick: () => {
								box.current?.focus();
								box.current?.select();
								retryCopy();
							},
							children: [clipboard === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-4",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								className: "size-4",
								"aria-hidden": "true"
							}), clipboard === "ok" ? "Copied" : "Copy"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm", tap),
							onClick: () => download("txt"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Download text"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-4 text-sm", tap),
							onClick: () => download("html"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Download printable"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "take-text",
					children: "Room text"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "take-text",
					ref: box,
					readOnly: true,
					value: text,
					className: "min-h-64 flex-1 resize-none bg-paper p-4 font-serif text-sm leading-relaxed text-paper-ink outline-none"
				})
			]
		})]
	});
}
var NAV = [
	{
		to: "/",
		label: "Command",
		match: (p) => p === "/"
	},
	{
		to: "/health",
		label: "Health",
		match: (p) => p.startsWith("/health")
	},
	{
		to: "/ledger",
		label: "Ledger",
		match: (p) => p.startsWith("/ledger")
	},
	{
		to: "/math",
		label: "Math",
		match: (p) => p.startsWith("/math")
	},
	{
		to: "/house",
		label: "House",
		match: (p) => p.startsWith("/house")
	},
	{
		to: "/field",
		label: "Field",
		match: (p) => p.startsWith("/field")
	},
	{
		to: "/terms",
		label: "Terms",
		match: (p) => p.startsWith("/terms")
	},
	{
		to: "/room",
		label: "Room",
		match: (p) => p.startsWith("/room")
	},
	{
		to: "/vault",
		label: "Vault",
		match: (p) => p.startsWith("/vault")
	},
	{
		to: "/closer",
		label: "Closer",
		match: (p) => p.startsWith("/closer")
	}
];
var PARTNER_PATH = [
	{
		to: "/math",
		n: "01",
		label: "Math",
		line: "The law. Sources. What we refuse."
	},
	{
		to: "/field",
		n: "02",
		label: "Field",
		line: "Eighteen months. Who else is in the room."
	},
	{
		to: "/terms",
		n: "03",
		label: "Terms",
		line: "The paper, including the blanks."
	},
	{
		to: "/room",
		n: "04",
		label: "Room",
		line: "The questions we ask ourselves first."
	},
	{
		to: "/vault",
		n: "05",
		label: "Vault",
		line: "What exists. What does not."
	},
	{
		to: "/closer",
		n: "06",
		label: "Closer",
		line: "Stamp only what you will say out loud."
	}
];
var HEALTH_PATH = [
	{
		n: "01",
		label: "Health",
		line: "For Megan. Not a term sheet.",
		to: "/health"
	},
	{
		n: "02",
		label: "AlphaWolf",
		line: "The 2:32am house. Supermajority lock.",
		beingId: "alphawolf"
	},
	{
		n: "03",
		label: "AlphaVox",
		line: "A board that still speaks when the tower dies.",
		beingId: "alphavox"
	},
	{
		n: "04",
		label: "Inferno",
		line: "Safety before processing. Clinician in the loop.",
		beingId: "inferno"
	},
	{
		n: "05",
		label: "Vault",
		line: "Empty folders named. Including silicon we have not seated.",
		to: "/vault"
	},
	{
		n: "06",
		label: "House",
		line: "Who we are. Inception as membership.",
		to: "/house"
	}
];
var KEY = "seal-stamps-v1";
function memory() {
	const map = /* @__PURE__ */ new Map();
	return {
		get length() {
			return map.size;
		},
		clear: () => map.clear(),
		getItem: (name) => map.get(name) ?? null,
		key: (i) => [...map.keys()][i] ?? null,
		removeItem: (name) => {
			map.delete(name);
		},
		setItem: (name, value) => {
			map.set(name, value);
		}
	};
}
var store = typeof localStorage === "undefined" ? memory() : localStorage;
var useStamps = create()(persist((set, get) => ({
	stamps: {},
	stamp: (id) => set({ stamps: {
		...get().stamps,
		[id]: (/* @__PURE__ */ new Date()).toISOString()
	} })
}), {
	name: KEY,
	skipHydration: true,
	storage: {
		getItem: (name) => {
			const raw = store.getItem(name);
			if (!raw) return null;
			try {
				const parsed = JSON.parse(raw);
				if (parsed && typeof parsed === "object" && "state" in parsed) return parsed;
				if (parsed && typeof parsed === "object") return {
					state: { stamps: parsed },
					version: 0
				};
			} catch {
				return null;
			}
			return null;
		},
		setItem: (name, value) => store.setItem(name, JSON.stringify(value)),
		removeItem: (name) => store.removeItem(name)
	}
}));
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const beingId = pathname.match(/^\/beings\/([^/]+)/)?.[1];
	(0, import_react.useEffect)(() => {
		useStamps.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		useDeskVoice.getState().stop();
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-30 border-b border-line bg-bg/92 backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-4 py-3 md:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg tracking-widest text-fg",
									children: "SEAL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-widest text-muted",
									children: "The closing agent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-start-2 flex items-center justify-end gap-1 pr-28 lg:col-start-3 lg:pr-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden lg:flex lg:items-center lg:gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTools, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/packet",
										className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm text-muted hover:text-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Packet"]
									})]
								}), pathname.startsWith("/health") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/beings/$beingId",
									params: { beingId: "alphawolf" },
									className: "inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg",
									children: "Open AlphaWolf"
								}) : beingId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/closer/$beingId",
									params: { beingId },
									className: "inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg",
									children: "Walk the close"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/closer",
									className: "inline-flex min-h-11 items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg",
									children: "Walk the close"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "col-span-2 min-w-0 overflow-x-auto text-sm [-ms-overflow-style:none] [scrollbar-width:none] lg:col-span-1 lg:col-start-2 lg:row-start-1 [&::-webkit-scrollbar]:hidden",
								"aria-label": "Desk",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-0.5",
									children: NAV.map((item) => {
										const active = item.match(pathname);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											className: cn("inline-flex min-h-11 shrink-0 items-center rounded-md px-3", active ? "text-fg" : "text-muted hover:text-fg"),
											children: item.label
										}, item.to);
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "no-print flex flex-wrap items-center gap-1 border-t border-line px-4 py-1 pr-28 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTools, { labeled: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/packet",
							className: "inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Packet"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceBar, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-desk-page": true,
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-faint md:flex-row md:items-center md:justify-between md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Christman AI Project LLC · Wyoming · operating as Luma Cognify AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Burden is not TAM. Provisional is pending. Inception is membership. No revenue is printed." })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TakePanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				offset: 72,
				toastOptions: { classNames: {
					toast: "border border-line bg-surface text-fg shadow-[var(--shadow-border)] font-sans",
					title: "text-fg",
					description: "text-muted"
				} }
			})
		]
	});
}
var styles_default = "/assets/styles-BhxZXEcQ.css";
var APP_NAME = "SEAL";
var APP_DESCRIPTION = "The closing agent for The Christman AI Project LLC. Five beings. Sourced math. One close at a time.";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: APP_DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#0c0a08"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$12 = () => import("./routes-BooVU3XC.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./closer-BntalQ5T.mjs");
var Route$11 = createFileRoute("/closer")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./field-DsUsbEnc.mjs");
var Route$10 = createFileRoute("/field")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./health-CNL9PffC.mjs");
var Route$9 = createFileRoute("/health")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./house-CPvyAWDW.mjs");
var Route$8 = createFileRoute("/house")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./ledger-KMGaGFeZ.mjs");
var Route$7 = createFileRoute("/ledger")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./math-B-6eNCtX.mjs");
var Route$6 = createFileRoute("/math")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./packet-CxFxyytI.mjs");
var Route$5 = createFileRoute("/packet")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./room-CuSpWwGf.mjs");
var Route$4 = createFileRoute("/room")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./terms-It8uIeZl.mjs");
var Route$3 = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./vault-BVlRi1Zd.mjs");
var Route$2 = createFileRoute("/vault")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./beings._beingId-74thkryZ.mjs");
var Route$1 = createFileRoute("/beings/$beingId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./closer._beingId-DPbVds4T.mjs");
var Route = createFileRoute("/closer/$beingId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var CloserRoute = Route$11.update({
	id: "/closer",
	path: "/closer",
	getParentRoute: () => Route$13
});
var FieldRoute = Route$10.update({
	id: "/field",
	path: "/field",
	getParentRoute: () => Route$13
});
var HealthRoute = Route$9.update({
	id: "/health",
	path: "/health",
	getParentRoute: () => Route$13
});
var HouseRoute = Route$8.update({
	id: "/house",
	path: "/house",
	getParentRoute: () => Route$13
});
var LedgerRoute = Route$7.update({
	id: "/ledger",
	path: "/ledger",
	getParentRoute: () => Route$13
});
var MathRoute = Route$6.update({
	id: "/math",
	path: "/math",
	getParentRoute: () => Route$13
});
var PacketRoute = Route$5.update({
	id: "/packet",
	path: "/packet",
	getParentRoute: () => Route$13
});
var RoomRoute = Route$4.update({
	id: "/room",
	path: "/room",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var VaultRoute = Route$2.update({
	id: "/vault",
	path: "/vault",
	getParentRoute: () => Route$13
});
var BeingsBeingIdRoute = Route$1.update({
	id: "/beings/$beingId",
	path: "/beings/$beingId",
	getParentRoute: () => Route$13
});
var CloserRouteChildren = { CloserBeingIdRoute: Route.update({
	id: "/$beingId",
	path: "/$beingId",
	getParentRoute: () => CloserRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	CloserRoute: CloserRoute._addFileChildren(CloserRouteChildren),
	FieldRoute,
	HealthRoute,
	HouseRoute,
	LedgerRoute,
	MathRoute,
	PacketRoute,
	RoomRoute,
	TermsRoute,
	VaultRoute,
	BeingsBeingIdRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { HEALTH_PATH as a, cn as c, useStamps as i, useTake as l, Route as n, PARTNER_PATH as o, Route$1 as r, CopyListenRow as s, router_exports as t };
