import { map } from "remeda"

import { projects } from "../../content/projects"
import useLanguage from "../../hooks/useLanguage"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	const { t } = useLanguage()

	return (
		<section className="border-line border-b py-16 md:py-24" id="profile">
			<div className="mb-10 flex items-center gap-6">
				<p className="text-teal font-mono text-xs font-medium tracking-wide whitespace-nowrap uppercase">
					02 / {t("projects")}
				</p>
				<span className="bg-line h-px w-full" />
			</div>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
				{map(projects, (project, id) => (
					<ProjectCard project={project} id={++id} key={`project-${project.name}-${id}`} />
				))}
			</div>
		</section>
	)
}

export default Projects
