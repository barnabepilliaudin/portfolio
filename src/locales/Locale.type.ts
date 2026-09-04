import type enLocale from "./en"

export type Locale = typeof enLocale
export type LocaleKey = keyof Locale

export const LANGUAGES = {
	fr: "fr",
	en: "en",
} as const

export type Language = keyof typeof LANGUAGES
