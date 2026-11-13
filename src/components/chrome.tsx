import { DATA, LOCALES, TEXT, type Locale } from "@/data/resume";
import LangSync from "./lang-sync";
import SectionNav from "./section-nav";

export const home = (l: Locale) => (l === "pt" ? "/" : `/${l}`);
export const projectHref = (l: Locale, slug: string) => (l === "pt" ? `/p/${slug}` : `/${l}/p/${slug}`);

export const Arrow = () => (
  <svg className="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
  </svg>
);
export const Mail = () => (
  <svg className="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" />
    <path d="m2.25 4.25 5.75 4.5 5.75-4.5" />
  </svg>
);
export const ArrowRight = () => (
  <svg className="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

// Barra do topo. Em páginas internas, os links das seções levam de volta para a home.
export function Bar({ locale, onHome, langHref }: { locale: Locale; onHome: boolean; langHref?: (l: Locale) => string }) {
  const t = TEXT[locale];
  const base = onHome ? "" : home(locale);
  return (
    <>
      <LangSync lang={t.htmlLang} />
      <a className="skip" href="#main">{{ pt: "Pular para o conteúdo", en: "Skip to content", es: "Saltar al contenido" }[locale]}</a>
      <header className="bar">
        <div className="wrap bar-in">
          <a className="mark" href={home(locale)} aria-label={DATA.name}>
            {DATA.initials}
          </a>
          <SectionNav
            label={t.nav.about + ", " + t.nav.work + ", " + t.nav.project}
            items={[
              { href: `${base}#sobre`, label: t.nav.about },
              { href: `${base}#experiencia`, label: t.nav.work },
              { href: `${base}#projeto`, label: t.nav.project },
              { href: `${base}#stack`, label: t.nav.stack },
              { href: `${base}#contato`, label: t.nav.contact },
            ]}
          />
          <div className="langs" role="group" aria-label="Idioma / Language">
            {LOCALES.map((l) => (
              <a key={l} href={(langHref ?? home)(l)} hrefLang={TEXT[l].htmlLang} lang={TEXT[l].htmlLang} aria-current={l === locale ? "true" : undefined} title={TEXT[l].langName}>
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = TEXT[locale];
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>{t.footer} · {new Date().getFullYear()}</span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
}
