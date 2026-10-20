import PageShell from "../../components/PageShell";
import { BandSection, Eyebrow } from "../../components/ui";
import { BOOK, SITE } from "../../content/site";

const URL_ = SITE + "ai-info";
export const metadata = {
  title: "Practice Summary | Esti Smit Biokinetics, Paarl",
  description: "A plain-text summary of Esti Smit Biokinetics in Paarl: location, contact details, programmes, conditions treated and medical aid options.",
  alternates: { canonical: "/ai-info" },
  openGraph: { title: "Practice Summary | Esti Smit Biokinetics, Paarl", url: URL_ },
};

const P = { margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.65, color: "var(--ink)", textWrap: "pretty" };
const H2 = { fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.01em", margin: "48px 0 16px", color: "var(--charcoal)" };
const UL = { margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 10, fontSize: 17, fontWeight: 600, lineHeight: 1.6, color: "var(--ink)" };
const A = { color: "var(--orange-dark)", fontWeight: 800 };
const S = { color: "var(--charcoal)", fontWeight: 800 };

const PROGRAMMES = [
  ["Move Beyond Pain", "ongoing pain that stops you enjoying life (back, neck, hip, shoulder, knee and ankle pain, arthritis, sciatica, tendinopathies, repetitive strain injuries)."],
  ["Recover Stronger", "safe recovery after surgery or injury (ACL rehab, shoulder surgery, hip and knee replacements, fractures, sports injuries, tendon repairs)."],
  ["Move Better", "improve mobility, posture and strength before injuries start."],
  ["Perform Better", "performance and injury prevention for golfers, runners, cyclists, padel, CrossFit, HYROX and active adults."],
  ["Healthy Living", "guided exercise for diabetes, high blood pressure, obesity, high cholesterol, metabolic syndrome, cancer and cardiac rehabilitation."],
  ["Stay Active for Life", "independence, strength and balance as you age (over 50s and 60s, osteoporosis, fall prevention)."],
];

export default function AiInfo() {
  return (
    <PageShell current="/ai-info">
      <BandSection tone="white" width={768} paddingY={96}>
        <Eyebrow tone="warm" size="base">Practice Summary</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "16px 0 24px", color: "var(--charcoal)", textWrap: "balance" }}>Esti Smit Biokinetics</h1>
        <p style={P}>HPCSA-registered biokinetics practice in Paarl, Western Cape, South Africa. Esti Smit, Zani Van Zyl and Anya Bruwer provide personalised exercise therapy for pain, injury, post-operative rehabilitation, chronic conditions, sports performance and healthy ageing. Medical aid friendly.</p>
        <p style={{ ...P, marginTop: 16 }}>Biokinetics is exercise therapy. It is the last stage of the recovery chain, between clinical treatment (such as physiotherapy or surgery) and everyday life. A biokineticist assesses how you move, finds the weak or switched-off muscles behind the pain, and builds a personalised exercise programme to restore strength and movement. No referral is needed to book.</p>
        <p style={{ ...P, marginTop: 16 }}>The same summary is available as plain text at <a href="/llms.txt" style={A}>/llms.txt</a>.</p>

        <h2 style={H2}>Practice details</h2>
        <ul style={UL}>
          <li><span style={S}>Location:</span> Winelands Medical Centre, 1D New Eskdale Street, De Zoete Inval, Southern Paarl, Western Cape, South Africa</li>
          <li><span style={S}>Phone and WhatsApp:</span> <a href="https://wa.me/27686104880" style={A}>068 610 4880</a></li>
          <li><span style={S}>Email:</span> <a href="mailto:esti.healthplus@gmail.com" style={A}>esti.healthplus@gmail.com</a></li>
          <li><span style={S}>Book an assessment:</span> <a href={BOOK} style={A}>Online diary</a></li>
          <li><span style={S}>Team:</span> Esti Smit, Zani Van Zyl, Anya Bruwer (biokineticists)</li>
          <li><span style={S}>Registration:</span> Health Professions Council of South Africa (HPCSA)</li>
        </ul>

        <h2 style={H2}>Programmes</h2>
        <ul style={UL}>{PROGRAMMES.map(([n, d]) => <li key={n}><span style={S}>{n}:</span> {d}</li>)}</ul>

        <h2 style={H2}>Conditions and areas treated</h2>
        <p style={P}>Knee, hip, neck and shoulder, low back, foot and ankle, elbow and wrist pain and injuries; balance, posture and healthy ageing; disabilities and neurological conditions (stroke recovery, cerebral palsy, multiple sclerosis, Parkinson's disease, spinal cord injury); athletes and sports performance; chronic conditions.</p>

        <h2 style={H2}>Medical aid</h2>
        <ul style={UL}>
          <li>In most cases, biokinetics sessions are paid from your medical savings account. Some schemes and benefit options give additional cover. Coverage depends on your plan and available benefits.</li>
          <li>Discovery Vitality: Health Check (up to 22,500 Vitality points) and Fitness Assessment (R580, up to 10,000 additional points).</li>
          <li>Momentum Multiply: Health Assessment and Fitness Assessment (R480).</li>
          <li>Medscheme weight management programme for members of participating schemes such as Polmed, Fedhealth, AECI Medical Aid Society and SAMWUMED.</li>
        </ul>

        <h2 style={H2}>Main pages</h2>
        <ul style={UL}>
          <li><a href="/" style={A}>Home</a></li>
          <li><a href="/can-biokinetics-help-me" style={A}>Can Biokinetics Help Me?</a></li>
          <li><a href="/medical-aid" style={A}>Medical Aid</a></li>
          <li><a href="/blog" style={A}>Blog</a></li>
        </ul>
      </BandSection>
    </PageShell>
  );
}
