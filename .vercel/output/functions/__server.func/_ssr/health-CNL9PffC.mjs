import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as HEALTH_PATH, c as cn, s as CopyListenRow } from "./router-DCPU2VTN.mjs";
import { r as beingById } from "./catalog-D4xH3faF.mjs";
import { t as SealMark } from "./mark-B5rOGHML.mjs";
import { a as Stat, i as Page, n as Kicker, r as Note } from "./ui-bTpup7lW.mjs";
import { a as HEALTH_LENS, c as REPLY, i as HEALTH_LAW, l as SHE_WILL_ASK, n as HEALTH_BEING_IDS, o as HER_LANGUAGE, r as HEALTH_FOR, s as NVIDIA_DOORS, t as ASK_OF_MEGAN } from "./health-DXZ-vRHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-CNL9PffC.js
var import_jsx_runtime = require_jsx_runtime();
function PathLink({ room, className, children }) {
	if (room.beingId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/beings/$beingId",
		params: { beingId: room.beingId },
		className,
		children
	});
	if (room.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: room.to,
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
}
function HealthPage() {
	const wolf = beingById("alphawolf");
	const vox = beingById("alphavox");
	const inferno = beingById("inferno");
	const brockston = beingById("brockston");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: `Health · For ${HEALTH_FOR.name} · ${HEALTH_FOR.house} ${HEALTH_FOR.role}`,
		title: "Not a term sheet. The health beings, and the door we need named.",
		lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "The 2:32am house is the clinical environment we will speak — not the OR, not the scanner. Inception is membership, seated August 15, 2026. We do not run on a named NVIDIA SKU in the field today. That is the conversation. This room does not ask for a check." }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				"data-desk-skip": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyListenRow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vault",
					className: "no-print inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm",
					children: "Open the empty folders"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "AlphaVox this round",
						v: "200",
						hint: vox?.fieldLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "AlphaWolf this round",
						v: "50",
						hint: wolf?.fieldLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Inferno this round",
						v: "40",
						hint: inferno?.fieldLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Inception",
						v: "Aug 15",
						hint: "Membership. Not capital."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "What we are asking you for" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "Three things. None of them is a check."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 grid gap-3 md:grid-cols-3",
						children: ASK_OF_MEGAN.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-faint",
									children: item.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: item.body
								})
							]
						}, item.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Your language. Our room." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "AI-native patient care, mapped onto a house that has to work when the tower dies."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: "You wrote the GTC line: digital health agents, software-defined devices, physical AI, edge-to-cloud. We will not pretend we already occupy that stack. We will say where the house actually sits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-line rounded-xl border border-line",
						children: HER_LANGUAGE.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-2 px-4 py-4 md:grid-cols-2 md:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-faint",
									children: "You"
								}), row.her]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-faint",
									children: "Us"
								}), row.us]
							})]
						}, row.her))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The three health beings" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "Field units. Device class we will speak. What we will not claim."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4",
						children: HEALTH_BEING_IDS.map((id) => {
							const being = beingById(id);
							const lens = HEALTH_LENS[id];
							if (!being || !lens) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/beings/$beingId",
								params: { beingId: being.id },
								className: "block rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
										mark: being.mark,
										color: being.color,
										size: "sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex flex-wrap items-baseline gap-x-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif text-2xl",
													children: being.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs uppercase tracking-widest text-muted",
													children: [
														being.stage,
														" · ",
														being.fieldUnits.toLocaleString(),
														" ",
														being.fieldLabel
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm text-muted",
												children: being.line
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-4 grid gap-3 md:grid-cols-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs uppercase tracking-widest text-faint",
															children: "Sits"
														}), lens.sits]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs uppercase tracking-widest text-faint",
															children: "Device class we will speak"
														}), lens.deviceClass]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs uppercase tracking-widest text-faint",
															children: "NVIDIA door"
														}), lens.nvidiaDoor]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-sm text-muted",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs uppercase tracking-widest text-faint",
															children: "Not claimed"
														}), lens.notClaim]
													})
												]
											})
										]
									})]
								})
							}) }, id);
						})
					})
				]
			}),
			brockston ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The silicon" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "Brockston is LAB. It is also the GPU conversation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-xl border border-line bg-surface p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SealMark, {
								mark: brockston.mark,
								color: brockston.color,
								size: "sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-2xl",
										children: brockston.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: HEALTH_LENS.brockston.deviceClass
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 grid gap-3 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-widest text-faint",
											children: "NVIDIA door"
										}), HEALTH_LENS.brockston.nvidiaDoor] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-widest text-faint",
											children: "Not claimed"
										}), HEALTH_LENS.brockston.notClaim] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/beings/$beingId",
										params: { beingId: "brockston" },
										className: "mt-4 inline-flex min-h-11 items-center text-sm text-ink underline",
										children: "Open Brockston"
									})
								]
							})]
						})
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "NVIDIA doors" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "Open. Conversation. Wrong."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: "We will not name Holoscan, MONAI, or a Jetson SKU as if they are already in the house. A door that is wrong should be marked wrong."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-xl border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[720px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface text-xs uppercase tracking-widest text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Door"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Now"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Next"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: NVIDIA_DOORS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: row.door
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("inline-flex rounded-full px-2 py-1 font-mono text-xs uppercase tracking-wider", row.status === "open" && "bg-wax/20 text-ink", row.status === "conversation" && "bg-raised text-fg", row.status === "wrong" && "text-faint"),
											children: row.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted",
										children: row.now
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted",
										children: row.next
									})
								]
							}, row.door)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Questions we ask ourselves first" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "So you do not have to hunt for the hard ones."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-3",
						children: SHE_WILL_ASK.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl",
								children: q.ask
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: q.answer
							})]
						}, q.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Law of this room" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: HEALTH_LAW.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-sm text-muted",
						children: ["— ", line]
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Walk" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: "If this is the meeting, this is the order."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3",
						children: HEALTH_PATH.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PathLink, {
							room,
							className: "flex min-h-28 flex-col rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-faint",
									children: room.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 font-serif text-2xl",
									children: room.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-sm text-muted",
									children: room.line
								})
							]
						}) }, room.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-14 rounded-xl border border-line bg-raised p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The reply" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl font-serif text-xl leading-snug",
						children: REPLY.line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-faint",
						children: REPLY.sign
					})
				]
			})
		]
	});
}
//#endregion
export { HealthPage as component };
