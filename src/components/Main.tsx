import Experience from "@components/main/Experience"
import Intro from "@components/main/Intro"
import Projects from "@components/main/Projects"

import Certifications from "@/components/main/Certifications"
import { HTMLIds } from "@/utils/utils"

const Main = () => (
	<main
		id={HTMLIds.top}
		className="mx-auto max-w-7xl px-5 md:px-10"
	>
		<Intro />
		<Experience />
		<Certifications />
		<Projects />
	</main>
)

export default Main
