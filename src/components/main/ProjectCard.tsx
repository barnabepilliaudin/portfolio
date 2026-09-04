import type { Project } from "@content/projects"
import useLanguage from "@hooks/useLanguage"
import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TextProps = {
	className?: string
	children: ReactNode
}

const ProjectText = ({ className, children }: TextProps) => (
	<p className={twMerge("text-muted max-w-lg leading-relaxed", className)}>{children}</p>
)
const ProjectMeta = ({ className, children }: TextProps) => (
	<p className={twMerge("text-teal my-2 mb-5 font-mono text-xs", className)}>{children}</p>
)
const ProjectTitle = ({ className, children }: TextProps) => (
	<p className={twMerge("font-display text-3xl font-semibold", className)}>{children}</p>
)

type ProjectCardProps = {
	project: Project
	id: number
}
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
			<div className="text-teal mb-8 font-mono text-xs">{id}</div>
			<ProjectTitle>{t(name)}</ProjectTitle>
			<ProjectMeta>{t(meta)}</ProjectMeta>
			<ProjectText>{t(description)}</ProjectText>
			<ProjectText>
				<a href={url} target="_blank" rel="noreferrer">
					<span className="text-teal">{platform} ↗</span>
				</a>
			</ProjectText>
		</article>
	)
}

export default ProjectCard
