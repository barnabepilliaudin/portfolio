export const GIT_PLATFORMS = {
	github: "GitHub",
	gitlab: "GitLab",
} as const

export type GitPlatform = (typeof GIT_PLATFORMS)[keyof typeof GIT_PLATFORMS]
