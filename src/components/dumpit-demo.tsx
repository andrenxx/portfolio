"use client";

import { useEffect, useRef } from "react";

type Props = {
  input: string;
  columns: [string, string, string];
  cards: string[][];
  note: string;
  replay: string;
  compact?: boolean;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const wait = (ms: number, signal: AbortSignal) =>
  new Promise<void>((res, rej) => {
    const t = setTimeout(res, ms);
    signal.addEventListener("abort", () => { clearTimeout(t); rej(new DOMException("aborted", "AbortError")); }, { once: true });
  });

// Demonstração do DumpIt: o texto é digitado e vira cards no Kanban.
// Sem JavaScript (ou com movimento reduzido) mostra o estado final, parado.
export default function DumpitDemo({ input, columns, cards, note, replay, compact }: Props) {
  const root = useRef<HTMLElement>(null);
  const run = useRef<() => void>(() => {});

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const text = el.querySelector<HTMLElement>(".demo-text")!;
    const box = el.querySelector<HTMLElement>(".demo-input")!;
    const items = [...el.querySelectorAll<HTMLElement>(".demo-card")];
    const counts = [...el.querySelectorAll<HTMLElement>(".demo-head span")];
    let ctrl: AbortController | null = null;
    let visible = false;

    const setCounts = (n: number[]) => counts.forEach((c, i) => (c.textContent = String(n[i])));

    async function play() {
      ctrl?.abort();
      ctrl = new AbortController();
      const s = ctrl.signal;
      el!.dataset.state = "typing";
      try {
        items.forEach((c) => (c.style.opacity = "0"));
        setCounts([0, 0, 0]);
        text.textContent = "";
        await wait(350, s);
        for (let i = 1; i <= input.length; i++) {
          text.textContent = input.slice(0, i);
          await wait(input[i - 1] === " " ? 45 : 24, s);
        }
        await wait(450, s);
        el!.dataset.state = "sending";
        box.animate([{ transform: "scale(1)" }, { transform: "scale(0.985)" }, { transform: "scale(1)" }], { duration: 260, easing: EASE });
        await wait(220, s);
        const from = box.getBoundingClientRect();
        text.animate([{ opacity: 1 }, { opacity: 0.35 }], { duration: 300, easing: EASE, fill: "forwards" });
        const tally = [0, 0, 0];
        for (const card of items) {
          const col = Number(card.dataset.col);
          const to = card.getBoundingClientRect();
          const dx = from.left + from.width / 2 - (to.left + to.width / 2);
          const dy = from.top + from.height / 2 - (to.top + to.height / 2);
          card.style.opacity = "";
          card.animate(
            [
              { transform: `translate(${dx}px, ${dy}px) scale(0.6)`, opacity: 0, filter: "blur(6px)" },
              { transform: "none", opacity: 1, filter: "blur(0)" },
            ],
            { duration: 620, easing: EASE, fill: "backwards" }
          );
          tally[col] += 1;
          setCounts(tally);
          await wait(170, s);
        }
        el!.dataset.state = "done";
        await wait(3800, s);
        text.getAnimations().forEach((a) => a.cancel());
        if (visible) play();
      } catch {
        /* interrompido */
      }
    }

    run.current = () => { visible = true; play(); };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) play();
      else {
        ctrl?.abort();
        text.getAnimations().forEach((a) => a.cancel());
        text.textContent = input;
        items.forEach((c) => (c.style.opacity = ""));
        setCounts(cards.map((c) => c.length));
        el.dataset.state = "done";
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); ctrl?.abort(); };
  }, [input, cards]);

  return (
    <figure className={`demo${compact ? " is-compact" : ""}`} ref={root} data-state="done" aria-label={note}>
      <div className="demo-input">
        <span className="demo-text">{input}</span>
        <span className="demo-caret" aria-hidden />
      </div>
      <div className="demo-board">
        {columns.map((col, i) => (
          <div className="demo-col" key={col}>
            <p className="demo-head">
              {col} <span>{cards[i].length}</span>
            </p>
            {cards[i].map((c) => (
              <p className={`demo-card${i === 1 ? " is-active" : ""}`} data-col={i} key={c}>
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
      {!compact && (
      <figcaption>
        <span>{note}</span>
        <button type="button" className="demo-replay" onClick={() => run.current()}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2.75 8a5.25 5.25 0 1 0 1.6-3.77M2.75 2.75v3h3" />
          </svg>
          {replay}
        </button>
      </figcaption>
      )}
    </figure>
  );
}
