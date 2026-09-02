import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useVideoAutopause } from '../hooks/useVideoAutopause'
import { useLanguage } from '../i18n/LanguageContext'

function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function SiteLayout() {
  const { locale, setLocale, t } = useLanguage()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = t.nav.items

  useVideoAutopause()

  useEffect(() => {
    setMenuOpen(false)
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t.a11y.skipLink}
      </a>
      <header className="site-header">
        <Link className="brand-link" to="/" aria-label={t.a11y.home}>
          <img src="/brand/logo-horizontal.png" alt={t.a11y.brand} />
        </Link>
        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t.a11y.language}>
            <button
              aria-pressed={locale === 'zh'}
              className={locale === 'zh' ? 'is-active' : undefined}
              onClick={() => setLocale('zh')}
              type="button"
            >
              {t.nav.langZh}
            </button>
            <button
              aria-pressed={locale === 'en'}
              className={locale === 'en' ? 'is-active' : undefined}
              onClick={() => setLocale('en')}
              type="button"
            >
              {t.nav.langEn}
            </button>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span>{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={t.a11y.mainNav}>
          {navItems.map((item) => (
            <Link
              aria-current={isNavActive(location.pathname, item.href) ? 'page' : undefined}
              className={isNavActive(location.pathname, item.href) ? 'is-current' : undefined}
              key={item.id}
              onClick={() => setMenuOpen(false)}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" onClick={() => setMenuOpen(false)} to="/contact">
            {t.nav.cta} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/brand/logo-horizontal.png" alt={t.a11y.brand} />
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-links">
          {t.footer.links.map((link) => (
            <Link key={link.id} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {t.footer.copyright.replace(/^©\s*/, '')}
        </p>
      </footer>
    </div>
  )
}
