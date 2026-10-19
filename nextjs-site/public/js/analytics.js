(function () {
  var ID = "G-Y3P3KNPKCX";
  if (window.__esbGtag) return;
  window.__esbGtag = true;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", ID);

  // Conversion events: booking and WhatsApp clicks
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var label = (a.textContent || "").trim().slice(0, 80);
    if (href.indexOf("mygc.co.za") > -1) window.gtag("event", "book_assessment_click", { link_text: label, page_path: location.pathname });
    else if (href.indexOf("wa.me") > -1) window.gtag("event", "whatsapp_click", { link_text: label, page_path: location.pathname });
    else if (href.indexOf("tel:") === 0) window.gtag("event", "phone_click", { link_text: label, page_path: location.pathname });
    else if (href.indexOf("mailto:") === 0) window.gtag("event", "email_click", { link_text: label, page_path: location.pathname });
  }, true);
})();
