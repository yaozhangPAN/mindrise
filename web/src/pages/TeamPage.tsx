import { useLanguage } from '../i18n/LanguageContext'

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="section founder-section" id="founder">
        <div className="founder-copy">
          <span className="section-kicker">{t.founder.kicker}</span>
          <p className="founder-role">{t.founder.role}</p>
          <h2>{t.founder.name}</h2>
          <p className="founder-subtitle">{t.founder.subtitle}</p>
          <div className="founder-badges">
            {t.founder.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
            <span className="founder-badge-em">{t.founder.badgeEm}</span>
          </div>
          <ul className="founder-credentials">
            {t.founder.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="founder-bio">{t.founder.bio}</p>
          <div className="founder-timeline">
            {t.founder.timeline.map((item) => (
              <article key={item.period}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="founder-columns">
            <div className="founder-block">
              <h3>{t.founder.whyTitle}</h3>
              <ul>
                {t.founder.whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="founder-block">
              <h3>{t.founder.bringTitle}</h3>
              <ul>
                {t.founder.bringItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="founder-visual">
          <img loading="lazy" src="/media/founder-portrait.webp?v=2" alt={t.a11y.founderPortrait} />
        </div>
      </section>

      <section className="section team-section">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">{t.team.kicker}</span>
            <h2>{t.team.title}</h2>
          </div>
          <p>{t.team.text}</p>
        </div>
        <div className="team-grid">
          {t.team.members.map((member, index) => (
            <article key={member.name}>
              <span>0{index + 1}</span>
              <h3>{member.name}</h3>
              <strong>{member.role}</strong>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
        <p className="team-footnote">{t.team.footnote}</p>
      </section>

      <section className="section technology-section">
        <div className="technology-copy">
          <span className="section-kicker">{t.technology.kicker}</span>
          <h2>{t.technology.title}</h2>
          <p>{t.technology.text}</p>
          <div className="technology-facts">
            {t.technology.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
          <small>{t.technology.note}</small>
        </div>
        <div className="technology-visual">
          <img loading="lazy" src="/media/patent.webp" alt={t.a11y.patentImage} />
        </div>
      </section>
    </>
  )
}
