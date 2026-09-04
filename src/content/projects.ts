import type { LocaleKey } from "../locales/Locale.type"
import type { GitPlatform } from "../utils/git"
import { GIT_PLATFORMS } from "../utils/git"
import type { Url } from "../utils/validators"

export type Project = {
	name: LocaleKey
	meta: LocaleKey
	description: LocaleKey
	link: {
		platform: GitPlatform
		url: Url
	}
}
export const projects: Project[] = [
	{
		name: "pipeline",
		meta: "pipelineMeta",
		description: "pipelineDescription",
		link: {
			platform: GIT_PLATFORMS.gitlab,
			url: "https://gitlab.com/barnabePILLIAUDIN/ci-cd-project-m2",
		},
	},
	{
		name: "airneis",
		meta: "airneisMeta",
		description: "airneisDescription",
		link: {
			platform: GIT_PLATFORMS.github,
			url: "https://github.com/KrispyTech/airneis",
		},
	},
]
