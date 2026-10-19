"use client";
import React from "react";
import * as L from "lucide-react";

const MAP = { "arrow-right": L.ArrowRight, "arrow-left": L.ArrowLeft, "message-circle": L.MessageCircle, calendar: L.Calendar, "map-pin": L.MapPin, phone: L.Phone, mail: L.Mail, "check-circle-2": L.CheckCircle2, "chevron-down": L.ChevronDown, quote: L.Quote, star: L.Star, menu: L.Menu, x: L.X, "rotate-ccw": L.RotateCcw, "shield-check": L.ShieldCheck, target: L.Target, "heart-handshake": L.HeartHandshake, users: L.Users, heart: L.Heart, activity: L.Activity, award: L.Award, camera: L.Camera, clock: L.Clock, search: L.Search };
export function Icon({ name, size = 20, strokeWidth = 1.8, color = "currentColor", style = {} }) {
  const C = MAP[name]; if (!C) return null;
  return <span aria-hidden="true" style={{ display: "inline-flex", flexShrink: 0, color, ...style }}><C width={size} height={size} strokeWidth={strokeWidth} /></span>;
}

const Eyebrow = (() => {
function Eyebrow({
  children,
  tone = "warm",
  onPhoto = false,
  size = "sm",
  style = {}
}) {
  const colors = {
    warm: "var(--orange)",
    warmInk: "var(--orange-dark)",
    cool: "var(--blue-dark)"
  };
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      textTransform: "uppercase",
      fontSize: size === "xs" ? "12px" : size === "base" ? "16px" : "14px",
      fontWeight: onPhoto ? 800 : 700,
      letterSpacing: "var(--tracking-eyebrow)",
      color: colors[tone] || colors.warm,
      textShadow: onPhoto ? "var(--text-shadow-on-photo)" : undefined,
      margin: 0,
      ...style
    }
  }, children);
}

return Eyebrow;
})();

const Button = (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const VARIANTS = {
  primary: {
    base: {
      background: "var(--orange)",
      color: "#fff",
      boxShadow: "var(--shadow-cta-orange)"
    },
    hover: {
      background: "var(--orange-dark)",
      boxShadow: "var(--shadow-cta-orange-hover)",
      transform: "translateY(-2px)"
    }
  },
  secondary: {
    base: {
      background: "transparent",
      color: "var(--blue-dark)",
      border: "1.5px solid var(--blue)"
    },
    hover: {
      background: "var(--blue-tint)",
      transform: "translateY(-2px)"
    }
  },
  whatsapp: {
    base: {
      background: "var(--blue)",
      color: "#fff",
      boxShadow: "var(--shadow-cta-blue)"
    },
    hover: {
      background: "var(--blue-dark)",
      transform: "translateY(-2px)"
    }
  },
  ghostWhite: {
    base: {
      background: "var(--glass-white)",
      color: "#fff",
      border: "1.5px solid var(--glass-white-border)",
      backdropFilter: "var(--glass-blur)"
    },
    hover: {
      background: "var(--glass-white-hover)",
      transform: "translateY(-2px)"
    }
  },
  white: {
    base: {
      background: "#fff",
      color: "var(--orange-dark)",
      boxShadow: "var(--shadow-cta-white)"
    },
    hover: {
      transform: "translateY(-2px)"
    }
  }
};
const SIZES = {
  md: {
    padding: "15px 30px",
    fontSize: "15px"
  },
  sm: {
    padding: "11px 24px",
    fontSize: "14px"
  },
  compact: {
    padding: "12px 16px",
    fontSize: "14px"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  newTab = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    borderRadius: "var(--radius-pill)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-btn)",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? {
      transform: "scale(0.97)"
    } : null),
    ...style
  };
  const glyph = n => typeof n === "string" ? /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: size === "md" ? 17 : 16,
    strokeWidth: 2
  }) : n;
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? glyph(iconLeft) : null, children, iconRight ? glyph(iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: s,
      onClick: onClick
    }, newTab ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : null, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    onClick: onClick,
    disabled: disabled
  }, handlers, rest), content);
}

return Button;
})();

const IconChip = (() => {
function IconChip({
  children,
  variant = "soft",
  size = 42,
  style = {}
}) {
  const variants = {
    soft: {
      background: "var(--grey-bg)",
      color: "var(--orange-dark)",
      boxShadow: "none"
    },
    raised: {
      background: "#fff",
      color: "var(--orange-dark)",
      boxShadow: "var(--shadow-icon-chip)"
    },
    orange: {
      background: "var(--orange)",
      color: "#fff"
    },
    blue: {
      background: "var(--blue)",
      color: "#fff"
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size >= 56 ? "var(--radius-icon-lg)" : "var(--radius-icon)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      ...v,
      ...style
    }
  }, children);
}

return IconChip;
})();

