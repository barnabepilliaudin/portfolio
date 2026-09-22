import { type Language } from "@/locales/Locale.type"

export const LANGUAGE_STORAGE_KEY = "language"

export const CV_FILE_NAME = "CV_PILLIAUDIN_BARNABE.pdf"
export const ROUTES = { home: "/", resume: "/resume" }

export const PERSONAL_INFO = {
	gitLinks: {
		github: "https://github.com/barnabepilliaudin",
		gitlab: "https://gitlab.com/barnabePILLIAUDIN/",
	},
	email: "contact@barnabepilliaudin.fr",
	linkedIn: "https://linkedin.com/in/barnabepilliaudin",
	firstName: "Barnabé",
	lastName: "PILLIAUDIN",
	city: "Couerbevoie",
	zipCode: 92400,
	country: "France",
}

export const HTMLIds = {
	experiences: "experience",
	certifications: "certifications",
	projects: "projects",
	top: "top",
	navigation: "main-navigation",
} as const

export type HtmlId = (typeof HTMLIds)[keyof typeof HTMLIds]

export const ResumeURLs: Record<Language, string> = {
	fr: "CV_PILLIAUDIN_BARNABE.pdf",
	en: "CV_PILLIAUDIN_BARNABE_EN.pdf",
} as const

export const GIT_PLATFORMS = {
	github: "GitHub",
	gitlab: "GitLab",
} as const

export type GitPlatform = (typeof GIT_PLATFORMS)[keyof typeof GIT_PLATFORMS]
