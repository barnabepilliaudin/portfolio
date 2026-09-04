import type { ReactNode } from "react"
import { map } from "remeda"
import { twMerge } from "tailwind-merge"

import type { Experience } from "../../content/experiences"
import useLanguage from "../../hooks/useLanguage"

type ExperienceCardProps = {
	experience: Experience
}

type ExperienceCardTextProps = {
	className?: string
	children: ReactNode
}

const ExperiencePeriod = ({ className, children }: ExperienceCardTextProps) => (
	<span
		className={twMerge("text-muted col-span-12 font-mono text-xs md:col-span-2 md:pt-1", className)}
	>
		{children}
	</span>
)
const ExperienceName = ({ className, children }: ExperienceCardTextProps) => (
	<h2 className={twMerge("font-display text-xl font-semibold md:text-2xl", className)}>
		{children}
	</h2>
)
const ExperienceMeta = ({ className, children }: ExperienceCardTextProps) => (
	<p className={twMerge("text-teal mt-1 mb-5 font-mono text-xs", className)}>{children}</p>
)
const ExperienceDescription = ({ className, children }: ExperienceCardTextProps) => (
	<p className={twMerge("text-muted max-w-3xl text-sm", className)}>{children}</p>
)

const ExperienceCard = (props: ExperienceCardProps) => {
	const { t } = useLanguage()
	const {
		experience: { period, description, meta, name, tasks },
	} = props

	return (
		<article className="border-line grid grid-cols-12 gap-2 border-b py-7.5 md:gap-6">
			<ExperiencePeriod>{period}</ExperiencePeriod>
			<div className="col-span-11 min-w-0 md:col-span-9">
				<ExperienceName>{t(name)}</ExperienceName>
				<ExperienceMeta>{t(meta)}</ExperienceMeta>
				<ExperienceDescription className="">{t(description)}</ExperienceDescription>
				<ul className="text-muted mt-5 list-disc pl-5 text-sm leading-relaxed">
					{map(tasks, (task) => (
						<li>{t(task)}</li>
					))}
				</ul>
			</div>
			<span className="text-teal col-span-1 text-2xl">↗</span>
		</article>
	)
}

export default ExperienceCard