const InfoCard = (() => {
function InfoCard({
  icon,
  title,
  children,
  align = "start",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "14px",
      background: "var(--grey-bg)",
      borderRadius: "var(--radius-pill-sm)",
      padding: "20px 22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    variant: "raised"
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.8
  }) : icon), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      fontSize: "14px",
      marginBottom: "4px"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--muted)",
      lineHeight: "var(--leading-body)"
    }
  }, children)));
}

return InfoCard;
})();

const TagPill = (() => {
function TagPill({
  children,
  tone = "grey",
  style = {}
}) {
  const tones = {
    grey: {
      background: "var(--grey-bg)",
      color: "var(--muted)",
      border: "none"
    },
    onBlue: {
      background: "rgba(255,255,255,.14)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,.35)"
    }
  };
  const t = tones[tone] || tones.grey;
  const onBlue = tone === "onBlue";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontSize: onBlue ? "14px" : "12px",
      fontWeight: 600,
      borderRadius: "var(--radius-pill)",
      padding: onBlue ? "8px 16px" : "5px 12px",
      ...t,
      ...style
    }
  }, children);
}

return TagPill;
})();

const SectionHeading = (() => {
function SectionHeading({
  eyebrow,
  eyebrowTone = "cool",
  title,
  subtitle,
  align = "center",
  onDark = false,
  onPhoto = false,
  maxWidth = 672,
  style = {}
}) {
  const shadow = onPhoto ? "var(--text-shadow-on-photo)" : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? maxWidth : undefined,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: eyebrowTone,
    onPhoto: onPhoto
  }, eyebrow)) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h2)",
      fontWeight: 500,
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: onDark ? "#fff" : "var(--charcoal)",
      textShadow: shadow,
      margin: 0
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "20px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      fontWeight: onDark ? 500 : 600,
      lineHeight: "var(--leading-body)",
      color: onDark ? "rgba(255,255,255,.95)" : "var(--charcoal)",
      textShadow: shadow
    }
  }, subtitle) : null);
}

return SectionHeading;
})();

const PhotoPlaceholder = (() => {
function PhotoPlaceholder({
  label,
  aspectRatio = "4 / 5",
  radius = "24px",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": label,
    style: {
      width: "100%",
      aspectRatio,
      borderRadius: radius,
      border: "1.5px dashed #c9b8a8",
      background: "repeating-linear-gradient(135deg, #fbfaf8, #fbfaf8 10px, #f3f0ec 10px, #f3f0ec 20px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      color: "#9a8f83",
      textAlign: "center",
      padding: "24px",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 28,
    strokeWidth: 1.4,
    style: {
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      fontWeight: 600,
      letterSpacing: ".02em",
      maxWidth: "220px",
      lineHeight: 1.4,
      opacity: 0.8
    }
  }, label));
}

return PhotoPlaceholder;
})();

const NavLink = (() => {
const {
  useState
} = React;
function NavLink({
  children,
  href,
  onClick,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      color: "var(--ink)",
      fontWeight: 600,
      fontSize: "14.5px",
      padding: "6px 2px",
      textDecoration: "none",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: hover ? "100%" : "0%",
      background: "var(--orange)",
      transition: "width .25s ease"
    }
  }));
}

return NavLink;
})();

const BandSection = (() => {
function BandSection({
  children,
  tone = "white",
  grain = false,
  width = 1280,
  paddingY = 96,
  id,
  style = {}
}) {
  const tones = {
    white: {
      background: "var(--white)",
      color: "var(--charcoal)"
    },
    grey: {
      background: "var(--grey-bg)",
      color: "var(--charcoal)"
    },
    blue: {
      background: "var(--blue)",
      color: "#fff"
    },
    charcoal: {
      background: "var(--charcoal)",
      color: "#fff"
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: "relative",
      overflow: "hidden",
      padding: `${paddingY}px 0`,
      scrollMarginTop: "84px",
      ...t,
      ...style
    }
  }, grain ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-dot)",
      backgroundSize: "var(--grain-size)",
      opacity: 0.4
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: width,
      margin: "0 auto",
      padding: "0 24px"
    }
  }, children));
}

return BandSection;
})();

const PhotoSection = (() => {
function PhotoSection({
  image,
  imageAlt = "",
  children,
  scrim = "hero",
  imageOpacity,
  minHeight,
  style = {}
}) {
  const presets = {
    hero: {
      opacity: 0.65,
      layers: ["var(--scrim-hero)"]
    },
    landingHero: {
      opacity: 0.75,
      layers: ["var(--scrim-landing-hero)"]
    },
    method: {
      opacity: 0.4,
      layers: ["var(--scrim-method-h)", "var(--scrim-method-v)"]
    }
  };
  const p = presets[scrim] || presets.hero;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "#000",
      minHeight,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: imageOpacity ?? p.opacity
    }
  }), p.layers.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      inset: 0,
      background: l
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}

return PhotoSection;
})();

