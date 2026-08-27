import enLocale from "./en"
import frLocale from "./fr"
import type { Language, Locale, LocaleKey } from "./Locale.type"

const translations: Record<Language, Locale> = {
	en: enLocale,
	fr: frLocale,
}

export const translate = (language: Language) => (key: LocaleKey) => translations[language][key]
