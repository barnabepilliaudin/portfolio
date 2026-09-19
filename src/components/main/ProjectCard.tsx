import type { Project } from "@content/projects"
import useLanguage from "@hooks/useLanguage"

import CardDescription from "@/components/ui/CardDesctiption"
import CardMeta from "@/components/ui/CardMeta"
import CardTitle from "@/components/ui/CardTitle"
import { formatId } from "@/utils/utils"

type ProjectCardProps = { project: Project; id: number }
const ProjectCard = (props: ProjectCardProps) => {
	const {
		project: {
			name,
			meta,
			description,
			link: { platform, url },
		},
		id,
	} = props
	const { t } = useLanguage()
	return (
		<article className="border-ink border-t pt-4">
			<div className="text-teal mb-8 font-mono text-xs">{formatId(id)}</div>
			<CardTitle>{t(name)}</CardTitle>
			<CardMeta>{t(meta)}</CardMeta>
			<CardDescription>{t(description)}</CardDescription>
			<CardDescription>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					<span className="text-teal">{platform} ↗</span>
				</a>
			</CardDescription>
		</article>
	)
}

export default ProjectCard
