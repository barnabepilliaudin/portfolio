import type { LocaleKey } from "../locales/Locale.type"

export type Experience = {
	name: LocaleKey
	period: string
	meta: LocaleKey
	description: LocaleKey
	tasks: LocaleKey[]
}
const experiences: Experience[] = [
	{
		name: "cynaDev",
		period: "2026",
		meta: "cynaDevMeta",
		description: "cynaDevDescription",
		tasks: ["cynaDevMastra", "cynaDevSoar", "cynaDevCursor"],
	},
	{
		name: "cynaDevops",
		period: "2024 — 2026",
		meta: "cynaDevopsMeta",
		description: "cynaDevopsDescription",
		tasks: ["cynaDevopsAutomateDeploy", "cynaDevopsAnsibleTerraform", "cynaDevopsMonitoring"],
	},
	{
		name: "jproject",
		period: "2023 — 2024",
		meta: "jprojectMeta",
		description: "jprojectDescription",
		tasks: ["jprojectWebStack", "jprojectMobile", "jProjectDelivery"],
	},
]

export default experiences
