import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {t.hero.kicker}
          </div>
          <h1>
            {t.hero.title}
            <span>{t.hero.titleSpan}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/contact">
              {t.hero.ctaPrimary} <span>→</span>
            </Link>
            <Link className="button button-secondary" to="/products">
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <div className="hero-promise">{t.hero.promise}</div>
        </div>
      </section>

      <section className="identity-strip" aria-label={t.a11y.identityStrip}>
        <div>
          <span>{t.identity.positioning.label}</span>
          <strong>{t.identity.positioning.value}</strong>
        </div>
        <div>
          <span>{t.identity.product.label}</span>
          <strong>{t.identity.product.value}</strong>
        </div>
        <div>
          <span>{t.identity.outcome.label}</span>
          <strong>{t.identity.outcome.value}</strong>
        </div>
        <div>
          <span>{t.identity.audience.label}</span>
          <strong>{t.identity.audience.value}</strong>
        </div>
      </section>
      <p className="identity-policy">{t.identity.policy}</p>

      <section className="section about-section" id="about">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">{t.about.kicker}</span>
            <h2>{t.about.title}</h2>
          </div>
          <p>{t.about.text}</p>
        </div>
        <div className="role-network">
          <div className="network-line" aria-hidden="true" />
          {t.about.roles.slice(0, 2).map((role) => (
            <div className="role-node" key={role.label}>
              <span className="role-glyph">{role.glyph}</span>
              <span>{role.label}</span>
            </div>
          ))}
          <div className="network-center">
            <img src="/brand/symbol-sprout.png" alt="" />
            <span>{t.about.center}</span>
          </div>
          {t.about.roles.slice(2).map((role) => (
            <div className="role-node" key={role.label}>
              <span className="role-glyph">{role.glyph}</span>
              <span>{role.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section challenge-section">
        <div className="section-heading">
          <span className="section-kicker">{t.challenges.kicker}</span>
          <h2>{t.challenges.title}</h2>
          <p>{t.challenges.text}</p>
        </div>
        <div className="challenge-grid">
          {t.challenges.items.map(([index, title, text]) => (
            <article className="challenge-item" key={index}>
              <span className="challenge-index">{index}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
