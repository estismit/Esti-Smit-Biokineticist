import PageShell from "../components/PageShell";
import JsonLd from "../components/JsonLd";
import Conditions from "../components/Conditions";
import { BandSection, PhotoSection, SectionHeading, IconChip, TestimonialCard, FaqAccordion, InfoCard, Button, Icon } from "../components/ui";
import { REGIONS, ROOT_STEPS, TESTIMONIALS, FAQS, SCHEMA } from "../content/home";
import { BOOK, WA, GMAIL, MAPS } from "../content/site";

export const metadata = {
  title: "Biokineticist in Paarl | Esti Smit Biokinetics",
  description: "HPCSA-registered biokineticists in Paarl. Personalised exercise therapy for back pain, injury and post-op rehab. Medical aid friendly. Book your assessment.",
  alternates: { canonical: "/" },
  openGraph: { title: "Biokineticist in Paarl | Esti Smit Biokinetics", description: "Move beyond pain. Personalised biokinetics programmes for pain, injury, surgery recovery and healthy ageing at Winelands Medical Centre, Paarl.", url: "https://www.estismitbio.com/" },
  twitter: { title: "Biokineticist in Paarl | Esti Smit Biokinetics", description: "Personalised biokinetics programmes in Paarl. Book your assessment or send us a WhatsApp." },
};

const h2 = { fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 3.6vw, 44px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "var(--tracking-display)", color: "#fff", maxWidth: 720, margin: "0 auto 40px", textWrap: "balance" };

