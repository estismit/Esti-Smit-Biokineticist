"use client";
import { useEffect, useRef, useState } from "react";
import { Icon, TagPill } from "./ui";

export default function Conditions({ regions }) {
  const [open, setOpen] = useState({});
  const canvasRef = useRef(null);
  const hostRef = useRef(null);
  useEffect(() => {
    let un = null, t = null, tries = 0;
    const mount = () => {
      if (canvasRef.current && hostRef.current && window.ESBFitnessBg) { un = window.ESBFitnessBg.mount(canvasRef.current, hostRef.current); return; }
      if (++tries < 60) t = setTimeout(mount, 150);
    };
    mount();
    return () => { clearTimeout(t); if (un) un(); };
  }, []);
  const glow = "0 0 18px #2a5f9e, 0 0 6px #2a5f9e, 0 2px 12px rgba(0,0,0,.25)";
  return (
    <section id="conditions" ref={hostRef} style={{ position: "relative", overflow: "hidden", padding: "128px 0", scrollMarginTop: 84, background: "var(--blue)", color: "#fff" }}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", pointerEvents: "none" }}>
        <div data-reveal="" style={{ maxWidth: 768, margin: "0 auto 64px", textAlign: "center", pointerEvents: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "calc(var(--text-h2) * 1.15)", fontWeight: 500, lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)", color: "#fff", margin: 0, textWrap: "balance", textShadow: glow }}>What condition are you dealing with?</h2>
          <p style={{ fontSize: "calc(var(--text-lead) * 1.15)", fontWeight: 600, lineHeight: "var(--leading-body)", color: "#fff", margin: "20px 0 0", textWrap: "pretty", textShadow: glow }}>From joint pain and injuries to balance, chronic conditions and sports performance, find what you're dealing with and see how we help.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 28, alignItems: "start", maxWidth: 1152, margin: "0 auto" }}>
          {regions.map((r, i) => {
            const o = !!open[i];
            return (
              <article key={r.key} data-reveal="" className="esb-lift-sm" style={{ pointerEvents: "auto", background: "#fff", borderRadius: "var(--radius-card-lg)", padding: "44px 40px", minHeight: 300, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 16, color: "var(--charcoal)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 500, letterSpacing: "var(--tracking-display)", lineHeight: 1.2, margin: 0 }}>{r.title}</h3>
                <p style={{ fontSize: 17, fontWeight: 600, lineHeight: "var(--leading-body)", color: "var(--ink)", margin: 0 }}>{r.text}</p>
                <button type="button" onClick={() => setOpen({ ...open, [i]: !o })} aria-expanded={o} aria-controls={"region-" + i} style={{ display: "inline-flex", alignItems: "center", gap: 6, alignSelf: "flex-start", marginTop: "auto", padding: "16px 0 6px", border: 0, background: "transparent", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--orange-dark)", textAlign: "left" }}>
                  {o ? "Hide " + r.key + " conditions" : "See all " + r.key + " conditions"}
                  <span style={{ display: "inline-flex", transition: "transform .3s ease", transform: o ? "rotate(180deg)" : "none" }}><Icon name="chevron-down" size={16} strokeWidth={2} /></span>
                </button>
                <ul id={"region-" + i} aria-label={r.title + " we treat"} style={{ display: o ? "flex" : "none", flexWrap: "wrap", gap: 8, listStyle: "none", margin: 0, padding: "14px 0 0", borderTop: "1px solid var(--line)" }}>
                  {r.tags.map((t) => <li key={t} style={{ display: "flex" }}><TagPill>{t}</TagPill></li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
