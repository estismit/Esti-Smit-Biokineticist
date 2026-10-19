import { notFound } from "next/navigation";
import PageShell from "./PageShell";
import JsonLd from "./JsonLd";
import BlogImage from "./BlogImage";
import { BandSection, PhotoPlaceholder, Button, Icon } from "./ui";
import { POSTS } from "../content/posts";
import { md } from "../content/md";
import { BOOK, SITE, waText } from "../content/site";

export function metadataFor(slug) {
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  const url = SITE + "blog/" + p.slug;
  return {
    title: p.titleTag || p.title,
    description: p.metaDescription || p.excerpt,
    keywords: p.keywords,
    alternates: { canonical: "/blog/" + p.slug },
    openGraph: { type: "article", title: p.title, description: p.metaDescription || p.excerpt, url, publishedTime: p.date, images: p.image ? [{ url: p.image, alt: p.imageAlt }] : undefined },
    twitter: { title: p.title, description: p.metaDescription || p.excerpt },
  };
}

const P = { margin: 0, fontSize: 18, fontWeight: 600, lineHeight: 1.7, color: "var(--ink)", textWrap: "pretty" };
const STRONG = { fontWeight: 800, color: "var(--charcoal)" };
const HEAD = { fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.01em", margin: 0, textWrap: "balance", color: "var(--charcoal)" };

function Inline({ text, strongStyle = STRONG }) {
  return md(text).map((s, i) => s.b ? <strong key={i} style={strongStyle}>{s.t}</strong> : s.i ? <em key={i}>{s.t}</em> : <span key={i}>{s.t}</span>);
}

export default function Post({ slug }) {
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const url = SITE + "blog/" + p.slug;
  const faq = p.body.filter((b) => b.faq).flatMap((b) => b.faq);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", "@id": url + "#post", headline: p.title, description: p.metaDescription, url, mainEntityOfPage: url, datePublished: p.date, dateModified: p.date, inLanguage: "en-ZA", keywords: (p.keywords || []).join(", "), image: p.image ? SITE + p.image.replace(/^\//, "") : undefined,
      author: { "@type": "Person", name: p.author, jobTitle: "Biokineticist" }, publisher: { "@id": SITE + "#practice" }, isPartOf: { "@id": SITE + "blog#blog" } },
    ...(faq.length ? [{ "@type": "FAQPage", "@id": url + "#faq", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n\n/g, " ") } })) }] : []),
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "blog" },
      { "@type": "ListItem", position: 3, name: p.title, item: url } ] },
  ] };
  let n = 0;
  const cta = p.cta || { title: "", paras: [] };
  return (
    <PageShell current="/blog">
      <JsonLd data={schema} />
      <article itemScope itemType="https://schema.org/BlogPosting">
        <BandSection tone="white" width={896} paddingY={72}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: "var(--orange-dark)", textDecoration: "none", marginBottom: 32 }}><Icon name="arrow-left" size={18} strokeWidth={2} />All blogs</a>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
            <span style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "var(--orange-tint)", color: "var(--orange-dark)", fontSize: 13, fontWeight: 800, letterSpacing: ".04em" }}>{p.category}</span>
            <h1 itemProp="headline" style={{ ...HEAD, fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.08 }}>{p.title}</h1>
            {p.dek && <p style={{ ...P, fontSize: 20, color: "var(--muted)" }}>{p.dek}</p>}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
              <img src="/icons/favicon-192.png" alt="" width="44" height="44" style={{ width: 44, height: 44, borderRadius: "50%", display: "block" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span itemProp="author" style={{ fontSize: 15, fontWeight: 800, color: "var(--charcoal)" }}>{p.author}, Biokineticist</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}><time itemProp="datePublished" dateTime={p.date}>{p.dateLabel}</time> · {p.readMins} min read</span>
              </div>
            </div>
          </div>
          <div data-reveal="" style={{ marginTop: 40 }}><BlogImage post={p} ratio="16 / 9" /></div>
        </BandSection>

        <div itemProp="articleBody" style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 96px", display: "flex", flexDirection: "column", gap: 22 }}>
          {p.body.map((b, i) => {
            if (b.h2) return <h2 key={i} style={{ ...HEAD, fontSize: "clamp(26px, 2.6vw, 34px)", lineHeight: 1.2, marginTop: 28 }}>{b.h2}</h2>;
            if (b.h3) return <h3 key={i} style={{ ...HEAD, fontSize: 24, lineHeight: 1.3, marginTop: 12 }}>{b.h3}</h3>;
            if (b.p) return <p key={i} style={P}><Inline text={b.p} /></p>;
            if (b.strong) return <p key={i} style={{ ...P, fontSize: 20, fontWeight: 800, color: "var(--charcoal)" }}>{b.strong}</p>;
            if (b.small) return <p key={i} style={{ ...P, fontSize: 15, fontStyle: "italic", color: "var(--muted)" }}>{b.small}</p>;
            if (b.list) return (
              <ul key={i} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {b.list.map((l, j) => (
                  <li key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ display: "inline-flex", color: "var(--blue)", paddingTop: 4, flexShrink: 0 }}><Icon name="check-circle-2" size={20} strokeWidth={1.8} /></span>
                    <span style={P}>{l.lead && <strong style={STRONG}>{l.lead} </strong>}<Inline text={l.text} /></span>
                  </li>
                ))}
              </ul>
            );
            if (b.steps) return (
              <ol key={i} style={{ listStyle: "none", margin: "8px 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {b.steps.map((s) => (
                  <li key={s.lead} style={{ display: "flex", gap: 18, alignItems: "flex-start", background: "var(--grey-bg)", borderRadius: 24, padding: 24 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, background: "var(--orange)", color: "#fff", fontFamily: "var(--font-heading)", fontSize: 20, flexShrink: 0 }}>{++n}</span>
                    <span style={{ ...P, display: "flex", flexDirection: "column", gap: 4 }}><strong style={STRONG}>{s.lead}</strong><span>{s.text}</span></span>
                  </li>
                ))}
              </ol>
            );
            if (b.callout) return (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "var(--blue-tint)", borderRadius: 24, padding: "24px 26px", margin: "8px 0" }}>
                <span style={{ display: "inline-flex", color: "var(--blue-dark)", paddingTop: 3, flexShrink: 0 }}><Icon name="shield-check" size={22} strokeWidth={1.8} /></span>
                <p style={{ ...P, color: "var(--charcoal)" }}>{b.callout}</p>
              </div>
            );
            if (b.img) return <figure key={i} style={{ margin: "12px 0" }}><PhotoPlaceholder label={b.img} aspectRatio="3 / 2" radius="24px" /></figure>;
            if (b.faq) return (
              <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid var(--line)", borderRadius: 28, overflow: "hidden" }}>
                {b.faq.map((f, j) => (
                  <div key={f.q} style={{ padding: "24px 28px", borderTop: j ? "1px solid var(--line)" : 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    <h3 style={{ ...HEAD, fontSize: 22, lineHeight: 1.3 }}>{f.q}</h3>
                    {f.a.split("\n\n").map((t, k) => <p key={k} style={{ ...P, fontSize: 17 }}>{t}</p>)}
                  </div>
                ))}
              </div>
            );
            return null;
          })}
          {p.sources && p.sources.length > 0 && (
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 800, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--muted)" }}>Sources</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                {p.sources.map((s) => <li key={s} style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.55, color: "var(--muted)" }}>{s}</li>)}
              </ul>
            </div>
          )}
        </div>
      </article>

      <BandSection id="book" tone="blue" grain width={768} paddingY={112}>
        <div data-reveal="" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <h2 style={{ ...HEAD, color: "#fff", fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: 1.2 }}>{cta.title}</h2>
          {cta.paras.map((c, i) => <p key={i} style={{ ...P, color: "#fff" }}><Inline text={c} strongStyle={{ fontWeight: 800 }} /></p>)}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginTop: 16 }}>
            <Button variant="white" href={BOOK} iconRight="arrow-right">Book an Assessment</Button>
            <Button variant="ghostWhite" href={waText(cta.whatsapp || "Hi! I'd like to find out more.")} iconLeft="message-circle">Send Us a WhatsApp</Button>
          </div>
        </div>
      </BandSection>
    </PageShell>
  );
}
