"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PixelRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Skip the very first render: the base pixel script in layout.js
    // already fires the initial PageView for this load.
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

function PixelClickTracker() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target && e.target.closest ? e.target.closest("a") : null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (typeof window.fbq !== "function") return;

      if (href.includes("mygc.co.za")) {
        window.fbq("track", "Lead", { content_name: "Booking click" });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        window.fbq("track", "Contact", { method: "whatsapp" });
      } else if (href.startsWith("tel:")) {
        window.fbq("track", "Contact", { method: "phone" });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

export default function FacebookPixelPageView() {
  return (
    <>
      <Suspense fallback={null}>
        <PixelRouteTracker />
      </Suspense>
      <PixelClickTracker />
    </>
  );
}
