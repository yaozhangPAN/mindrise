import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from './i18n/LanguageContext'

function tabFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('showcase-')) {
    return hash.slice('showcase-'.length)
  }
  return null
}

export default function MediaShowcase() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const groups = t.showcase.groups
  const [activeId, setActiveId] = useState(groups[0]?.id ?? 'ai-creation')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const active = groups.find((group) => group.id === activeId) ?? groups[0]
  const lightboxImage =
    lightboxIndex === null || !active ? null : active.images[lightboxIndex] ?? null

  useEffect(() => {
    const applyHash = () => {
      const tab = tabFromHash()
      if (tab && groups.some((group) => group.id === tab)) {
        setActiveId(tab)
        setLightboxIndex(null)
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [groups])

  useEffect(() => {
    if (lightboxIndex === null || !active) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null)
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((current) =>
          current === null ? 0 : (current + 1) % active.images.length,
        )
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((current) =>
          current === null
            ? 0
            : (current - 1 + active.images.length) % active.images.length,
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex, active])

  if (!active) return null

  const selectTab = (id: string) => {
    setActiveId(id)
    setLightboxIndex(null)
    navigate(`/products#showcase-${id}`, { replace: true })
  }

  return (
    <section className="section showcase-section" id="showcase">
      <div className="section-heading split-heading">
        <div>
          <span className="section-kicker">{t.productMap.kicker}</span>
          <h2>{t.productMap.title}</h2>
        </div>
        <p>{t.productMap.text}</p>
      </div>

      <div className="product-map-grid">
        {t.productMap.entries.map((entry) => (
          <article className="product-map-card" key={entry.title}>
            <h3>{entry.title}</h3>
            <strong>{entry.subtitle}</strong>
            <p>{entry.text}</p>
          </article>
        ))}
        {t.productMap.assets.map((asset) => (
          <article className="product-map-card product-map-asset" key={asset.title}>
            <h3>{asset.title}</h3>
            <strong>{asset.subtitle}</strong>
            <p>{asset.text}</p>
          </article>
        ))}
      </div>
      <p className="product-map-footnote">{t.productMap.footnote}</p>

      <div className="showcase-tabs" role="tablist" aria-label={t.a11y.showcaseTabs}>
        {groups.map((group) => (
          <button
            aria-controls={`showcase-panel-${group.id}`}
            aria-selected={active.id === group.id}
            className={active.id === group.id ? 'is-active' : ''}
            id={`tab-${group.id}`}
            key={group.id}
            onClick={() => selectTab(group.id)}
            role="tab"
            type="button"
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="showcase-copy" key={`${active.id}-copy`}>
        <span>{active.label}</span>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
        {active.bullets?.length ? (
          <ul className="showcase-bullets">
            {active.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {active.boundary ? <p className="showcase-boundary">{active.boundary}</p> : null}
        {active.tagline ? <p className="showcase-tagline">{active.tagline}</p> : null}
      </div>

      {active.video ? (
        <div className="showcase-video">
          <div className="showcase-video-heading">
            <span>▶</span>
            <h4>{active.video.title}</h4>
          </div>
          <video
            controls
            playsInline
            poster={active.video.poster}
            preload="metadata"
            src={active.video.src}
          >
            {t.a11y.videoUnsupported}
          </video>
        </div>
      ) : null}

      {active.images.length > 0 ? (
      <div
        aria-labelledby={`tab-${active.id}`}
        className={`showcase-gallery gallery-${active.images.length}`}
        id={`showcase-panel-${active.id}`}
        key={active.id}
        role="tabpanel"
      >
        {active.images.map((image, index) => (
          <figure key={image.src}>
            <button
              aria-label={`${t.a11y.zoom}: ${image.caption}`}
              className="showcase-thumb"
              onClick={() => setLightboxIndex(index)}
              type="button"
            >
              <img loading="lazy" src={image.src} alt={image.alt} />
              <span className="showcase-zoom-hint">{t.a11y.zoom}</span>
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      ) : null}

      {lightboxImage && lightboxIndex !== null ? (
        <div
          aria-label={t.a11y.lightbox}
          aria-modal="true"
          className="lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
        >
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-toolbar">
              <span>
                {active.label} · {lightboxIndex + 1}/{active.images.length}
              </span>
              <button
                aria-label={t.a11y.closeLightbox}
                className="lightbox-close"
                onClick={() => setLightboxIndex(null)}
                type="button"
              >
                {t.a11y.closeLightbox}
              </button>
            </div>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
            <p>{lightboxImage.caption}</p>
            {active.images.length > 1 ? (
              <div className="lightbox-nav">
                <button
                  aria-label={t.a11y.prevImage}
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + active.images.length) % active.images.length,
                    )
                  }
                  type="button"
                >
                  ← {t.a11y.prevImage}
                </button>
                <button
                  aria-label={t.a11y.nextImage}
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % active.images.length)
                  }
                  type="button"
                >
                  {t.a11y.nextImage} →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
