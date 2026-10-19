import PageShell from "../../components/PageShell";
import JsonLd from "../../components/JsonLd";
import BlogImage from "../../components/BlogImage";
import { BandSection, PhotoSection, Icon } from "../../components/ui";
import { POSTS } from "../../content/posts";
import { SITE } from "../../content/site";

export const metadata = {
  title: "Blog | Esti Smit Biokinetics, Paarl",
  description: "Articles from Esti Smit Biokinetics in Paarl on pain, injury recovery, exercise and staying active.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Esti Smit Biokinetics, Paarl", url: SITE + "blog" },
};

const URL_ = SITE + "blog";
const SCHEMA = { "@context": "https://schema.org", "@graph": [
  { "@type": "Blog", "@id": URL_ + "#blog", url: URL_, name: "Esti Smit Biokinetics Blog", inLanguage: "en-ZA", publisher: { "@id": SITE + "#practice" },
    blogPost: POSTS.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: SITE + "blog/" + p.slug, datePublished: p.date, author: { "@type": "Person", name: p.author } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Blog", item: URL_ }] },
] };

const pillS = { display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "var(--orange-tint)", color: "var(--orange-dark)", fontSize: 13, fontWeight: 800, letterSpacing: ".04em" };
const titleS = { fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.01em", margin: 0, textWrap: "balance", color: "var(--charcoal)" };
const exS = { margin: 0, fontWeight: 600, lineHeight: 1.7, color: "var(--ink)", textWrap: "pretty" };

export default function Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <PageShell current="/blog">
      <JsonLd data={SCHEMA} />
      <PhotoSection image="/assets/team-duo.jpg" imageAlt="The Esti Smit Biokinetics team at their practice in Paarl" scrim="hero">
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "clamp(80px, 9vw, 120px) 24px", textAlign: "center" }}>
          <h1 data-reveal="" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.01em", color: "#fff", margin: 0, textShadow: "var(--text-shadow-on-photo)" }}>Blogs</h1>
        </div>
      </PhotoSection>
      <BandSection id="posts" tone="white" width={1152} paddingY={96}>
        {featured && (
          <a href={"/blog/" + featured.slug} data-reveal="" className="esb-blogcard" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 40, alignItems: "center", textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius-card-lg)", padding: 24 }}>
            <div><BlogImage post={featured} ratio="4 / 3" /></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, padding: "8px 16px 8px 0" }}>
              <span style={pillS}>{featured.category}</span>
              <h2 style={{ ...titleS, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15 }}>{featured.title}</h2>
              <p style={{ ...exS, fontSize: 17 }}>{featured.excerpt}</p>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>{featured.dateLabel} · {featured.readMins} min read</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 800, color: "var(--orange-dark)" }}>Read the post <Icon name="arrow-right" size={18} strokeWidth={2} /></span>
            </div>
          </a>
        )}
        {rest.length > 0 && (
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 28 }}>
            {rest.map((p) => (
              <a key={p.slug} href={"/blog/" + p.slug} data-reveal="" className="esb-blogcard" style={{ display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius-card-lg)", padding: "20px 20px 28px" }}>
                <BlogImage post={p} ratio="16 / 10" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, padding: "4px 8px 0" }}>
                  <span style={pillS}>{p.category}</span>
                  <h2 style={{ ...titleS, fontSize: 24, lineHeight: 1.25 }}>{p.title}</h2>
                  <p style={{ ...exS, fontSize: 16 }}>{p.excerpt}</p>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>{p.dateLabel} · {p.readMins} min read</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </BandSection>
    </PageShell>
  );
}
