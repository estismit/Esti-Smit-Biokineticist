import Script from "next/script";
import "./globals.css";
import FacebookPixelPageView from "./FacebookPixelPageView";

export const metadata = {
  title: "Esti Smit Biokinetics | Move Better, Feel Stronger, Live Well",
  description:
    "Personalised, evidence-based Biokinetics care in Paarl. Move beyond pain, recover from injury, and get back to the life you love.",
};

const META_PIXEL_ID = "693037046028404";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Meta Pixel — official base code, loads once per page load, guarded against duplicate init */}
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* Fires an additional PageView on client-side route changes (e.g. future internal links between pages) without duplicating the initial load's PageView */}
        <FacebookPixelPageView />

        {children}
      </body>
    </html>
  );
}