const TestimonialCard = (() => {
function TestimonialCard({
  image,
  imageAlt = "",
  story,
  quote,
  name,
  programme,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--line)",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      height: "100%",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      objectFit: "cover",
      borderRadius: "var(--radius-photo)"
    }
  }) : /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Lifestyle photo of patient enjoying the activity mentioned",
    aspectRatio: "1 / 1"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 22,
    color: "var(--orange)"
  }), story ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: "var(--leading-body)",
      color: "var(--muted)",
      margin: 0
    }
  }, story) : null, quote ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "18px",
      lineHeight: "var(--leading-snug)",
      fontWeight: 500,
      margin: 0,
      color: "var(--charcoal)"
    }
  }, "\u201C", quote, "\u201D") : null, /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", justifyContent: "flex-end" }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 22,
    color: "var(--orange)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      fontWeight: 600,
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    role: "img", "aria-label": "5 stars on Google",
    style: { display: "flex", alignItems: "center", gap: "6px" }
  }, /*#__PURE__*/React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 48 48", "aria-hidden": "true" },
    /*#__PURE__*/React.createElement("path", { fill: "#EA4335", d: "M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" }),
    /*#__PURE__*/React.createElement("path", { fill: "#4285F4", d: "M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z" }),
    /*#__PURE__*/React.createElement("path", { fill: "#FBBC05", d: "M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" }),
    /*#__PURE__*/React.createElement("path", { fill: "#34A853", d: "M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" })
  ), /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: "1px" } },
    [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", { key: i, width: 14, height: 14, viewBox: "0 0 24 24", "aria-hidden": "true" },
      /*#__PURE__*/React.createElement("path", { fill: "#FBBC05", d: "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" }))
    )))), programme ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--muted)",
      margin: 0
    }
  }, programme) : null));
}

return TestimonialCard;
})();

const FaqAccordion = (() => {
const {
  useState
} = React;
function FaqAccordion({
  items = [],
  defaultOpen = 0,
  style = {}
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, items.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: f.q,
      style: {
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 4px",
        textAlign: "left",
        fontFamily: "var(--font-heading)",
        fontSize: "19px",
        fontWeight: 500,
        color: "var(--charcoal)"
      }
    }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 20,
      color: "var(--orange-dark)",
      style: {
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform .3s ease"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? "260px" : "0px",
        opacity: isOpen ? 1 : 0,
        paddingBottom: isOpen ? "22px" : "0px",
        transition: "max-height .45s ease, opacity .4s ease, padding .4s ease"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "16px",
        lineHeight: "var(--leading-body)",
        paddingRight: "32px",
        color: "var(--muted)"
      }
    }, f.a)));
  }));
}

return FaqAccordion;
})();

const Reveal = (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    let done = false;
    const show = () => {
      if (!done) {
        done = true;
        setVisible(true);
        cleanup();
      }
    };
    const check = () => {
      const r = node.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show();
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) show();
    }, {
      threshold
    });
    obs.observe(node);
    // IntersectionObserver and requestAnimationFrame are both suspended while
    // the document is hidden (background tabs, preview iframes), so timers and
    // scroll listeners carry the fallback.
    const timers = [setTimeout(check, 60), setTimeout(check, 400), setTimeout(show, 1200)];
    const cleanup = () => {
      obs.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      document.removeEventListener("visibilitychange", check);
    };
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    document.addEventListener("visibilitychange", check);
    return cleanup;
  }, [threshold]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(28px)",
      transition: "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
      transitionDelay: visible ? `${delay}ms` : "0ms",
      ...style
    }
  }, rest), children);
}

return Reveal;
})();

const OfferCard = (() => {
function OfferCard({
  heading,
  items = [],
  columns = 2,
  footerTitle,
  footerText,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card-xl)",
      padding: "56px 40px",
      color: "var(--charcoal)",
      ...style
    }
  }, heading ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "18px",
      fontWeight: 500,
      marginBottom: "24px",
      textAlign: "center"
    }
  }, heading) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      columnGap: "40px"
    }
  }, items.map((item, i) => {
    const last = columns === 2 ? i >= items.length - 2 : i === items.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "14px 0",
        borderBottom: last ? "none" : "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 20,
      strokeWidth: 1.8,
      color: "var(--blue)",
      style: {
        marginTop: "2px"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "16px",
        fontWeight: 500
      }
    }, item));
  })), footerTitle || footerText ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "32px",
      paddingTop: "32px",
      textAlign: "center",
      borderTop: "1px solid var(--line)"
    }
  }, footerTitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "18px",
      fontWeight: 500,
      marginBottom: "8px"
    }
  }, footerTitle) : null, footerText ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: "var(--leading-body)",
      maxWidth: "576px",
      margin: "0 auto",
      color: "var(--muted)"
    }
  }, footerText) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginTop: "40px"
    }
  }, children) : null);
}

return OfferCard;
})();

export { Eyebrow, Button, IconChip, InfoCard, TagPill, SectionHeading, PhotoPlaceholder, NavLink, BandSection, PhotoSection, TestimonialCard, FaqAccordion, Reveal, OfferCard };
