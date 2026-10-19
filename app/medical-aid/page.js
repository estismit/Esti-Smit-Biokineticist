import PageShell from "../../components/PageShell";
import JsonLd from "../../components/JsonLd";
import { BandSection, PhotoSection, Eyebrow, Button, Icon } from "../../components/ui";
import { BOOK, SITE, waText } from "../../content/site";

const URL_ = SITE + "medical-aid";
export const metadata = {
  title: "Medical Aid & Wellness Rewards | Biokineticist in Paarl",
  description: "Use your medical aid for biokinetics in Paarl. Vitality Health Checks and Fitness Assessments, Momentum Multiply assessments and Medscheme weight management support.",
  alternates: { canonical: "/medical-aid" },
  openGraph: { title: "Medical Aid & Wellness Rewards | Biokineticist in Paarl", url: URL_ },
};

const SCHEMA = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": URL_ + "#webpage", url: URL_, name: "Medical Aid & Wellness Rewards | Biokineticist in Paarl", description: "Use your medical aid for biokinetics in Paarl. Vitality Health Checks and Fitness Assessments, Momentum Multiply assessments and Medscheme weight management support.", inLanguage: "en-ZA", isPartOf: { "@id": SITE + "#website" }, about: { "@id": SITE + "#practice" }, breadcrumb: { "@id": URL_ + "#breadcrumb" } },
  { "@type": "BreadcrumbList", "@id": URL_ + "#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Medical Aid", item: URL_ }] },
] };

const SCHEMES = ["Discovery Health", "Momentum Medical Scheme", "Bonitas", "Medihelp", "Bestmed", "Fedhealth", "Polmed", "GEMS", "Profmed", "AECI Medical Aid Society", "SAMWUMED"];
const P = { margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.65, color: "var(--ink)", textWrap: "pretty" };
const STRONG = { color: "var(--charcoal)", fontWeight: 800 };
const H2 = { fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.01em", margin: 0, textWrap: "balance", color: "var(--charcoal)" };
const H3 = { fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0, textWrap: "balance", color: "var(--charcoal)" };
const disc = (light) => ({ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 999, background: light ? "rgba(255,255,255,.14)" : "var(--orange)", border: light ? "1px solid rgba(255,255,255,.35)" : 0, color: "#fff", fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500 });
const card = { background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius-card-lg)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 16 };
const badge = { display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "var(--orange-tint)", color: "var(--orange-dark)", fontSize: 14, fontWeight: 800 };
const panel = (bg, border) => ({ marginTop: 28, background: bg, border: border ? "1px solid var(--line)" : 0, borderRadius: 32, padding: "clamp(32px, 4vw, 48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "24px 48px", alignItems: "center" });
const pill = { display: "inline-flex", padding: "10px 18px", borderRadius: 999, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.35)", fontSize: 15, fontWeight: 700, color: "#fff" };

function Head({ n, title, sub, light, subColor }) {
  return (
    <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18, marginBottom: 40 }}>
      <span style={disc(light)}>{n}</span>
      <h2 style={{ ...H2, color: light ? "#fff" : "var(--charcoal)" }}>{title}</h2>
      {sub && <h3 style={{ ...H3, color: light ? "#fff" : "var(--orange-dark)" }}>{sub}</h3>}
    </div>
  );
}

