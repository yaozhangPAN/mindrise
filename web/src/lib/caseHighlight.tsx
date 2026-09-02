import type { CaseHighlight } from '../i18n/types'

export function renderHighlight(point: CaseHighlight, key: string) {
  if (typeof point === 'string') return <li key={key}>{point}</li>
  return (
    <li key={key}>
      {point.before}
      <strong className="case-highlight-em">{point.emphasis}</strong>
      {point.after}
    </li>
  )
}
