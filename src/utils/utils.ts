export const formatId = (id: number) => id.toString().padStart(2, "0")

export const HTMLIds = {
	experiences: "experience",
	certifications: "certifications",
	projects: "projects",
	top: "top",
	navigation: "main-navigation",
} as const

type HtmlId = (typeof HTMLIds)[keyof typeof HTMLIds]

export const linkToHtmlId = (id: HtmlId) => `#${id}`
