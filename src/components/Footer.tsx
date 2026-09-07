import useLanguage from "@hooks/useLanguage"
import { keys, map } from "remeda"

import { PERSONAL_INFO } from "@/constants"
import { GIT_PLATFORMS } from "@/utils/git"

const EmailButton = () => (
	<a
		className="border-ink font-display mb-10 inline-block max-w-full border-b-2 text-xl font-semibold tracking-tight md:text-3xl lg:mb-30 lg:text-6xl"
		href={`mailto:${PERSONAL_INFO.email}`}
	>
		{PERSONAL_INFO.email} <span className="text-teal">↗</span>
	</a>
)

const GitLinks = () => (
	<>
		{map(keys(GIT_PLATFORMS), (platform) => (
			<a
				key={platform}
				className="text-s"
				href={PERSONAL_INFO.gitLinks[platform]}
				target="_blank"
				rel="noreferrer"
			>
				{platform} ↗
			</a>
		))}
	</>
)

const Footer = () => {
	const { t } = useLanguage()
	return (
		<footer className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:pt-16">
			<p className="text-teal font-mono text-sm font-medium">{t("contact")}</p>
			<EmailButton />
			<div className="border-line text-teal flex flex-wrap items-center justify-between gap-3 border-t py-5 pb-8 font-mono text-xs">
				<span>
					© {new Date().getFullYear()}
					{` . ${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
				</span>
				<span>{t("footer")}</span>
				<span className="flex gap-4">
					<GitLinks />
				</span>
			</div>
		</footer>
	)
}

export default Footer
