import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronRight, c as ArrowDown, i as Phone, o as ChevronLeft, r as Play, s as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal$1, c as Slot, i as DialogOverlay$1, n as DialogClose, o as DialogTitle$1, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B84Y8FCK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function scrollToId(id, offset = -12) {
	const el = document.getElementById(id);
	if (!el) return;
	const lenis = window.__lenis;
	if (lenis) {
		lenis.scrollTo(el, {
			offset,
			duration: 1.15
		});
		return;
	}
	const top = el.getBoundingClientRect().top + window.scrollY + offset;
	window.scrollTo({
		top,
		behavior: "smooth"
	});
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("reveal-in");
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			window.setTimeout(() => el.classList.add("reveal-in"), delay);
			io.disconnect();
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal-wait", className),
		children
	});
}
var PHONE_DISPLAY = "+91 88700 44870";
var PHONE_TEL = "+918870044870";
var WHATSAPP_URL = "https://wa.me/918870044870?text=" + encodeURIComponent("Hello, I would like to book a site visit for one of the final 5 plots at Albatross, Pattanam / Peedampalli.");
var EMAIL = "info@sribabyproperties.com";
var OFFICE = "1st Floor, Mayflower Signature, Near PSG Tech, Avinashi Road, Peelamedu, Coimbatore — 641004";
var SITE_OFFICE = "2/149B, Kanakkan Thottam, Peedampalli, Nadupalayam, Coimbatore — 641016";
var IMAGES = {
	hero: "/images/albatross/hero.jpg",
	aerial01: "/images/albatross/aerial-01.jpg",
	aerial02: "/images/albatross/aerial-02.jpg",
	aerial03: "/images/albatross/aerial-03.jpg",
	aerial04: "/images/albatross/aerial-04.jpg",
	aerial05: "/images/albatross/aerial-05.jpg",
	aerial06: "/images/albatross/aerial-06.jpg",
	aerialWide: "/images/albatross/aerial-wide.jpg",
	aerialLayout: "/images/albatross/aerial-layout.jpg",
	entrance: "/images/albatross/entrance.jpg",
	roads: "/images/albatross/roads.jpg",
	playground: "/images/albatross/playground.jpg",
	sciencePark: "/images/albatross/site-01.jpg",
	amenitiesPark: "/images/albatross/amenities-park.jpg",
	film: "/images/albatross/film.mp4",
	ayisha: "/images/albatross/testimonial-ayisha.jpg",
	ramesh: "/images/albatross/testimonial-ramesh.jpg"
};
var WHY = [
	{
		n: "01",
		title: "Premium location",
		kicker: "Pattanam / Peedampalli, Coimbatore",
		copy: "A fast-developing residential corridor with everyday connectivity — close to the L&T Bypass, schools, hospitals, and the airport.",
		image: IMAGES.aerial01,
		alt: "Aerial view of Albatross plotted community in Peedampalli, Coimbatore"
	},
	{
		n: "02",
		title: "Thoughtfully planned",
		kicker: "6-acre plotted community",
		copy: "One hundred and ten plots across six acres. Roads, drainage, and open space were designed before the first family arrived.",
		image: IMAGES.aerialLayout,
		alt: "Albatross layout with blacktop internal roads and plotted parcels"
	},
	{
		n: "03",
		title: "Gated community",
		kicker: "Secure, planned residential environment",
		copy: "A compound wall, a named entrance, and a community that already feels lived-in — not a layout on a drawing.",
		image: IMAGES.entrance,
		alt: "Albatross gated entrance on the Peedampalli road"
	},
	{
		n: "04",
		title: "Modern infrastructure",
		kicker: "Blacktop roads, drainage, street lighting",
		copy: "Asphalt roads with kerbs, storm-water drainage, and lighting already in place. Ready to build, not waiting on promises.",
		image: IMAGES.roads,
		alt: "Internal blacktop road with landscaping at Albatross"
	},
	{
		n: "05",
		title: "Lifestyle amenities",
		kicker: "Clubhouse, play area, science-themed park",
		copy: "A children’s play area, landscaped walks, a science-themed park, and a clubhouse — uncommon for a plotted community of this scale.",
		image: IMAGES.playground,
		alt: "Children’s play area at Albatross Coimbatore"
	},
	{
		n: "06",
		title: "Long-term potential",
		kicker: "A developing residential corridor",
		copy: "Peedampalli sits on Coimbatore’s eastern growth line — bypass, airport, and expanding neighbourhoods. One hundred and five families have already taken a position here.",
		image: IMAGES.aerial03,
		alt: "Albatross aerial looking toward the Coimbatore hills"
	}
];
var AMENITIES = [
	{
		title: "Clubhouse",
		image: IMAGES.amenitiesPark,
		alt: "Clubhouse and landscaped court at Albatross"
	},
	{
		title: "Children’s play area",
		image: IMAGES.playground,
		alt: "Colourful children’s play equipment at Albatross"
	},
	{
		title: "Science-themed park",
		image: IMAGES.sciencePark,
		alt: "Science-themed park with DNA sculpture at Albatross"
	},
	{
		title: "Landscaped spaces",
		image: IMAGES.aerial06,
		alt: "Landscaped internal roads and planting at Albatross"
	},
	{
		title: "Internal roads",
		image: IMAGES.roads,
		alt: "Blacktop internal road with flowering hedges"
	},
	{
		title: "Security",
		image: IMAGES.entrance,
		alt: "Staffed Albatross entrance and compound"
	}
];
var CONNECTIVITY = [
	{
		mins: "02",
		label: "L&T Bypass"
	},
	{
		mins: "02",
		label: "SBIOA School"
	},
	{
		mins: "05",
		label: "SRK Miraj Cinemas"
	},
	{
		mins: "10",
		label: "Royal Care Hospital"
	},
	{
		mins: "15",
		label: "Chitra Airport"
	},
	{
		mins: "15",
		label: "Coimbatore Railway Station"
	}
];
var TRUST = [
	{
		value: "30+",
		label: "Years group legacy"
	},
	{
		value: "6+",
		label: "Lakh sq.ft. developed"
	},
	{
		value: "200+",
		label: "Happy families"
	}
];
var TESTIMONIALS = [{
	quote: "I’m very much happy about my decision.",
	name: "Ms. Ayisha",
	place: "Bangalore",
	image: IMAGES.ayisha,
	video: "https://www.youtube.com/embed/K4FnRBcXp1s"
}, {
	quote: "This is the plot I was looking for.",
	name: "Mr. Ramesh",
	place: "Albatross, Coimbatore",
	image: IMAGES.ramesh,
	video: "https://www.youtube.com/embed/Bgoaj91Eqyk"
}];
var PLOT_SIZES = [
	"Up to 3 cents",
	"3 – 4 cents",
	"4 – 5 cents",
	"Not sure yet"
];
function Amenities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "amenities",
		className: "bg-ivory py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 md:px-10 lg:px-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-gold",
				children: "Amenities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 max-w-2xl font-serif text-headline leading-[0.95] tracking-display text-forest",
				children: "A community that feels complete."
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "amenity-track mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:gap-4 md:px-10 lg:px-14",
			children: AMENITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[52vw] lg:w-[38vw]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.alt,
					className: "aspect-tall w-full object-cover sm:aspect-portrait"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-ivory",
						children: item.title
					})
				})]
			}, item.title))
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2.5 font-sans font-medium uppercase tracking-label whitespace-nowrap transition-[color,background-color,border-color,transform,opacity] duration-200 ease-[var(--ease-out-soft)] active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-none", {
	variants: {
		variant: {
			solid: "bg-forest text-ivory hover:bg-forest-soft",
			invert: "bg-ivory text-forest hover:bg-cream",
			gold: "bg-gold text-ink hover:bg-sand",
			ghost: "bg-transparent text-ivory border border-ivory/35 hover:border-ivory hover:bg-ivory/8",
			ghostDark: "bg-transparent text-forest border border-forest/25 hover:border-forest hover:bg-forest/5",
			line: "bg-transparent text-current px-0 h-auto border-b border-gold/80 rounded-none hover:border-gold"
		},
		size: {
			default: "h-12 px-7 text-kicker",
			lg: "h-14 px-8 text-kicker",
			sm: "h-10 px-5 text-kicker"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Conversion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[80vh] overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.aerial01,
				alt: "Aerial of Albatross at dusk light",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-[80vh] flex-col justify-end px-5 py-24 md:px-10 md:py-28 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "The final five"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-3xl font-serif text-headline leading-[0.92] tracking-display",
						children: [
							105,
							" have already chosen.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Only ",
							5,
							" remain."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lead text-ivory/70",
						children: "Book your site visit before the final plots are gone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "invert",
							size: "lg",
							onClick: () => scrollToId("enquiry"),
							children: ["Book a site visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								strokeWidth: 1.75
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE_TEL}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									strokeWidth: 1.75
								}), "Call now"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-ivory/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-ivory",
								href: `tel:${PHONE_TEL}`,
								children: PHONE_DISPLAY
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3 text-ivory/30",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-ivory",
								href: `mailto:${EMAIL}`,
								children: EMAIL
							})
						]
					})
				] })
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full bg-transparent px-0 py-2 text-base text-ink placeholder:text-ink/35", "border-0 border-b border-forest/20 rounded-none shadow-none", "transition-colors duration-200", "focus-visible:border-gold focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
		suppressHydrationWarning: true,
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("kicker text-forest/70", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full bg-transparent px-0 py-2 text-base text-ink placeholder:text-ink/35", "border-0 border-b border-forest/20 rounded-none shadow-none resize-none", "transition-colors duration-200", "focus-visible:border-gold focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
		suppressHydrationWarning: true,
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Enquiry() {
	const [size, setSize] = (0, import_react.useState)("Not sure yet");
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (name.length < 2) {
			toast.error("Please enter your name.");
			return;
		}
		if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""))) {
			toast.error("Please enter a valid 10-digit Indian mobile number.");
			return;
		}
		const payload = {
			name,
			phone: phone.replace(/\s+/g, ""),
			size,
			message,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			project: "Albatross — final 5"
		};
		try {
			const prev = JSON.parse(localStorage.getItem("albatross-enquiries") ?? "[]");
			localStorage.setItem("albatross-enquiries", JSON.stringify([payload, ...prev].slice(0, 20)));
		} catch {}
		const text = encodeURIComponent(`Hello, I am ${name}. I would like to request a site visit for one of the final 5 plots at Albatross.\nPhone: ${payload.phone}\nPreferred size: ${size}${message ? `\n${message}` : ""}`);
		window.open(`https://wa.me/918870044870?text=${text}`, "_blank", "noopener,noreferrer");
		setSent(true);
		toast.success("Request received. Opening WhatsApp to confirm your visit.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "enquiry",
		className: "bg-ivory px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "Site visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest",
						children: "Interested in one of the final 5?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lead leading-relaxed text-ink/70",
						children: "Twenty seconds. We will share the latest availability and arrange a walk through Albatross."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-7",
				delay: 80,
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-gold/40 bg-ivory-deep p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-gold",
							children: "Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-3xl tracking-display text-forest",
							children: "Thank you. The last plots move quietly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink/70",
							children: "Our team will confirm your site visit. If WhatsApp did not open, write to us directly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-8",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								children: ["Continue on WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "flex flex-col gap-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-7 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									autoComplete: "name",
									required: true,
									placeholder: "Your full name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									autoComplete: "tel",
									inputMode: "numeric",
									required: true,
									placeholder: "10-digit mobile"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "kicker text-forest/70",
							children: "Preferred plot size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: PLOT_SIZES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSize(option),
								className: cn("h-11 px-4 text-xs uppercase tracking-label border transition-colors", size === option ? "border-gold bg-gold text-ink" : "border-forest/20 text-forest hover:border-forest"),
								children: option
							}, option))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								placeholder: "Anything we should know before your visit"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							className: "self-start",
							children: ["Request a site visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								strokeWidth: 1.75
							})]
						})
					]
				})
			})]
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/88", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:w-full md:max-w-5xl md:-translate-x-1/2", "border border-gold/25 bg-ink p-3 shadow-lift outline-none md:p-5", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		className: "absolute -top-11 right-0 flex size-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory",
		"aria-label": "Close",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
			className: "size-6",
			strokeWidth: 1.5
		})
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogTitle = DialogTitle$1;
function Film() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "film",
		className: "relative isolate min-h-[80vh] overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.aerial01,
				alt: "Cinematic aerial of Albatross",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 py-24 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "Project film"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 max-w-3xl font-serif text-headline leading-[0.95] tracking-display",
						children: [
							"See why ",
							105,
							" buyers chose Albatross."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(true),
						className: "mt-10 inline-flex items-center gap-4 text-ivory transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-16 items-center justify-center rounded-full border border-ivory/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-5 fill-ivory",
								strokeWidth: 0
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "Watch project film"
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					"aria-describedby": void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: "Albatross project film"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "aspect-video w-full bg-ink",
						controls: true,
						autoPlay: true,
						playsInline: true,
						poster: IMAGES.hero,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: IMAGES.film,
							type: "video/mp4"
						})
					})]
				})
			})
		]
	});
}
var OPEN = /* @__PURE__ */ new Set([
	14,
	33,
	52,
	71,
	96
]);
function PlotGrid({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-11 gap-1 sm:gap-1.5",
			role: "img",
			"aria-label": `105 of 110 plots sold. 5 remaining.`,
			children: Array.from({ length: 110 }, (_, i) => {
				const open = OPEN.has(i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("plot-cell aspect-square", open && "is-open"),
					title: open ? "Available" : "Sold"
				}, i);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap items-center gap-6 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-forest/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "plot-cell inline-block size-2.5" }),
					105,
					" sold"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-forest",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "plot-cell is-open inline-block size-2.5" }),
					5,
					" remaining"
				]
			})]
		})]
	});
}
function FinalFive() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "final-five",
		className: "bg-ivory-deep px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-14 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "Available now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest",
						children: "Your window is getting smaller."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-md text-lead leading-relaxed text-ink/70",
						children: [
							"With ",
							105,
							" plots already sold, only five opportunities remain at Albatross. Plot numbers and facing change as reservations complete — request the latest availability before your visit."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 font-serif text-5xl tracking-display text-gold md:text-6xl",
						children: [
							"0",
							5,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl text-forest/60",
								children: "plots"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-8",
						size: "lg",
						onClick: () => scrollToId("enquiry"),
						children: ["Request availability", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.75
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-7",
				delay: 100,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden bg-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.aerialLayout,
						alt: "Albatross plotted layout seen from above",
						className: "aspect-photo w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-gold",
							children: "Master plan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-2xl text-ivory",
							children: "A gated layout, nearly complete."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotGrid, { className: "mt-6" })]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-forest px-5 py-16 text-ivory md:px-10 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-10 md:flex-row md:items-start md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/logo/sribaby-logo-light.svg",
				alt: "Sri Baby Properties",
				className: "h-8 w-auto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-sm text-sm leading-relaxed text-ivory/60",
				children: "Premium DTCP and RERA-approved plotted communities in Coimbatore. Albatross, Pattanam / Peedampalli."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-3 block text-sm hover:text-gold",
						href: `tel:${PHONE_TEL}`,
						children: PHONE_DISPLAY
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-1 block text-sm hover:text-gold",
						href: `mailto:${EMAIL}`,
						children: EMAIL
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-gold",
						children: "Offices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm leading-relaxed text-ivory/65",
						children: OFFICE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm leading-relaxed text-ivory/65",
						children: SITE_OFFICE
					})
				] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/45 sm:flex-row sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Sri Baby Property Developers Private Limited."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "105 sold · 5 remaining · Albatross, Coimbatore" })]
		})]
	});
}
function CountUp({ to, pad = 0, className, duration = 1400 }) {
	const [value, setValue] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting || started.current) return;
			started.current = true;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				setValue(to);
				return;
			}
			const start = performance.now();
			const tick = (now) => {
				const t = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - t, 3);
				setValue(Math.round(to * eased));
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	const text = pad > 0 ? String(value).padStart(pad, "0") : String(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: cn("tabular-nums", className),
		children: text
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate min-h-dvh overflow-hidden bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "hero-media h-full w-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					poster: IMAGES.hero,
					"aria-label": "Aerial film of Albatross, Coimbatore",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: IMAGES.film,
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/78" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/55 to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-28 pt-28 md:px-10 md:pb-16 lg:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mb-6 text-gold",
					children: "Final release"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "max-w-5xl font-serif text-display leading-[0.88] tracking-display text-ivory",
					children: [
						"105 plots sold.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Only 5 remain."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-subhead italic text-ivory/90",
							children: "Albatross"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-md text-sm text-ivory/70 md:text-base",
							children: "Premium plotted community · Pattanam / Peedampalli, Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "invert",
								size: "lg",
								onClick: () => scrollToId("enquiry"),
								children: ["Book a site visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "lg",
								onClick: () => scrollToId("final-five"),
								children: ["View the last 5 plots", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-10 md:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-display leading-none tracking-display text-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: 105 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mt-2 text-ivory/55",
							children: "Plots sold"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-display leading-none tracking-display text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
								to: 5,
								pad: 2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mt-2 text-gold/80",
							children: "Plots remaining"
						})] })]
					})]
				})
			]
		})]
	});
}
function Location() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "location",
		className: "bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-96 lg:col-span-5 lg:min-h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.aerialWide,
						alt: "Albatross in the Pattanam / Peedampalli corridor",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-gold",
								children: "Albatross"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-3xl tracking-display",
								children: "Pattanam"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl tracking-display text-ivory/70",
								children: "Coimbatore"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-20 md:px-10 md:py-24 lg:col-span-7 lg:px-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-gold",
					children: "Connectivity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-xl font-serif text-headline leading-[0.95] tracking-display",
					children: "A location worth arriving early for."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 divide-y divide-ivory/10 border-y border-ivory/10",
					children: CONNECTIVITY.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-6 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-4xl tracking-display text-gold md:text-5xl",
								children: [item.mins, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 font-sans text-kicker font-medium uppercase tracking-kicker text-ivory/45",
									children: "min"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-sm md:text-base",
								children: item.label
							})]
						})
					}, item.label))
				})]
			})]
		})
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "pointer-events-none absolute inset-x-0 top-0 z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-5 py-5 md:px-10 md:py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "pointer-events-auto flex items-center",
					"aria-label": "Sri Baby Properties",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/logo/sribaby-logo-light.svg",
						alt: "Sri Baby Properties",
						className: "h-9 w-auto md:h-11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "pointer-events-auto hidden items-center gap-8 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kicker text-ivory/70 transition-colors hover:text-ivory",
							onClick: () => scrollToId("final-five"),
							children: "The last 5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kicker text-ivory/70 transition-colors hover:text-ivory",
							onClick: () => scrollToId("location"),
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "invert",
							size: "sm",
							onClick: () => scrollToId("enquiry"),
							children: ["Book a site visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-3.5",
								strokeWidth: 1.75
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "pointer-events-auto lg:hidden",
					variant: "invert",
					size: "sm",
					onClick: () => scrollToId("enquiry"),
					children: "Book visit"
				})
			]
		})
	});
}
function Scale() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-ivory px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker text-gold",
			children: "Project scale"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "sr-only",
			children: "Six acres, one hundred and ten plots, one hundred and five sold, five remaining"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 border-t border-forest/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: 6,
					pad: 2,
					label: "Acres",
					muted: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: 110,
					label: "Plots",
					muted: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: 105,
					label: "Sold"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: 5,
					pad: 2,
					label: "Remaining",
					gold: true
				})
			]
		})]
	});
}
function Stat({ n, label, pad, gold, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `font-serif text-display leading-none tracking-display ${gold ? "text-gold" : muted ? "text-forest/55" : "text-forest"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
			to: n,
			pad
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `kicker mt-3 ${gold ? "text-gold" : "text-forest/50"}`,
		children: label
	})] });
}
function Scarcity() {
	const fiveRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = fiveRef.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			el.classList.add("five-pulse");
			io.disconnect();
		}, { threshold: .5 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-forest px-5 py-28 text-ivory md:px-10 md:py-36 lg:px-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-gold",
				children: "The final inventory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-serif text-subhead leading-none tracking-display text-ivory/70",
				children: "Just"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				ref: fiveRef,
				className: "font-serif text-mega leading-[0.8] tracking-display text-gold",
				children: String(5).padStart(2, "0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-serif text-headline leading-none tracking-display",
				children: "remain."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 max-w-lg text-lead leading-relaxed text-ivory/65",
				children: [
					"Albatross is now in its final inventory stage. ",
					105,
					" of ",
					110,
					" plots have already been sold. What remains is not a launch — it is a last allocation."
				]
			})
		] })
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger);
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let destroyed = false;
		let ticker;
		let instance;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (destroyed) return;
			const lenis = new Lenis({
				duration: 1.15,
				smoothWheel: true,
				wheelMultiplier: .9
			});
			instance = lenis;
			window.__lenis = lenis;
			lenis.on("scroll", () => ScrollTrigger.update());
			ticker = (time) => {
				lenis.raf(time * 1e3);
			};
			gsapWithCSS.ticker.add(ticker);
			gsapWithCSS.ticker.lagSmoothing(0);
		});
		return () => {
			destroyed = true;
			if (ticker) gsapWithCSS.ticker.remove(ticker);
			instance?.destroy();
			window.__lenis = void 0;
		};
	}, []);
	return null;
}
function SocialProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "demand",
		className: "bg-ivory px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker text-gold",
			children: "Demand, already proven"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-5 max-w-4xl font-serif text-headline leading-[0.95] tracking-display text-forest",
			children: [105, " families have already chosen Albatross."]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid items-end gap-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-7",
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.aerial03,
						alt: "Albatross master layout from the air",
						className: "aspect-photo w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-forest/15 mix-blend-multiply" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				delay: 140,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-lead leading-relaxed text-ink/70",
						children: "Albatross is nearing full occupancy. Of one hundred and ten plots in this gated community, one hundred and five are already spoken for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotGrid, { className: "mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-8",
						variant: "solid",
						onClick: () => scrollToId("final-five"),
						children: ["See the last 5", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.75
						})]
					})
				]
			})]
		})]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2 6.48 2 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34A10 10 0 0 0 12.04 22C17.6 22 22.1 17.52 22.1 12s-4.5-9.09-3.05-7.09zM12.04 20.15c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.03.8.81-2.95-.2-.31A8.13 8.13 0 0 1 3.9 12.02c0-4.48 3.66-8.13 8.15-8.13 2.18 0 4.22.85 5.76 2.38a8.1 8.1 0 0 1 2.39 5.75c-.01 4.48-3.67 8.13-8.16 8.13zm4.47-6.09c-.24-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" })
	});
}
function StickyBar() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > window.innerHeight * .7);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden justify-end p-6 md:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto flex items-center gap-4 border border-gold/40 bg-forest px-4 py-3 text-ivory shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "kicker text-gold",
				children: [5, " plots remain"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "invert",
				size: "sm",
				onClick: () => scrollToId("enquiry"),
				children: ["Book a site visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 border-t border-forest/15 bg-ivory pb-[env(safe-area-inset-bottom)] md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "flex h-14 flex-col items-center justify-center gap-0.5 text-kicker font-medium uppercase tracking-label text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-4",
						strokeWidth: 1.6
					}), "Call"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "flex h-14 flex-col items-center justify-center gap-0.5 text-kicker font-medium uppercase tracking-label text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scrollToId("enquiry"),
					className: "flex h-14 flex-col items-center justify-center bg-forest text-kicker font-medium uppercase tracking-label text-ivory",
					children: "Book visit"
				})
			]
		})
	})] });
}
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [video, setVideo] = (0, import_react.useState)(null);
	const item = TESTIMONIALS[index] ?? TESTIMONIALS[0];
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % TESTIMONIALS.length);
		}, 9e3);
		return () => window.clearInterval(id);
	}, []);
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "stories",
		className: "bg-ivory-deep px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-gold",
				children: "From those who already own"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest",
				children: "105 buyers started here."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid items-center gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setVideo(item.video),
					className: "relative overflow-hidden lg:col-span-5",
					"aria-label": `Watch ${item.name}'s story`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker absolute bottom-4 left-4 bg-ink/70 px-3 py-2 text-ivory",
						children: "Watch the story"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-serif text-subhead leading-snug tracking-display text-forest italic",
							children: [
								"“",
								item.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-medium text-ink",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mt-1 text-forest/50",
							children: item.place
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm text-ink/55",
							children: [
								"Only ",
								5,
								" opportunities remain."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous testimonial",
									className: "flex size-11 items-center justify-center border border-forest/20 text-forest transition-colors hover:border-forest",
									onClick: () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next testimonial",
									className: "flex size-11 items-center justify-center border border-forest/20 text-forest transition-colors hover:border-forest",
									onClick: () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2",
									children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Show ${t.name}`,
										className: `h-1.5 w-8 ${i === index ? "bg-gold" : "bg-forest/20"}`,
										onClick: () => setIndex(i)
									}, t.name))
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(video),
				onOpenChange: (o) => !o && setVideo(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					"aria-describedby": void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: "Customer story"
					}), video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Customer testimonial",
						src: `${video}?autoplay=1`,
						className: "aspect-video w-full",
						allow: "autoplay; encrypted-media; picture-in-picture",
						allowFullScreen: true
					}) : null]
				})
			})
		]
	});
}
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "trust",
		className: "bg-ivory px-5 py-24 md:px-10 md:py-32 lg:px-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-gold",
					children: "The developer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-forest",
					children: "Why buy from Sri Baby Properties?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lead leading-relaxed text-ink/70",
					children: "Three decades of Coimbatore enterprise — textiles, energy, then land — brought to families through DTCP and RERA-approved plotted communities. Build with restraint. Communicate with clarity. Deliver with care."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-10 border-t border-forest/10 pt-10 md:grid-cols-3",
				children: TRUST.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 80,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-display leading-none tracking-display text-forest",
						children: item.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker mt-3 text-forest/50",
						children: item.label
					})]
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 max-w-xl text-xs leading-relaxed text-ink/45",
				children: "RERA: TN/11/Layout/3726/2024 · TN/11/Layout/3931/2024. DTCP-approved layout at Peedampalli Village, Sulur Taluk, Coimbatore."
			})
		]
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "why",
		className: "bg-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pt-24 md:px-10 md:pt-32 lg:px-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-gold",
				children: "The reasons"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-forest",
				children: "Why are buyers choosing Albatross?"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: WHY.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid items-stretch border-t border-forest/10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: `flex flex-col justify-center px-5 py-12 md:px-10 md:py-16 lg:col-span-5 lg:px-14 ${i % 2 === 1 ? "lg:order-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl text-gold",
							children: item.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-subhead leading-tight tracking-display text-forest",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mt-3 text-forest/55",
							children: item.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-ink/70",
							children: item.copy
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: `lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`,
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.alt,
						className: "h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-96"
					})
				})]
			}, item.n))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ivory pb-14 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#enquiry",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-4 focus:py-2 focus:text-forest",
				children: "Skip to enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProof, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scarcity, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalFive, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Amenities, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conversion, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Enquiry, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyBar, {})
		]
	});
}
//#endregion
export { Home as component };
