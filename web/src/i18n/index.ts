import { en } from './en'
import { zh } from './zh'
import type { Locale, Translations } from './types'

export type { Locale, Translations } from './types'

export const translations: Record<Locale, Translations> = { zh, en }
