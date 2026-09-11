import type { Experience } from "@content/experiences"
import useLanguage from "@hooks/useLanguage"
import type { ReactNode } from "react"
import { map } from "remeda"
import { twMerge } from "tailwind-merge"

import CardDescription from "@/components/ui/CardDesctiption"
import CardMeta from "@/components/ui/CardMeta"
import CardTitle from "@/components/ui/CardTitle"

type ExperienceCardProps = {
	experience: Experience
}

type ExperienceCardTextProps = {
	className?: string
	children: ReactNode
}

const ExperiencePeriod = ({ className, children }: ExperienceCardTextProps) => (
	<span
		className={twMerge(
			"text-muted col-span-12 font-mono text-xs md:col-span-2 md:pt-1",
			className,
		)}
	>
		{children}
	</span>
)
const ExperienceCard = (props: ExperienceCardProps) => {
	const { t } = useLanguage()
	const {
		experience: { period, description, meta, name, tasks },
	} = props

	return (
		<article className="border-line grid grid-cols-12 gap-2 border-b py-7.5 md:gap-6">
			<ExperiencePeriod>{period}</ExperiencePeriod>
			<div className="col-span-11 flex min-w-0 flex-col gap-2 md:col-span-9">
				<CardTitle>{t(name)}</CardTitle>
				<CardMeta>{t(meta)}</CardMeta>
				<CardDescription>{t(description)}</CardDescription>
				<ul className="text-muted mt-5 list-disc pl-5 text-sm leading-relaxed">
					{map(tasks, (task) => (
						<li key={task}>{t(task)}</li>
					))}
				</ul>
			</div>
			<span className="text-teal col-span-1 hidden text-2xl md:visible">↗</span>
		</article>
	)
}

export default ExperienceCard
