import { Icon } from "./ui";
import { BOOK, WA, GMAIL, MAPS } from "../content/site";

const eyebrow = { margin: "0 0 18px", fontSize: 12, fontWeight: 800, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--orange-dark)" };
const MENU = [["Home", "/"], ["Can Biokinetics Help Me?", "/can-biokinetics-help-me"], ["What We Treat", "/#conditions"], ["Medical Aid", "/medical-aid"], ["Testimonials", "/#stories"], ["FAQ", "/#faq"], ["Blog", "/blog"]];
const CONTACT = [["phone", "068 610 4880", WA], ["message-circle", "WhatsApp us", WA], ["mail", "esti.healthplus@gmail.com", GMAIL], ["calendar", "Book Your Assessment", BOOK]];

export default function SiteFooter() {
  return (
    <footer style={{ background: "#fff", color: "var(--charcoal)", borderTop: "1px solid var(--line)", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "48px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <a href="/" aria-label="Esti Smit Biokinetics — home" style={{ alignSelf: "flex-start", display: "inline-flex" }}><img src="/assets/logo-img.png" alt="Esti Smit Biokineticist" width="133" height="48" style={{ height: 52, width: "auto", display: "block" }} /></a>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.6, color: "var(--muted)" }}>HPCSA-registered biokineticists helping you move beyond pain, recover stronger and stay active.</p>
          <address style={{ fontStyle: "normal" }}>
            <a href={MAPS} target="_blank" rel="noopener" className="esb-flink" style={{ alignItems: "flex-start", lineHeight: 1.6 }}>
              <span style={{ display: "inline-flex", paddingTop: 3 }}><Icon name="map-pin" size={16} /></span>
              <span>Winelands Medical Centre<br />1D New Eskdale Street, De Zoete Inval<br />Paarl 7646</span>
            </a>
          </address>
        </div>
        <nav aria-label="Footer">
          <p style={eyebrow}>Menu</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {MENU.map(([l, h]) => <li key={h}><a href={h} className="esb-flink">{l}</a></li>)}
          </ul>
        </nav>
        <div>
          <p style={eyebrow}>Contact</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {CONTACT.map(([i, l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" className="esb-flink"><Icon name={i} size={16} />{l}</a></li>)}
          </ul>
        </div>
        <div>
          <p style={eyebrow}>Hours</p>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
            <dt style={{ color: "var(--charcoal)" }}>Mon – Fri</dt><dd style={{ margin: 0 }}>08:00 – 16h00</dd>
            <dt style={{ color: "var(--charcoal)" }}>Saturdays</dt><dd style={{ margin: 0 }}>Closed</dd>
            <dt style={{ color: "var(--charcoal)" }}>Sundays</dt><dd style={{ margin: 0 }}>Closed</dd>
          </dl>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "56px auto 0", padding: "24px 24px 0", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: 12, color: "var(--muted)" }}>
        <span>© 2026 Esti Smit Biokinetics. Registered Biokineticist, HPCSA. All rights reserved.</span>
        <span>Biokineticist in Paarl, Western Cape</span>
      </div>
    </footer>
  );
}
