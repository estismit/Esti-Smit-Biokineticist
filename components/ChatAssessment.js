"use client";
import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "./ui";
import { FLOW, ENDING, summary } from "../content/help";
import { BOOK, waText } from "../content/site";

const initialMessages = () => FLOW.start.bot.map((paras) => ({ from: "bot", paras }));

export default function ChatAssessment() {
  const [messages, setMessages] = useState(initialMessages);
  const [options, setOptions] = useState(FLOW.start.options);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState({});
  const node = useRef("start");
  const run = useRef(0);
  const timer = useRef(null);
  const logRef = useRef(null);

  useEffect(() => () => { run.current++; clearTimeout(timer.current); }, []);
  useEffect(() => {
    const el = logRef.current;
    if (el) setTimeout(() => { el.scrollTop = el.scrollHeight; }, 60);
  }, [messages, typing, options, done]);

  const play = (list, runId, after) => {
    if (runId !== run.current) return;
    if (!list.length) return after();
    const item = list[0];
    const paras = Array.isArray(item) ? item : item.paras;
    const wait = Array.isArray(item) ? 650 : item.delay;
    const typeFor = Math.min(wait, 1200);
    const send = () => {
      if (runId !== run.current) return;
      setTyping(true);
      timer.current = setTimeout(() => {
        if (runId !== run.current) return;
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", paras }]);
        play(list.slice(1), runId, after);
      }, typeFor);
    };
    if (wait > typeFor) timer.current = setTimeout(send, wait - typeFor); else send();
  };

  const go = (id, instant) => {
    const n = FLOW[id];
    const runId = ++run.current;
    const helpParas = n.bot.flat().filter((p) => !p.startsWith("Your first step would usually be"));
    const list = n.result
      ? [...(helpParas.length ? [{ paras: helpParas, delay: 650 }] : []), { paras: ENDING.flat(), delay: helpParas.length ? 6000 : 650 }]
      : n.bot;
    node.current = id;
    setOptions([]);
    if (instant) {
      setMessages((m) => [...m, ...list.map((it) => ({ from: "bot", paras: Array.isArray(it) ? it : it.paras }))]);
      if (n.result) setDone(true); else setOptions(n.options);
      return;
    }
    play(list, runId, () => { if (n.result) setDone(true); else setOptions(n.options); });
  };

  const choose = (opt) => {
    const id = node.current;
    if (window.gtag) window.gtag("event", "assessment_answer", { question: id, answer: opt.l });
    if (FLOW[opt.next] && FLOW[opt.next].result && window.gtag) window.gtag("event", "assessment_complete", { result: opt.next });
    setAnswers((a) => ({ ...a, [id]: opt.l }));
    setOptions([]);
    setMessages((m) => [...m, { from: "user", text: opt.l }]);
    go(opt.next);
  };

  const restart = () => {
    run.current++; clearTimeout(timer.current);
    node.current = "start";
    setMessages(initialMessages()); setOptions(FLOW.start.options); setTyping(false); setDone(false); setAnswers({});
  };

  const wa = waText("Hi! I completed the \"Can Biokinetics Help Me?\" assessment on your website. " + summary(answers) + " and I'd like to find out about booking an evaluation.");
  const avatar = { width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "block" };

  return (
    <div data-reveal="" data-reveal-delay="0" data-reveal-type="zoom" style={{ border: "1px solid var(--line)", borderRadius: "var(--radius-card-lg)", overflow: "hidden", background: "#fff", boxShadow: "var(--shadow-card-hover)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "16px 20px", borderBottom: "1px solid var(--line)", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <img src="/icons/favicon-192.png" alt="Esti Smit and the biokinetics team" width="44" height="44" style={{ width: 44, height: 44, borderRadius: "50%", display: "block", flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 500, color: "var(--charcoal)" }}>Esti Smit Biokinetics</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>Quick check · about 1 minute</span>
          </div>
        </div>
        <button type="button" onClick={restart} style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--line)", background: "var(--grey-bg)", borderRadius: 999, padding: "8px 14px", font: "700 13px var(--font-body)", color: "var(--ink)", cursor: "pointer", whiteSpace: "nowrap" }}>
          <Icon name="rotate-ccw" size={14} strokeWidth={2} />Start again
        </button>
      </div>
      <div ref={logRef} role="log" aria-live="polite" aria-label="Can Biokinetics Help Me? assessment" style={{ height: "min(640px, 72vh)", overflowY: "auto", padding: "28px 20px", display: "flex", flexDirection: "column", gap: 14, background: "#fff" }}>
        {messages.map((m, i) => m.from === "bot" ? (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-end", maxWidth: "88%" }}>
            <img src="/icons/favicon-32.png" alt="" width="32" height="32" style={avatar} />
            <div style={{ background: "var(--grey-bg)", borderRadius: "18px 18px 18px 6px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
              {m.paras.map((p, j) => <p key={j} style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: 1.55, color: "var(--charcoal)", textWrap: "pretty" }}>{p}</p>)}
            </div>
          </div>
        ) : (
          <div key={i} style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--blue)", color: "#fff", borderRadius: "18px 18px 6px 18px", padding: "12px 18px", fontSize: 15, fontWeight: 700, lineHeight: 1.45 }}>{m.text}</div>
        ))}
        {typing && (
          <div aria-label="Typing" style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <img src="/icons/favicon-32.png" alt="" width="32" height="32" style={avatar} />
            <div style={{ background: "var(--grey-bg)", borderRadius: "18px 18px 18px 6px", padding: "14px 18px", display: "flex", gap: 5 }}>
              {[0.45, 0.65, 0.85].map((o) => <span key={o} style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--muted)", opacity: o }} />)}
            </div>
          </div>
        )}
        {options.length > 0 && !typing && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 42, marginTop: 4 }}>
            {options.map((o) => <Button key={o.l} variant="secondary" size="sm" onClick={() => choose(o)} style={{ whiteSpace: "normal", textAlign: "left", lineHeight: 1.35 }}>{o.l}</Button>)}
          </div>
        )}
        {done && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingLeft: 42, marginTop: 6 }}>
            <Button variant="primary" href={BOOK} iconRight="arrow-right">Book My First Evaluation</Button>
            <Button variant="whatsapp" href={wa} iconRight="arrow-right">I'd Rather WhatsApp First</Button>
          </div>
        )}
      </div>
    </div>
  );
}
