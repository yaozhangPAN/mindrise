import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('WWYLAIjia')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-symbol" aria-hidden="true">
        <img src="/brand/symbol-sprout.png" alt="" />
      </div>
      <div className="contact-copy">
        <span className="section-kicker light-kicker">{t.contact.kicker}</span>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>
        <blockquote className="contact-tagline">
          <p>{t.contact.tagline}</p>
          {t.contact.taglineEn ? <cite>{t.contact.taglineEn}</cite> : null}
        </blockquote>
        <p className="contact-deliverables">{t.contact.deliverables}</p>
        <ol className="start-steps">
          {t.contact.steps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="contact-action">
        <img className="contact-qr" src="/media/wechat-qr.webp" alt={t.a11y.contactQr} />
        <span>{t.contact.wechatLabel}</span>
        <strong>WWYLAIjia</strong>
        <button type="button" onClick={copyWechat}>
          {copied ? t.contact.copied : t.contact.copy}
        </button>
        <small>{t.contact.note}</small>
        <a className="contact-website" href="https://www.learnscape.world" rel="noreferrer" target="_blank">
          {t.contact.website}
        </a>
      </div>
    </section>
  )
}
