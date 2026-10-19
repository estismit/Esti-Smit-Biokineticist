import PageShell from "../../components/PageShell";
import JsonLd from "../../components/JsonLd";
import ChatAssessment from "../../components/ChatAssessment";
import { BandSection, PhotoSection, Eyebrow } from "../../components/ui";
import { SCHEMA } from "../../content/help";

export const metadata = {
  title: "Can Biokinetics Help Me? | Biokineticist in Paarl",
  description: "Answer a few quick questions to find out if biokinetics can help with your pain, injury, surgery recovery or health goals. Biokineticists in Paarl.",
  alternates: { canonical: "/can-biokinetics-help-me" },
  openGraph: { title: "Can Biokinetics Help Me? | Biokineticist in Paarl", url: "https://www.estismitbio.co.za/can-biokinetics-help-me" },
};

export default function Page() {
  return (
    <PageShell current="/can-biokinetics-help-me">
      <JsonLd data={SCHEMA} />
      <PhotoSection image="/assets/help-hero.jpg" imageAlt="Biokineticist at Esti Smit Biokinetics in Paarl guiding a client through a hamstring and hip exercise" scrim="hero">
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "clamp(96px, 11vw, 144px) 24px", textAlign: "center" }}>
          <Eyebrow tone="warm" size="base" onPhoto>Find out how we can help you</Eyebrow>
          <h1 data-reveal="" data-reveal-delay="120" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.01em", color: "#fff", margin: "20px 0 24px", textWrap: "balance", textShadow: "var(--text-shadow-on-photo)" }}>Is Biokinetics right for you?</h1>
          <p data-reveal="" data-reveal-delay="240" style={{ fontSize: "var(--text-lead)", fontWeight: 600, lineHeight: "var(--leading-body)", color: "#fff", maxWidth: 672, margin: "0 auto", textWrap: "pretty", textShadow: "var(--text-shadow-on-photo)" }}>If pain, an injury or a health condition is stopping you from moving the way you want to, biokinetics may be the next step. Answer a few quick questions below to find out.</p>
        </div>
      </PhotoSection>
      <BandSection id="assessment" tone="white" width={768} paddingY={96}>
        <ChatAssessment />
      </BandSection>
    </PageShell>
  );
}
