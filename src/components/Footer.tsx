import useLanguage from "@hooks/useLanguage"
import { keys, map } from "remeda"

import { PERSONAL_INFO } from "@/constants"
import { GIT_PLATFORMS } from "@/utils/git"

const EmailButton = () => (
	<a
		className="border-ink font-display mt-6 mb-20 inline-block max-w-full border-b-2 text-3xl font-semibold tracking-tight md:mb-30 md:text-6xl"
		href={`mailto:${PERSONAL_INFO.email}`}
	>
		{PERSONAL_INFO.email} <span className="text-teal">↗</span>
	</a>
)

const GitLinks = () => (
	<>
		{map(keys(GIT_PLATFORMS), (platform) => {
			;<a
				className="text-ink"
				href={PERSONAL_INFO.gitLinks[platform]}
				target="_blank"
				rel="noreferrer"
			>
				{platform} ↗
			</a>
		})}
	</>
)

const Footer = () => {
	const { t } = useLanguage()
	return (
		<footer className="mx-auto max-w-7xl px-5 pt-18 pb-0 md:px-10 md:pt-28">
			<p className="text-teal font-mono text-sm font-medium">{t("contact")}</p>
			<EmailButton />
			<div className="border-line text-muted flex flex-wrap justify-between gap-3 border-t py-5 pb-8 font-mono text-xs">
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
