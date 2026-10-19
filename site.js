export const SITE = "https://www.estismitbio.com/";
export const BOOK = "https://mygc.co.za/external/diary/7b937c87-0ed3-42b1-893e-374071e5bb94";
export const WA = "https://wa.me/27686104880";
export const GMAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=esti.healthplus@gmail.com";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Winelands+Medical+Centre+1D+New+Eskdale+Street+Paarl";
export const NAV = [
  { label: "Home", href: "/" },
  { label: "What We Treat", href: "/#conditions" },
  { label: "FAQ", href: "/#faq" },
  { label: "Medical Aid", href: "/medical-aid" },
  { label: "Can Biokinetics Help Me?", href: "/can-biokinetics-help-me" },
  { label: "Blog", href: "/blog" },
];
export const waText = (t) => WA + "?text=" + encodeURIComponent(t);
