(function () {
  if (window.__esbReveal) return;
  window.__esbReveal = true;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  var css = document.createElement("style");
  css.textContent =
    "html[data-anim] [data-reveal]:not([data-reveal='in']){opacity:0}" +
    "html[data-anim] [data-reveal='in']{animation:esb-rise .8s cubic-bezier(.2,.7,.2,1) backwards;animation-delay:var(--rd,0ms)}" +
    "html[data-anim] [data-reveal='in'][data-reveal-type='fade']{animation-name:esb-fade}" +
    "html[data-anim] [data-reveal='in'][data-reveal-type='zoom']{animation-name:esb-zoom}" +
    "html[data-anim] [data-reveal='in'][data-reveal-type='pop']{animation:esb-pop .7s cubic-bezier(.34,1.56,.64,1) backwards;animation-delay:var(--rd,0ms)}" +
    "html[data-anim] [data-reveal='in'][data-reveal-type='draw']{animation:esb-draw 1.4s cubic-bezier(.2,.7,.2,1) backwards;animation-delay:var(--rd,0ms)}" +
    "@keyframes esb-pop{from{opacity:0;transform:scale(.4) rotate(-12deg)}to{opacity:1;transform:none}}" +
    "@keyframes esb-draw{from{transform:scaleX(0)}to{transform:scaleX(1)}}" +
    "@keyframes esb-rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}" +
    "@keyframes esb-fade{from{opacity:0}to{opacity:1}}" +
    "@keyframes esb-zoom{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  document.documentElement.setAttribute("data-anim", "");

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var d = el.getAttribute("data-reveal-delay");
      if (d == null) {
        var sibs = Array.prototype.filter.call(el.parentElement ? el.parentElement.children : [], function (c) { return c.hasAttribute("data-reveal"); });
        var i = Math.max(0, sibs.indexOf(el));
        var cols = Math.max(1, Math.round((el.parentElement ? el.parentElement.clientWidth : 1) / Math.max(1, el.offsetWidth)));
        d = Math.min(i % cols, 4) * 95;
      }
      el.style.setProperty("--rd", d + "ms");
      el.setAttribute("data-reveal", "in");
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function scan(root) {
    (root.querySelectorAll ? root : document).querySelectorAll("[data-reveal]:not([data-reveal='in'])").forEach(function (el) {
      if (!el.__esbObs) { el.__esbObs = true; io.observe(el); }
    });
  }
  new MutationObserver(function () { scan(document); }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState !== "loading") scan(document); else document.addEventListener("DOMContentLoaded", function () { scan(document); });
  // Failsafe: never leave content hidden
  setTimeout(function () { document.querySelectorAll("[data-reveal]:not([data-reveal='in'])").forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < innerHeight) el.setAttribute("data-reveal", "in"); }); }, 2500);
})();
