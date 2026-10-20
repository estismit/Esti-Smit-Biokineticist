const SITE = "https://www.estismitbio.co.za";
const paths = [
  ["", 1.0, "monthly"],
  ["/can-biokinetics-help-me", 0.9, "monthly"],
  ["/medical-aid", 0.8, "monthly"],
  ["/blog", 0.7, "weekly"],
  ["/ai-info", 0.4, "yearly"],
  ["/blog/knee-pain-paarl-keeps-coming-back", 0.7, "yearly"],
  ["/blog/lower-back-pain-paarl-not-just-getting-older", 0.7, "yearly"],
  ["/blog/sports-injury-red-flags-paarl-parents", 0.7, "yearly"],
  ["/blog/what-does-a-biokineticist-do-paarl", 0.7, "yearly"],
];

export default function sitemap() {
  return paths.map(([p, priority, changeFrequency]) => ({
    url: SITE + p,
    lastModified: new Date("2026-10-19"),
    changeFrequency,
    priority,
  }));
}
