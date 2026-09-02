export type Locale = 'zh' | 'en'

export type EmphasisText = {
  before: string
  emphasis: string
  after: string
}

export type CaseHighlight = string | EmphasisText

export type NavItem = {
  href: string
  id: string
  label: string
}

export type CaseStudy = {
  id: string
  title: string
  location: string
  metrics: string[]
  summary: string
  highlights: CaseHighlight[]
}

export type ShowcaseImage = {
  src: string
  alt: string
  caption: string
}

export type ShowcaseVideo = {
  src: string
  poster: string
  title: string
  alt: string
}

export type ShowcaseGroup = {
  id: string
  label: string
  title: string
  description: string
  bullets?: string[]
  boundary?: string
  tagline?: string
  video?: ShowcaseVideo
  images: ShowcaseImage[]
}

export type RoleNode = {
  glyph: string
  label: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type TimelineItem = {
  period: string
  title: string
  text: string
}

export type ProductMapItem = {
  title: string
  subtitle: string
  text: string
}

export type PilotStep = {
  index: string
  title: string
  text: string
}

export type PricingItem = {
  index: string
  title: string
  subtitle: string
  price: string
}

export type Translations = {
  meta: {
    title: string
    description: string
  }
  a11y: {
    skipLink: string
    home: string
    brand: string
    mainNav: string
    openMenu: string
    closeMenu: string
    language: string
    identityStrip: string
    networkCenter: string
    videoUnsupported: string
    founderPortrait: string
    patentImage: string
    contactQr: string
    showcaseTabs: string
    lightbox: string
    zoom: string
    closeLightbox: string
    prevImage: string
    nextImage: string
  }
  nav: {
    items: NavItem[]
    cta: string
    langZh: string
    langEn: string
  }
  hero: {
    kicker: string
    eyebrow: string
    title: string
    titleSpan: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    promise: string
    visualLabel: string
    liveMark: string
    visualAlt: string
    noteTitle: string
    noteText: string
  }
  identity: {
    positioning: { label: string; value: string }
    product: { label: string; value: string }
    outcome: { label: string; value: string }
    audience: { label: string; value: string }
    policy: string
  }
  about: {
    kicker: string
    title: string
    text: string
    roles: RoleNode[]
    center: string
  }
  challenges: {
    kicker: string
    title: string
    text: string
    items: [string, string, string][]
  }
  productMap: {
    kicker: string
    title: string
    text: string
    entries: ProductMapItem[]
    assets: [ProductMapItem, ProductMapItem]
    footnote: string
  }
  productFilm: {
    kicker: string
    title: string
    text: string
    bullets: string[]
  }
  roleOutcomes: {
    kicker: string
    title: string
    text: string
    items: [string, string][]
  }
  proof: {
    fieldKicker: string
    fieldTitle: string
    fieldText: string
    fieldMeta: string[]
    casesKicker: string
    casesTitle: string
    casesText: string
    coCreateTitle: string
    coCreateText: string
    reportCards: [string, string][]
    coCreateNote: string
    visuals: { alt: string; title: string; caption: string }[]
    sourceNote: string
  }
  caseStudies: CaseStudy[]
  founder: {
    kicker: string
    role: string
    name: string
    subtitle: string
    badges: string[]
    badgeEm: string
    credentials: string[]
    bio: string
    timeline: TimelineItem[]
    whyTitle: string
    whyItems: string[]
    bringTitle: string
    bringItems: string[]
  }
  team: {
    kicker: string
    title: string
    text: string
    footnote: string
    members: TeamMember[]
  }
  technology: {
    kicker: string
    title: string
    text: string
    facts: string[]
    note: string
  }
  pilotApproach: {
    kicker: string
    title: string
    text: string
    steps: PilotStep[]
    cadence: string
    measuresTitle: string
    measures: string[]
    disclaimer: string
  }
  pilots: {
    kicker: string
    title: string
    text: string
    items: [string, string, string, string][]
    note: string
  }
  pricing: {
    kicker: string
    title: string
    steps: PilotStep[]
    tableTitle: string
    items: PricingItem[]
    note: string
    pilotNote: string
  }
  contact: {
    kicker: string
    title: string
    text: string
    tagline: string
    taglineEn?: string
    deliverables: string
    steps: { index: string; title: string; text: string }[]
    wechatLabel: string
    website: string
    copy: string
    copied: string
    note: string
  }
  footer: {
    tagline: string
    links: NavItem[]
    copyright: string
  }
  showcase: {
    groups: ShowcaseGroup[]
  }
}
