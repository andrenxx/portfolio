"use client";

import { useEffect, useRef } from "react";

type Item = { href: string; label: string };

// Menu de seções: um marcador desliza até a seção que está na tela.
export default function SectionNav({ items, label }: { items: Item[]; label: string }) {
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = nav.current;
    if (!el) return;
    const pill = el.querySelector<HTMLElement>(".nav-pill")!;
    const links = [...el.querySelectorAll<HTMLAnchorElement>("a")];

    const move = (a: HTMLAnchorElement | null) => {
      links.forEach((l) => l.toggleAttribute("data-active", l === a));
      if (!a) { pill.style.opacity = "0"; return; }
      pill.style.opacity = "1";
      pill.style.width = `${a.offsetWidth}px`;
      pill.style.transform = `translateX(${a.offsetLeft}px)`;
    };

    const sections = items.map((i) => document.getElementById(i.href.split("#")[1])).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) move(links.find((l) => l.getAttribute("href")?.endsWith(`#${e.target.id}`)) ?? null);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    const top = () => { if (window.scrollY < 200) move(null); };
    window.addEventListener("scroll", top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", top); };
  }, [items]);

  return (
    <nav className="nav" aria-label={label} ref={nav}>
      <span className="nav-pill" aria-hidden />
      {items.map((i) => (
        <a key={i.href} href={i.href}>
          {i.label}
        </a>
      ))}
    </nav>
  );
}
