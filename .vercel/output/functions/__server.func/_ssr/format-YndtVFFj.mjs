//#region node_modules/.nitro/vite/services/ssr/assets/format-YndtVFFj.js
function usd(n) {
	const abs = Math.abs(n);
	const sign = n < 0 ? "-" : "";
	if (abs >= 1e9) {
		const b = abs / 1e9;
		return `${sign}$${b.toFixed(b >= 10 ? 1 : 2)}B`;
	}
	if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}M`;
	if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(1)}K`;
	return `${sign}$${abs.toFixed(0)}`;
}
function pct(n) {
	return `${Math.round(n * 100)}%`;
}
function people(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 2)}M`;
	if (n >= 1e3) return `${Math.round(n / 1e3).toLocaleString()}K`;
	return n.toLocaleString();
}
//#endregion
export { people as n, usd as r, pct as t };
