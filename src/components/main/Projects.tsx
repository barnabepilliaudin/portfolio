import ProjectCard from "@components/main/ProjectCard"
import SectionTitle from "@components/ui/SectionTitle"
import { projects } from "@content/projects"
import { map } from "remeda"

import { HTMLIds, SECTION_NUMBERS } from "@/constants"

const Projects = () => (
	<section
		className="border-line border-b py-4 md:py-6"
		id={HTMLIds.projects}
	>
		<SectionTitle
			sectionId={SECTION_NUMBERS.projects}
			sectionName="projects"
		/>
		<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
			{map(projects, (project, id) => (
				<ProjectCard
					project={project}
					id={id + 1}
					key={`project-${project.name}-${id}`}
				/>
			))}
		</div>
	</section>
)

export default Projects
