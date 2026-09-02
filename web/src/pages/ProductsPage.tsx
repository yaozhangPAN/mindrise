import MediaShowcase from '../MediaShowcase'
import { useLanguage } from '../i18n/LanguageContext'

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <>
      <MediaShowcase />

      <section className="product-film">
        <div className="product-film-device">
          <video
            controls
            playsInline
            poster="/media/product-demo-poster.jpg"
            preload="metadata"
            src="/media/product-demo.mp4"
          >
            {t.a11y.videoUnsupported}
          </video>
        </div>
        <div className="product-film-copy">
          <span className="section-kicker">{t.productFilm.kicker}</span>
          <h2>{t.productFilm.title}</h2>
          <p>{t.productFilm.text}</p>
          <ul>
            {t.productFilm.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
