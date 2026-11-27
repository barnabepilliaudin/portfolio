import { type Language } from "@/locales/Locale.type"

export const LANGUAGE_STORAGE_KEY = "language"

export const CV_FILE_NAME = "CV_PILLIAUDIN_BARNABE.pdf"
export const ROUTES = { home: "/", resume: "/resume", legal: "/legal" }

export const PERSONAL_INFO = {
	gitLinks: {
		github: "https://github.com/barnabepilliaudin",
		gitlab: "https://gitlab.com/barnabePILLIAUDIN/",
	},
	email: "contact@barnabepilliaudin.fr",
	linkedIn: "https://linkedin.com/in/barnabepilliaudin",
	firstName: "Barnabé",
	lastName: "PILLIAUDIN",
	city: "Courbevoie",
	zipCode: 92400,
	country: "France",
}

export const BADGE_SIZE_PX = 150

export const CERTIFICATIONS = {
	awsSaa: {
		title: "AWS Certified Solutions Architect - Associate",
		issuedOn: "08/2026",
		expiresOn: "08/2029",
		badgeUrl:
			"https://www.credly.com/badges/18c641be-0867-46fd-a27b-cfa68eba1739",
		badgeImage: "/aws-saa-badge.png",
	},
}

export const SECTION_NUMBERS = {
	experience: 1,
	certifications: 2,
	projects: 3,
} as const

export const HOSTING_INFO = {
	name: "GitHub, Inc.",
	address: "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA",
	phone: "+1 (877) 448-4820",
	website: "https://github.com",
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
