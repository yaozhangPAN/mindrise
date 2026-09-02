import { renderHighlight } from '../lib/caseHighlight'
import { useLanguage } from '../i18n/LanguageContext'

export default function ProofPage() {
  const { t } = useLanguage()

  return (
    <section className="proof-block" id="proof">
      <div className="field-film">
        <div className="field-film-copy">
          <span className="section-kicker light-kicker">{t.proof.fieldKicker}</span>
          <h2>{t.proof.fieldTitle}</h2>
          <p>{t.proof.fieldText}</p>
          <div className="film-meta">
            {t.proof.fieldMeta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="field-film-player">
          <video
            controls
            playsInline
            poster="/media/school-story-poster.jpg"
            preload="metadata"
            src="/media/school-story.mp4"
          >
            {t.a11y.videoUnsupported}
          </video>
        </div>
      </div>

      <div className="section proof-section">
        <div className="section-heading">
          <span className="section-kicker">{t.proof.casesKicker}</span>
          <h2>{t.proof.casesTitle}</h2>
          <p>{t.proof.casesText}</p>
        </div>
        <div className="case-visual-grid">
          {t.proof.visuals.map((visual, index) => (
            <figure className="case-visual" key={visual.title}>
              <img
                loading="lazy"
                src={
                  index === 0
                    ? '/media/case-workshop.webp'
                    : index === 1
                      ? '/media/case-report.webp'
                      : '/media/ppt-v2/traction-cocreate.webp'
                }
                alt={visual.alt}
              />
              <figcaption>
                <strong>{visual.title}</strong>
                <span>{visual.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="case-summary-grid case-summary-grid-4">
          {t.caseStudies.map((item) => (
            <article key={item.id}>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <div className="case-metrics">
                {item.metrics.map((metric) => (
                  <b key={metric}>{metric}</b>
                ))}
              </div>
              <p className="case-summary">{item.summary}</p>
              <ul className="case-highlights">
                {item.highlights.map((point, index) =>
                  renderHighlight(point, typeof point === 'string' ? point : `${item.id}-${index}`),
                )}
              </ul>
            </article>
          ))}
        </div>

        <div className="co-create-panel">
          <span className="section-kicker">{t.proof.casesKicker}</span>
          <h3>{t.proof.coCreateTitle}</h3>
          <p>{t.proof.coCreateText}</p>
          <div className="report-card-grid">
            {t.proof.reportCards.map(([title, text]) => (
              <article key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="co-create-note">{t.proof.coCreateNote}</p>
        </div>
        <p className="source-note">{t.proof.sourceNote}</p>
      </div>
    </section>
  )
}
