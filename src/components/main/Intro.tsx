import Console from "@components/main/Console"
import useLanguage from "@hooks/useLanguage"

import { ROUTES } from "@/constants"

const MySelf = () => {
	const { t } = useLanguage()
	return (
		<>
			<p className="text-teal flex w-full items-center font-mono text-xs font-medium tracking-wide uppercase">
				<span className="bg-teal mr-2 inline-block h-2 w-2 animate-pulse rounded-full shadow-[0_0_0_6px_rgba(19,143,136,0.15)]" />
				{t("available")}
			</p>
			<h1 className="font-display max-w-3xl py-7 text-6xl leading-none font-semibold tracking-tighter lg:my-7 lg:mb-6 lg:text-8xl">
				{t("hero")}
				<br />
				<em className="text-teal not-italic">{t("heroAccent")}</em>
			</h1>
			<p className="text-muted text-md max-w-lg text-base leading-relaxed lg:text-lg">
				{t("intro")}
			</p>
		</>
	)
}

const CTASection = () => {
	const { t } = useLanguage()
	return (
		<div className="mt-7 flex items-center gap-3.5 md:mt-9 md:gap-7">
			<a
				className="bg-ink inline-flex flex-1 items-center justify-between gap-6 px-3.5 py-3.5 text-xs font-bold text-white md:flex-none md:px-4.5 md:py-4"
				href="#experience"
			>
				<span className="text-white">{t("seeWork")}</span>
				<span className="text-lime text-base">↓</span>
			</a>
			<a
				className="border-ink inline-flex flex-1 items-center justify-between gap-6 border px-3.5 py-3.5 text-xs font-bold md:flex-none md:px-4.5 md:py-4"
				href={ROUTES.resume}
			>
				<span>{t("viewResume")}</span>
				<span className="text-teal text-base">↗</span>
			</a>
		</div>
	)
}

const Intro = () => (
	<section className="relative flex min-h-0 flex-col items-center min-[850px]:min-h-148 min-[850px]:flex-row min-[850px]:items-center">
		<div className="z-relative animate-[enter_.8s_both_ease-out] py-10 text-center min-[850px]:mr-5 min-[850px]:py-16 min-[850px]:pb-20 min-[850px]:text-left">
			<MySelf />
			<CTASection />
		</div>
		<Console />
	</section>
)

export default Intro
