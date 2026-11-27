import LanguageSelect from "@components/ui/LanguageSelect"
import { legal, type LegalSection } from "@content/legal"
import useLanguage from "@hooks/useLanguage"

import { ROUTES } from "@/constants"

const LegalPart = ({
	title,
	sections,
}: {
	title: string
	sections: LegalSection[]
}) => (
	<section className="space-y-6">
		<h2 className="border-teal font-display border-b-[3px] pb-3 text-2xl font-semibold md:text-3xl">
			{title}
		</h2>
		{sections.map((section) => (
			<div
				className="space-y-2"
				key={section.title}
			>
				<h3 className="text-teal font-mono text-xs font-bold tracking-[2px] uppercase">
					{section.title}
				</h3>
				{section.paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		))}
	</section>
)

const Legal = () => {
	const { language, t } = useLanguage()
	const content = legal[language]

	return (
		<div
			className="bg-paper text-ink min-h-screen leading-[1.6]"
			lang={language}
		>
			<nav className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 pt-6 md:px-10">
				<a
					className="border-line text-ink border bg-white px-4 py-3 font-bold max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[13px]"
					href={ROUTES.home}
				>
					← {t("resumeBack")}
				</a>
				<LanguageSelect />
			</nav>
			<main className="mx-auto max-w-3xl space-y-12 px-5 py-10 md:px-10 md:py-16">
				<header className="space-y-2">
					<h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
						{content.title}
					</h1>
					<p className="text-muted font-mono text-xs">{content.lastUpdated}</p>
				</header>
				<LegalPart {...content.notice} />
				<LegalPart {...content.privacy} />
				<p className="text-muted text-sm italic">{content.prevailingVersion}</p>
			</main>
		</div>
	)
}

export default Legal
