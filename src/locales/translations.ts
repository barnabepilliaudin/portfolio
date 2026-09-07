import enLocale from "@locales/en"
import type { Language, Locale, LocaleKey } from "@locales/Locale.type"

import frLocale from "@/locales/fr"

const translations: Record<Language, Locale> = {
	en: enLocale,
	fr: frLocale,
}

export const translate = (language: Language) => (key: LocaleKey) =>
	translations[language][key]
