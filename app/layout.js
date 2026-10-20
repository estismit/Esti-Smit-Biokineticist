import Script from "next/script";
import "./globals.css";
import FacebookPixelPageView from "./FacebookPixelPageView";
import HashJump from "../components/HashJump";

export const metadata = {
  metadataBase: new URL("https://www.estismitbio.co.za"),
  title: "Biokineticist in Paarl | Esti Smit Biokinetics",
  description: "HPCSA-registered biokineticists in Paarl. Personalised exercise therapy for back pain, injury and post-op rehab. Medical aid friendly. Book your assessment.",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  verification: { google: "9O6ea6Q1EkXZLtZ7kY_iqeuM_VYhLSfhIjRayY_Q7dQ" },
  themeColor: "#e58749",
  manifest: "/site.webmanifest",
  icons: { icon: [{ url: "/icons/favicon-32.png", sizes: "32x32" }, { url: "/icons/favicon-192.png", sizes: "192x192" }], apple: "/icons/favicon-180.png" },
  openGraph: { type: "website", locale: "en_ZA", siteName: "Esti Smit Biokinetics", images: [{ url: "/og-image.jpg", alt: "Esti Smit, biokineticist in Paarl, assessing a client's leg strength at Winelands Medical Centre" }] },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  other: { "geo.region": "ZA-WC", "geo.placename": "Paarl" },
};

const META_PIXEL_ID = "693037046028404";

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body>
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <FacebookPixelPageView />
        <Script src="/js/analytics.js" strategy="afterInteractive" />
        <Script src="/js/reveal.js" strategy="afterInteractive" />
        <Script src="/js/fitness-bg.js" strategy="afterInteractive" />
        <HashJump />
        {children}
      </body>
    </html>
  );
}
