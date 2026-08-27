import useLanguage from "../hooks/useLanguage"

const Footer = () => {
	const { t } = useLanguage()
	return (
		<footer>
			<p>{t("contact")}</p>
			<a href="mailto:contact@barnabepilliaudin.fr">
				contact@barnabepilliaudin.fr <span>↗</span>
			</a>
			<div className="footer-bottom">
				<span>© 2026 Barnabé Pilliaudin</span>
				<span>{t("footer")}</span>
				<span className="social-links">
					<a href="https://github.com/BarnabePILLIAUDIN" target="_blank" rel="noreferrer">
						GitHub ↗
					</a>
					<a href="https://gitlab.com/barnabePILLIAUDIN" target="_blank" rel="noreferrer">
						GitLab ↗
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
