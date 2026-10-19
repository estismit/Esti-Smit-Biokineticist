"use client";
import { useEffect } from "react";
export default function HashJump() {
  useEffect(() => {
    if (!location.hash) return;
    const jump = () => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 84); };
    const ids = [0, 150, 500, 1200].map((d) => setTimeout(jump, d));
    return () => ids.forEach(clearTimeout);
  }, []);
  return null;
}
