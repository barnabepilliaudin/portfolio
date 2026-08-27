import useLanguage from "../hooks/useLanguage"

const Footer = () => {
	const { t } = useLanguage()
	return (
		<footer className="mx-auto max-w-7xl px-5 pt-18 pb-0 md:px-10 md:pt-28">
			<p className="text-teal font-mono text-sm font-medium">{t("contact")}</p>
			<a
				className="border-ink font-display mt-6 mb-20 inline-block max-w-full border-b-2 text-3xl font-semibold tracking-tight md:mb-30 md:text-6xl"
				href="mailto:contact@barnabepilliaudin.fr"
			>
				contact@barnabepilliaudin.fr <span className="text-teal">↗</span>
			</a>
			<div className="border-line text-muted flex flex-wrap justify-between gap-3 border-t py-5 pb-8 font-mono text-xs">
				<span>© 2026 Barnabé Pilliaudin</span>
				<span>{t("footer")}</span>
				<span className="flex gap-4">
					<a
						className="text-ink"
						href="https://github.com/BarnabePILLIAUDIN"
						target="_blank"
						rel="noreferrer"
					>
						GitHub ↗
					</a>
					<a
						className="text-ink"
						href="https://gitlab.com/barnabePILLIAUDIN"
						target="_blank"
						rel="noreferrer"
					>
						GitLab ↗
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
