import ExperienceCard from "@components/main/ExperienceCard"
import useLanguage from "@hooks/useLanguage"
import { map } from "remeda"

import experiences from "@/content/experiences"

const Experience = () => {
	const { t } = useLanguage()

	return (
		<section className="py-8 md:py-25" id="experience">
			<div className="mb-10 flex items-center gap-6">
				<p className="text-teal font-mono text-xs font-medium tracking-wide whitespace-nowrap uppercase">
					01 / {t("experience")}
				</p>
				<span className="bg-line h-px w-full" />
			</div>
			<p className="text-muted mb-10 max-w-2xl pb-10 text-lg leading-normal md:text-xl">
				{t("profile")}
			</p>
			<div className="border-ink border-t">
				{map(experiences, (experience) => (
					<ExperienceCard experience={experience} />
				))}
			</div>
		</section>
	)
}

export default Experience
