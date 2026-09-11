import ExperienceCard from "@components/main/ExperienceCard"
import SectionTitle from "@components/ui/SectionTitle"
import useLanguage from "@hooks/useLanguage"
import { map } from "remeda"

import experiences from "@/content/experiences"
import { HTMLIds } from "@/utils/utils"

const Experience = () => {
	const { t } = useLanguage()

	return (
		<section
			className="py-1.5 md:py-6.25"
			id={HTMLIds.experiences}
		>
			<SectionTitle
				sectionId={1}
				sectionName="experience"
			/>
			<p className="text-muted mb-10 max-w-2xl pb-10 text-lg leading-normal md:text-xl">
				{t("profile")}
			</p>
			<div className="border-ink border-t">
				{map(experiences, (experience) => (
					<ExperienceCard
						key={experience.name}
						experience={experience}
					/>
				))}
			</div>
		</section>
	)
}

export default Experience
