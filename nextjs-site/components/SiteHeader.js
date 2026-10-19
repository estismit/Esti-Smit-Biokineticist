"use client";
import { useState } from "react";
import { Button, NavLink, Icon } from "./ui";
import { NAV, BOOK, WA } from "../content/site";

export default function SiteHeader({ current }) {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--header-bg)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", gap: 24 }}>
        <a href="/" aria-label="Esti Smit Biokinetics — home" style={{ display: "flex" }}>
          <img src="/assets/logo-img.png" alt="Esti Smit Biokineticist — Move Better | Feel Stronger | Live Well" width="133" height="48" style={{ height: 52, width: "auto", display: "block" }} />
        </a>
        <nav aria-label="Main" className="esb-desk" style={{ alignItems: "center", gap: 16, whiteSpace: "nowrap" }}>
          {NAV.map((l) => (
            <NavLink key={l.href} href={l.href} style={l.href === current ? { color: "var(--orange-dark)" } : {}}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="esb-desk" style={{ alignItems: "center", gap: 12, whiteSpace: "nowrap", flexShrink: 0 }}>
          <Button variant="secondary" size="sm" href={WA} iconLeft="message-circle">WhatsApp</Button>
          <Button variant="primary" size="sm" href={BOOK}><span className="esb-book-short">Book Now</span><span className="esb-book-long">Book Your Assessment</span></Button>
        </div>
        <button type="button" className="esb-mob" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} style={{ alignItems: "center", justifyContent: "center", width: 44, height: 44, border: 0, background: "transparent", color: "var(--charcoal)", cursor: "pointer" }}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" className={"esb-mobnav" + (open ? " open" : "")} style={{ flexDirection: "column", gap: 16, padding: "16px 24px 24px", borderTop: "1px solid var(--line)", background: "#fff" }}>
        {NAV.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "var(--ink)", fontWeight: 600, fontSize: 16, padding: "10px 2px", textDecoration: "none" }}>{l.label}</a>
        ))}
        <Button variant="primary" fullWidth href={BOOK}>Book Your Assessment</Button>
      </nav>
    </header>
  );
}
