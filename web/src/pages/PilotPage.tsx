import { useLanguage } from '../i18n/LanguageContext'

export default function PilotPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="section pilot-approach-section" id="pilot">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">{t.pilotApproach.kicker}</span>
            <h2>{t.pilotApproach.title}</h2>
          </div>
          <p>{t.pilotApproach.text}</p>
        </div>
        <div className="pilot-approach-grid">
          {t.pilotApproach.steps.map((step) => (
            <article key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="pilot-cadence">{t.pilotApproach.cadence}</p>
        <div className="pilot-measures">
          <h3>{t.pilotApproach.measuresTitle}</h3>
          <ul>
            {t.pilotApproach.measures.map((measure) => (
              <li key={measure}>{measure}</li>
            ))}
          </ul>
          <p>{t.pilotApproach.disclaimer}</p>
        </div>
      </section>

      <section className="section pilot-section">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">{t.pilots.kicker}</span>
            <h2>{t.pilots.title}</h2>
          </div>
          <p>{t.pilots.text}</p>
        </div>
        <div className="pilot-grid">
          {t.pilots.items.map(([index, title, scope, result]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{scope}</p>
              <strong>{result}</strong>
            </article>
          ))}
        </div>
        <p className="pilot-note">{t.pilots.note}</p>
      </section>

      <section className="section next-steps-section">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">{t.pricing.kicker}</span>
            <h2>{t.pricing.title}</h2>
          </div>
        </div>
        <div className="pricing-steps">
          {t.pricing.steps.map((step) => (
            <article key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="pricing-pilot-note">{t.pricing.pilotNote}</p>
      </section>
    </>
  )
}
