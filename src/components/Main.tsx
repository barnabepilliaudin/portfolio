import Experience from "@components/main/Experience"
import Intro from "@components/main/Intro"
import Projects from "@components/main/Projects"

const Main = () => {
	return (
		<main id="top" className="mx-auto max-w-7xl px-5 md:px-10">
			<Intro />
			<Experience />
			<Projects />
		</main>
	)
}

export default Main
