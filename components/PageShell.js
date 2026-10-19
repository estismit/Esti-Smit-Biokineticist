import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ current, children }) {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--charcoal)", background: "#fff" }}>
      <SiteHeader current={current} />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
