import { ResumeURLs, type HtmlId } from "@/constants"
import { LANGUAGES, type Language } from "@/locales/Locale.type"

export const formatId = (id: number) => id.toString().padStart(2, "0")

export const linkToHtmlId = (id: HtmlId) => `#${id}`

export const getResumeUrl = (language: Language) =>
	ResumeURLs[language] ?? ResumeURLs[LANGUAGES.en]