export default function MedicalAid() {
  return (
    <PageShell current="/medical-aid">
      <JsonLd data={SCHEMA} />
      <PhotoSection image="/assets/method-img.jpg" imageAlt="Biokineticist at Esti Smit Biokinetics in Paarl guiding a client through a fitness assessment" scrim="hero">
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "clamp(96px, 11vw, 144px) 24px", textAlign: "center" }}>
          <Eyebrow tone="warm" size="base" onPhoto>Medical Aid &amp; Wellness Rewards</Eyebrow>
          <h1 data-reveal="" data-reveal-delay="120" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.01em", color: "#fff", margin: "20px 0 24px", textWrap: "balance", textShadow: "var(--text-shadow-on-photo)" }}>Make the Most of Your Medical Aid Benefits</h1>
          <div data-reveal="" data-reveal-delay="240" style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720, margin: "0 auto" }}>
            <p style={{ margin: 0, fontSize: "var(--text-lead)", fontWeight: 600, lineHeight: "var(--leading-body)", color: "#fff", textWrap: "pretty", textShadow: "var(--text-shadow-on-photo)" }}>Did you know your medical aid could help you move better, get stronger and even reward you for taking care of your health?</p>
            <p style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.65, color: "#fff", textWrap: "pretty", textShadow: "var(--text-shadow-on-photo)" }}>We work with most South African medical aids and selected wellness, fitness and weight management programmes.</p>
          </div>
        </div>
      </PhotoSection>

      <BandSection id="medical-aids" tone="white" width={1152} paddingY={96}>
        <div style={{ scrollMarginTop: 84 }}>
          <Head n="1" title="Medical Aids We Work With" />
          <p data-reveal="" style={{ ...P, marginBottom: 24 }}>We work with most major South African medical aids, including:</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 14 }}>
            {SCHEMES.map((s, i) => (
              <li key={s} data-reveal="" data-reveal-delay={String(Math.min(i, 8) * 60)} style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--grey-bg)", borderRadius: 18, padding: "18px 20px", fontSize: 16, fontWeight: 700, color: "var(--charcoal)" }}>
                <span style={{ display: "inline-flex", color: "var(--blue)" }}><Icon name="check-circle-2" size={20} strokeWidth={1.8} /></span>{s}
              </li>
            ))}
            <li data-reveal="" data-reveal-delay="480" style={{ display: "flex", alignItems: "center", border: "1px dashed var(--line)", borderRadius: 18, padding: "18px 20px", fontSize: 16, fontWeight: 700, color: "var(--muted)" }}>And many more!</li>
          </ul>
          <div data-reveal="" style={{ marginTop: 56, background: "var(--grey-bg)", borderRadius: 32, padding: "clamp(32px, 4vw, 56px)", display: "flex", flexDirection: "column", gap: 16, maxWidth: 896 }}>
            <h3 style={H3}>Does Medical Aid Cover Biokinetics?</h3>
            <p style={{ ...P, ...STRONG }}>In most cases, Biokinetics sessions are paid from your medical savings account.</p>
            <p style={P}>However, certain medical aid schemes and benefit options provide additional cover for Biokinetics, rehabilitation or specific health management programmes.</p>
            <p style={P}>Coverage depends on your medical aid, your specific plan and your available benefits.</p>
            <p style={P}><strong style={STRONG}>Not sure what your medical aid covers?</strong> <a href={waText("Hi! I'd like help understanding what my medical aid covers for biokinetics.")} target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange-dark)", fontWeight: 800 }}>Get in touch with us</a> and we'll help you understand which benefits to enquire about.</p>
          </div>
        </div>
      </BandSection>

      <BandSection id="vitality" tone="grey" width={1152} paddingY={96}>
        <div style={{ scrollMarginTop: 84 }}>
          <Head n="2" title="Discovery Vitality" sub="Get Rewarded for Looking After Your Health" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 24 }}>
            <article data-reveal="" style={card}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}><h4 style={H3}>Vitality Health Check</h4><span style={badge}>Up to 22,500 Vitality points</span></div>
              <p style={P}>Complete your annual Vitality Health Check to assess important health indicators and earn points towards your Vitality status.</p>
              <p style={P}>Eligible members receive one funded Vitality Health Check per year.</p>
              <div style={{ marginTop: "auto", paddingTop: 8, display: "flex" }}><Button variant="primary" href={waText("Hi! I'd like to book a Discovery Vitality health check.")} iconRight="arrow-right">Book Now</Button></div>
            </article>
            <article data-reveal="" style={card}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}><h4 style={H3}>Vitality Fitness Assessment</h4><span style={badge}>R580</span></div>
              <p style={P}>Discover your current fitness level through a professional assessment with a registered Biokineticist.</p>
              <p style={P}>Earn up to <strong style={STRONG}>10,000 additional Vitality points</strong>, depending on your results and the applicable Vitality rules.</p>
              <div style={{ marginTop: "auto", paddingTop: 8, display: "flex" }}><Button variant="primary" href={waText("Hi! I'd like to book a Discovery Vitality fitness assessment.")} iconRight="arrow-right">Book Now</Button></div>
            </article>
          </div>
          <div data-reveal="" style={panel("#fff", true)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h4 style={H3}>Why Not Do Both at Once?</h4>
              <p style={P}>Book your Vitality Health Check and Fitness Assessment together and get both done in one convenient visit.</p>
              <p style={{ ...P, ...STRONG }}>One appointment. Two assessments. More opportunities to earn Vitality points.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}><Button variant="primary" href={BOOK} iconRight="arrow-right">Book My Vitality Assessments</Button></div>
          </div>
        </div>
      </BandSection>

      <BandSection id="multiply" tone="white" width={1152} paddingY={96}>
        <div style={{ scrollMarginTop: 84 }}>
          <Head n="3" title="Momentum Multiply" sub="Your Healthier Lifestyle Deserves Rewards" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 24 }}>
            <article data-reveal="" style={card}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}><h4 style={H3}>Multiply Health Assessment</h4></div>
              <p style={P}>Complete your annual health assessment and take advantage of the health benefits available through your Momentum Multiply membership.</p>
              <p style={P}>Eligible members can receive one funded health assessment per year.</p>
              <div style={{ marginTop: "auto", paddingTop: 8, display: "flex" }}><Button variant="primary" href={waText("Hi! I'd like to book a Momentum Multiply health assessment.")} iconRight="arrow-right">Book Now</Button></div>
            </article>
            <article data-reveal="" style={card}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}><h4 style={H3}>Multiply Fitness Assessment</h4><span style={badge}>R480</span></div>
              <p style={P}>Understand your fitness level, identify areas for improvement and work towards your Multiply fitness rewards.</p>
              <div style={{ marginTop: "auto", paddingTop: 8, display: "flex" }}><Button variant="primary" href={waText("Hi! I'd like to book a Momentum Multiply fitness assessment.")} iconRight="arrow-right">Book Now</Button></div>
            </article>
          </div>
          <div data-reveal="" style={panel("var(--grey-bg)", false)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h4 style={H3}>Get Both Assessments Done Together</h4>
              <p style={P}>Save yourself an extra trip by booking your health and fitness assessments during the same visit.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}><Button variant="primary" href={BOOK} iconRight="arrow-right">Book My Multiply Assessments</Button></div>
          </div>
        </div>
      </BandSection>

      <BandSection id="weight-management" tone="blue" grain width={1024} paddingY={112}>
        <div style={{ scrollMarginTop: 84, color: "#fff" }}>
          <Head n="4" light title="Medscheme Weight Management Programme" sub="More Than Weight Loss. A Healthier, Stronger You." />
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 768 }}>
            <p style={{ ...P, color: "#fff" }}>Some medical aid schemes administered by Medscheme offer structured weight management programmes to qualifying members.</p>
            <p style={{ ...P, color: "#fff" }}>These may include members of:</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Polmed", "Fedhealth", "AECI Medical Aid Society", "SAMWUMED", "Other participating schemes"].map((s) => <li key={s} style={pill}>{s}</li>)}
            </ul>
            <p style={{ ...P, color: "#fff", marginTop: 8 }}>At Esti Smit Biokinetics, we focus on helping you improve your strength, fitness, mobility and long-term physical health.</p>
            <p style={{ ...P, color: "#fff" }}>Our Biokinetics approach supports sustainable progress through safe, structured and personalised exercise.</p>
            <p style={{ ...P, color: "#fff", fontWeight: 800 }}>Your medical aid may provide dedicated benefits for weight management, subject to your eligibility and programme requirements.</p>
            <div style={{ display: "flex", marginTop: 12 }}><Button variant="primary" href={waText("Hi! I'd like to enquire about the Medscheme weight management programme.")} iconRight="arrow-right">Enquire About Weight Management</Button></div>
          </div>
        </div>
      </BandSection>

      <BandSection id="not-sure" tone="grey" width={768} paddingY={112}>
        <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
          <span style={disc(false)}>5</span>
          <h2 style={H2}>Not Sure What You're Covered For?</h2>
          <p style={P}>Every medical aid and benefit option is different.</p>
          <p style={P}>Whether you're looking for rehabilitation, weight management support, a Vitality Health Check or a fitness assessment, our team is happy to help you find the right starting point.</p>
          <p style={{ ...P, ...STRONG }}>Let's get you moving towards better health.</p>
          <div style={{ display: "flex", marginTop: 8 }}><Button variant="whatsapp" href={waText("Hi! I'd like to find out what my medical aid covers.")} iconLeft="message-circle">WhatsApp Our Team</Button></div>
        </div>
      </BandSection>
    </PageShell>
  );
}