export default function Home() {
  return (
    <PageShell current="/">
      <JsonLd data={SCHEMA} />
      <link rel="preload" as="image" href="/assets/hero-img.jpg" fetchPriority="high" />

      <PhotoSection image="/assets/hero-img.jpg" imageAlt="Esti Smit, biokineticist in Paarl, assessing a client's leg strength at Winelands Medical Centre" scrim="hero">
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "clamp(96px, 12vw, 160px) 24px clamp(112px, 13vw, 176px)", textAlign: "center" }}>
          <h1 data-reveal="" data-reveal-delay="0" style={{ margin: "0 0 24px", fontFamily: "var(--font-body)", textTransform: "uppercase", fontSize: 16, fontWeight: 800, letterSpacing: "var(--tracking-eyebrow)", color: "var(--orange)", lineHeight: 1.5, textShadow: "var(--text-shadow-on-photo)" }}>Biokineticist in Paarl</h1>
          <p data-reveal="" data-reveal-delay="120" style={{ color: "#fff", fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.01em", margin: "0 0 28px", textWrap: "balance" }}>Still in Pain?<br />Let's Find What's Really Causing It.</p>
          <p data-reveal="" data-reveal-delay="240" style={{ color: "rgba(255,255,255,.85)", fontSize: 18, lineHeight: 1.625, maxWidth: 672, margin: "0 auto 40px", textWrap: "pretty" }}>Registered biokineticists at Winelands Medical Centre, Paarl. We help with back pain, neck pain, sports injuries and rehab after surgery by finding the root cause, not just treating where it hurts.</p>
          <div data-reveal="" data-reveal-delay="360" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <Button variant="primary" href={BOOK} iconRight="arrow-right">Book Your Assessment</Button>
            <Button variant="whatsapp" href={WA} iconLeft="message-circle">WhatsApp Us</Button>
          </div>
          <p data-reveal="" data-reveal-delay="480" style={{ margin: "20px 0 0", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.8)", textShadow: "var(--text-shadow-on-photo)" }}>No referral needed · Medical aid friendly · Free phone call to see if we can help</p>
        </div>
      </PhotoSection>

      <section aria-label="Why patients trust us" style={{ background: "var(--blue)", overflow: "hidden", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="esb-marquee-track" style={{ display: "flex", width: "max-content", animation: "esb-marquee 90s linear infinite" }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} aria-hidden={i === 0 ? "false" : "true"} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 28, flexShrink: 0, fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap" }}>
              <span aria-label="5 star Google reviews" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span aria-hidden="true" data-stars="5" style={{ display: "inline-flex", gap: 2, color: "var(--orange)" }}>
                  {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" size={15} color="var(--orange)" />)}
                </span>
                Google reviews
              </span>
              <span aria-hidden="true" style={{ color: "var(--orange-light)" }}>·</span><span>500+ clients helped</span>
              <span aria-hidden="true" style={{ color: "var(--orange-light)" }}>·</span><span>HPCSA registered</span>
              <span aria-hidden="true" style={{ color: "var(--orange-light)" }}>·</span>
            </div>
          ))}
        </div>
      </section>

      <BandSection id="root-cause" tone="white" width={1152} paddingY={128}>
        <div data-reveal="" style={{ marginBottom: 64 }}>
          <SectionHeading eyebrow="Why the pain keeps coming back" eyebrowTone="warmInk" title="You've Rested It, Stretched It and Had It Massaged. So Why Does It Still Hurt?" subtitle="Often, the place that hurts isn't the real problem. After an injury, surgery or years of pain, some muscles stop working properly. Other muscles and joints take over the extra work, and that's where the back, knee, neck or shoulder pain starts. Treating only the sore spot brings short relief, and then it comes back." maxWidth={768} />
        </div>
        <ol style={{ listStyle: "none", margin: "0 0 56px", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
          {ROOT_STEPS.map((s, i) => (
            <li key={s.n} data-reveal="" className="esb-lift" style={{ display: "flex", flexDirection: "column", gap: 16, background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius-card-lg)", padding: "36px 30px" }}>
              <span data-reveal="" data-reveal-type="pop" data-reveal-delay={String(350 + i * 220)} style={{ display: "inline-flex", alignSelf: "flex-start" }}><IconChip variant={s.accent} size={56}><span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600 }}>{s.n}</span></IconChip></span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 500, letterSpacing: "var(--tracking-display)", lineHeight: 1.25, margin: 0, color: "var(--charcoal)" }}>{s.title}</h3>
              <p style={{ fontSize: 16, fontWeight: 600, lineHeight: "var(--leading-body)", color: "var(--muted)", margin: 0 }}>{s.text}</p>
            </li>
          ))}
        </ol>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" href={BOOK} iconRight="arrow-right">Find Out What's Causing Your Pain</Button>
        </div>
      </BandSection>

      <Conditions regions={REGIONS} />

      <BandSection id="stories" tone="grey" width={1280} paddingY={128}>
        <div data-reveal="" style={{ marginBottom: 64 }}>
          <SectionHeading eyebrow="Real results" eyebrowTone="warmInk" title="Success Stories" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <article key={t.name} data-reveal="" style={{ height: "100%" }}><TestimonialCard {...t} /></article>
          ))}
        </div>
      </BandSection>

      <PhotoSection image="/assets/faq-bg.jpg" imageAlt="Biokineticist guiding a client through a single-leg balance exercise on a balance trainer in Paarl" scrim="hero">
        <div id="faq" style={{ maxWidth: 1024, margin: "0 auto", padding: "128px 24px", scrollMarginTop: 84 }}>
          <div data-reveal="" style={{ marginBottom: 56 }}>
            <SectionHeading eyebrow="Questions" eyebrowTone="warm" onDark onPhoto title="Frequently Asked Questions" />
          </div>
          <div style={{ background: "rgba(255,255,255,.72)", backdropFilter: "blur(4px)", borderRadius: "var(--radius-card-lg)", padding: "12px 32px" }}>
            <FaqAccordion items={FAQS} defaultOpen={0} />
          </div>
        </div>
      </PhotoSection>

      <BandSection id="book" tone="blue" grain width={768} paddingY={128}>
        <div data-reveal="" style={{ textAlign: "center" }}>
          <h2 style={h2}>Pain doesn't have to become your normal. Let's find the cause and build a personalised plan that gets you moving confidently again.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <Button variant="white" href={BOOK} iconRight="arrow-right">Book Your Assessment</Button>
            <Button variant="ghostWhite" href={WA} iconLeft="message-circle">Send Us a WhatsApp</Button>
          </div>
        </div>
      </BandSection>

      <BandSection id="contact" tone="white" width={1024} paddingY={128}>
        <div data-reveal="" style={{ marginBottom: 56 }}>
          <SectionHeading eyebrow="Get in touch" eyebrowTone="cool" title="Come See Us, or Send a Message" />
        </div>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
          <InfoCard icon="map-pin" title="Visit the practice">
            <address style={{ fontStyle: "normal" }}><a href={MAPS} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>Winelands Medical Centre<br />1D New Eskdale Street, De Zoete Inval<br />Southern Paarl</a></address>
          </InfoCard>
          <InfoCard icon="phone" title="Call or WhatsApp">
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>068 610 4880</a><br />
            <span style={{ fontSize: 12 }}>Emergencies (personal): <a href="https://wa.me/27729761332" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>072 976 1332</a></span>
          </InfoCard>
          <InfoCard icon="mail" title="Email" style={{ gridColumn: "1 / -1" }}>
            <a href={GMAIL} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>esti.healthplus@gmail.com</a>
          </InfoCard>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginTop: 40 }}>
          <Button variant="whatsapp" href={WA} iconLeft="message-circle">Send Us a WhatsApp</Button>
          <Button variant="primary" href={BOOK} iconRight="arrow-right">Book Your Assessment</Button>
        </div>
      </BandSection>
    </PageShell>
  );
}
