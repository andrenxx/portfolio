/* eslint-disable @next/next/no-img-element */
import { DATA, TEXT, type Locale } from "@/data/resume";
import { Arrow, Bar, Footer, Mail } from "./chrome";
import { ProjectCards } from "./projects";

export default function Home({ locale }: { locale: Locale }) {
  const t = TEXT[locale];

  return (
    <>
      <Bar locale={locale} onHome />

      <main id="main">
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <h1 className="name" aria-label={DATA.name}>
                <span className="name-line">{DATA.firstName}</span>
                <span className="name-line">{DATA.lastName}</span>
              </h1>
              <p className="role seq" style={{ "--i": 2 } as React.CSSProperties}>
                {t.role} <span className="sep">/</span> {t.location}
              </p>
              <p className="lead seq" style={{ "--i": 3 } as React.CSSProperties}>{t.lead}</p>
              <div className="actions seq" style={{ "--i": 4 } as React.CSSProperties}>
                <a className="btn btn-primary" href={`mailto:${DATA.contact.email}`}>
                  <Mail />
                  {t.ctaEmail}
                </a>
                <a className="btn" href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  {t.ctaLinkedin}
                  <Arrow />
                </a>
                <a className="btn" href={DATA.contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <Arrow />
                </a>
              </div>
            </div>
            <figure className="portrait seq" style={{ "--i": 1 } as React.CSSProperties}>
              <img src={DATA.avatarUrl} alt={t.photoAlt} width={720} height={900} />
            </figure>
          </div>
        </section>

        <section className="sec" id="sobre">
          <div className="wrap sec-in">
            <h2>{t.aboutTitle}</h2>
            <div className="prose">
              {t.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="experiencia">
          <div className="wrap sec-in">
            <h2>{t.workTitle}</h2>
            <ol className="jobs">
              {t.work.map((job) => (
                <li className="job" key={job.company}>
                  <p className="when">{job.period}</p>
                  <div>
                    <h3>{job.title}</h3>
                    <p className="org">{job.company}</p>
                    <ul className="ticks">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <p className="tech">{job.stack}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec" id="projeto">
          <div className="wrap sec-in">
            <h2>{t.projectTitle}</h2>
            <div>
              <p className="sec-lead">{t.projectsLead}</p>
              <ProjectCards locale={locale} />
            </div>
          </div>
        </section>

        <section className="sec" id="stack">
          <div className="wrap sec-in">
            <h2>{t.stackTitle}</h2>
            <div>
              <dl className="stack">
                {t.stack.map((g) => (
                  <div key={g.group}>
                    <dt>{g.group}</dt>
                    <dd>{g.items}</dd>
                  </div>
                ))}
                <div>
                  <dt>{t.languagesTitle}</dt>
                  <dd>{t.languages}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="close" id="contato">
          <div className="wrap close-in">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="actions">
              <a className="btn btn-primary btn-lg" href={`mailto:${DATA.contact.email}`}>
                <Mail />
                {DATA.contact.email}
              </a>
              <a className="btn btn-lg" href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
                {t.ctaLinkedin}
                <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
