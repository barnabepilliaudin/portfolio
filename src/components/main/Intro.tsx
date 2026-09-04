import Console from "@components/main/Console"
import useLanguage from "@hooks/useLanguage"

const MySelf = () => {
	const { t } = useLanguage()
	return (
		<>
			<p className="text-teal font-mono text-xs font-medium tracking-wide uppercase">
				<span className="bg-teal shadow-status mr-2 inline-block h-2 w-2 rounded-full align-middle" />{" "}
				{t("available")}
			</p>
			<h1 className="font-display my-5 max-w-3xl text-6xl leading-none font-semibold tracking-tighter md:my-7 md:mb-6 md:text-8xl">
				{t("hero")}
				<br />
				<em className="text-teal not-italic">{t("heroAccent")}</em>
			</h1>
			<p className="text-muted max-w-lg text-base leading-relaxed md:text-lg">{t("intro")}</p>
		</>
	)
}

const CTASection = () => {
	const { t, language } = useLanguage()
	return (
		<div className="mt-7 flex items-center gap-3.5 md:mt-9 md:gap-7">
			<a
				className="bg-ink inline-flex flex-1 items-center justify-between gap-6 px-3.5 py-3.5 text-xs font-bold text-white md:flex-none md:px-4.5 md:py-4"
				href="#experience"
			>
				<span className="text-white">{t("seeWork")}</span>{" "}
				<span className="text-lime text-base">↓</span>
			</a>
			<a
				className="border-ink inline-flex flex-1 items-center justify-between gap-6 border px-3.5 py-3.5 text-xs font-bold md:flex-none md:px-4.5 md:py-4"
				href={language === "en" ? "/resume-en.html" : "/resume.html"}
			>
				<span>{t("viewResume")}</span> <span className="text-teal text-base">↗</span>
			</a>
		</div>
	)
}

const Intro = () => (
	<section className="relative flex min-h-0 flex-col items-stretch md:min-h-148 md:flex-row md:items-center">
		<div className="z- relative animate-[enter_.8s_both_ease-out] py-10 md:py-16 md:pb-20">
			<MySelf />
			<CTASection />
		</div>
		<Console />
	</section>
)

export default Intro
