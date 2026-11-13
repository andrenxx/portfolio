/* eslint-disable @next/next/no-html-link-for-pages */
import { DATA, TEXT, type Locale } from "@/data/resume";
import ArchDiagram from "./arch-diagram";
import { Arrow, ArrowRight, Bar, Footer, home, projectHref } from "./chrome";
import DumpitDemo from "./dumpit-demo";

export const SLUGS = ["dumpit", "clover-mmo"] as const;
export type Slug = (typeof SLUGS)[number];

function Visual({ locale, slug, compact }: { locale: Locale; slug: Slug; compact?: boolean }) {
  const t = TEXT[locale];
  if (slug === "dumpit") {
    const p = t.project;
    return <DumpitDemo input={p.input} columns={p.columns} cards={p.cards} note={p.demoNote} replay={p.replay} compact={compact} />;
  }
  return <ArchDiagram l={t.clover.diagram} compact={compact} />;
}

function info(locale: Locale, slug: Slug) {
  const t = TEXT[locale];
  if (slug === "dumpit") {
    const p = t.project;
    return { name: p.name, short: p.short, tags: p.tags, status: "", summary: p.summary, points: p.points, stack: p.stack, link: { href: DATA.dumpitUrl, label: p.link }, fine: "", features: [] as string[], challenges: [] as { title: string; body: string }[], tools: [] as string[] };
  }
  const c = t.clover;
  return { name: c.name, short: c.short, tags: c.tags, status: c.status, summary: c.summary, points: c.points, stack: c.stack, link: { href: DATA.cloverUrl, label: c.link }, fine: `${c.meta}. ${c.disclaimer}`, features: c.features, challenges: c.challenges, tools: c.tools };
}

// Cards da home: prévia animada + uma frase. O card inteiro abre a página do projeto.
export function ProjectCards({ locale }: { locale: Locale }) {
  const t = TEXT[locale];
  return (
    <div className="pcards">
      {SLUGS.map((slug) => {
        const p = info(locale, slug);
        return (
          <article className="pcard" key={slug}>
            <div className="pcard-visual" style={{ viewTransitionName: `pv-${slug}` }}>
              <Visual locale={locale} slug={slug} compact />
            </div>
            <div className="pcard-body">
              <div className="pcard-top">
                <h3 style={{ viewTransitionName: `pt-${slug}` }}>
                  <a className="pcard-link" href={projectHref(locale, slug)}>{p.name}</a>
                </h3>
                {p.status && <span className="badge">{p.status}</span>}
              </div>
              <p className="pcard-short">{p.short}</p>
              <div className="pcard-foot">
                <span className="pcard-tags">{p.tags}</span>
                <span className="pcard-cta" aria-hidden>
                  {t.open}
                  <ArrowRight />
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

// Página de detalhes de um projeto.
export function ProjectPage({ locale, slug }: { locale: Locale; slug: Slug }) {
  const t = TEXT[locale];
  const p = info(locale, slug);
  return (
    <>
      <Bar locale={locale} onHome={false} langHref={(l) => projectHref(l, slug)} />
      <main id="main" className="pdetail">
        <div className="wrap">
          <a className="back" href={`${home(locale)}#projeto`}>
            <svg className="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M13 8H3M7 4 3 8l4 4" />
            </svg>
            {t.back}
          </a>
          <header className="pdetail-head">
            <div className="pcard-top">
              <h1 style={{ viewTransitionName: `pt-${slug}` }}>{p.name}</h1>
              {p.status && <span className="badge">{p.status}</span>}
            </div>
            <p className="pdetail-short">{p.short}</p>
            <div className="actions">
              <a className="btn btn-primary" href={p.link.href} target="_blank" rel="noopener noreferrer">
                {p.link.label}
                <Arrow />
              </a>
            </div>
          </header>
          <div className="pdetail-visual" style={{ viewTransitionName: `pv-${slug}` }}>
            <Visual locale={locale} slug={slug} />
          </div>
          <div className="pdetail-grid">
            <section>
              <h2>{t.details.what}</h2>
              <p>{p.summary}</p>
            </section>
            <section>
              <h2>{t.details.built}</h2>
              <ul className="ticks">
                {p.points.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </section>
            <section>
              <h2>{t.details.stack}</h2>
              <p>{p.stack}</p>
            </section>
          </div>
          {p.features.length > 0 && (
            <section className="pblock">
              <h2>{t.details.features}</h2>
              <ul className="ticks cols-2">
                {p.features.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </section>
          )}
          {p.challenges.length > 0 && (
            <section className="pblock">
              <h2>{t.details.challenges}</h2>
              <div className="challenges">
                {p.challenges.map((c) => (
                  <div className="challenge" key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {p.tools.length > 0 && (
            <section className="pblock">
              <h2>{t.details.tools}</h2>
              <p className="tools">{p.tools.join(" · ")}</p>
            </section>
          )}
          {p.fine && <p className="fineprint">{p.fine}</p>}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
