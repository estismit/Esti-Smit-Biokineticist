(function () {
  const TYPES = 5;
  function mount(canvas, host, opts) {
    opts = Object.assign({ base: "#3a7dc8", alpha: 0.16, hoverAlpha: 0.32, radius: 200, img: "assets/fitness-figures-white.png", data: "assets/fitness-figures.json?v=2" }, opts || {});
    const ctx = canvas.getContext("2d");
    let data = null, img = null, inst = [], cssW = 0, cssH = 0, raf = 0, mouse = null, running = false, dead = false;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function layout() {
      const r = host.getBoundingClientRect();
      cssW = Math.ceil(r.width); cssH = Math.ceil(r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = cssW * dpr; canvas.height = cssH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      inst = [];
      if (!data) return;
      const tw = data.w, th = data.h;
      for (let ty = 0; ty * th < cssH; ty++) for (let tx = 0; tx * tw < cssW; tx++) {
        data.figs.forEach((f, i) => {
          const edge = f[0] <= 1 || f[1] <= 1 || f[0] + f[2] >= tw - 1 || f[1] + f[3] >= th - 1;
          inst.push({ sx: f[0], sy: f[1], w: f[2], h: f[3], x: tx * tw + f[0], y: ty * th + f[1], type: (i * 7) % TYPES, phase: (i * 1.7) % 6.28, speed: 7 + ((i * 13) % 6), e: 0, edge });
        });
      }
      draw(0);
    }

    function draw(t) {
      ctx.fillStyle = opts.base;
      ctx.fillRect(0, 0, cssW, cssH);
      if (!img) return;
      for (const p of inst) {
        const s = Math.sin(t * p.speed + p.phase) * p.e;
        ctx.globalAlpha = opts.alpha + (opts.hoverAlpha - opts.alpha) * p.e;
        if (p.e < 0.002) { ctx.drawImage(img, p.sx, p.sy, p.w, p.h, p.x, p.y, p.w, p.h); continue; }
        const cx = p.x + p.w / 2, by = p.y + p.h;
        ctx.save();
        ctx.translate(cx, by);
        if (p.type === 0) { ctx.translate(0, 0); ctx.scale(1 + 0.12 * Math.abs(s), 1 - 0.3 * Math.abs(s)); }
        else if (p.type === 1) { ctx.translate(0, -18 * Math.abs(s)); ctx.rotate(0.08 * s); }
        else if (p.type === 2) ctx.rotate(0.38 * s);
        else if (p.type === 3) { ctx.translate(10 * s, -6 * Math.abs(s)); ctx.scale(1, 1 + 0.16 * Math.abs(s)); }
        else { ctx.translate(0, -p.h / 2); ctx.rotate(Math.PI * 2 * ((t * 0.9 + p.phase) % 1) * p.e); ctx.scale(1 - 0.2 * Math.abs(s), 1); ctx.translate(0, p.h / 2); }
        ctx.drawImage(img, p.sx, p.sy, p.w, p.h, -p.w / 2, -p.h, p.w, p.h);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    function tick(ts) {
      if (dead) return;
      const t = ts / 1000;
      let any = false;
      for (const p of inst) {
        let target = 0;
        if (mouse && !p.edge && !reduce) {
          const dx = mouse.x - (p.x + p.w / 2), dy = mouse.y - (p.y + p.h / 2);
          if (dx * dx + dy * dy < opts.radius * opts.radius) target = 1;
        }
        p.e += (target - p.e) * 0.15;
        if (p.e < 0.002 && target === 0) p.e = 0;
        if (p.e > 0 || target) any = true;
      }
      draw(t);
      if (any || mouse) raf = requestAnimationFrame(tick); else running = false;
    }
    function start() { if (!running) { running = true; raf = requestAnimationFrame(tick); } }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      start();
    }
    function onLeave() { mouse = null; start(); }
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    const ro = new ResizeObserver(layout); ro.observe(host);

    Promise.all([
      fetch(opts.data).then((r) => r.json()),
      new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = opts.img; }),
    ]).then(([d, i]) => { data = d; img = i; layout(); }).catch(() => {});

    return function unmount() {
      dead = true; cancelAnimationFrame(raf); ro.disconnect();
      host.removeEventListener("pointermove", onMove); host.removeEventListener("pointerleave", onLeave);
    };
  }
  window.ESBFitnessBg = { mount };
})();
