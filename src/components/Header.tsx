import { useState } from "react"

import useLanguage from "../hooks/useLanguage"

const Header = () => {
	const { language, setLanguage, t } = useLanguage()
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className="topbar">
			<a className="wordmark" href="#top" aria-label="Back to top">
				BP<span>.</span>
			</a>
			<button
				className="menu-toggle"
				type="button"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-expanded={menuOpen}
				aria-controls="main-navigation"
				aria-label={menuOpen ? "Close navigation" : "Open navigation"}
			>
				<span />
				<span />
				<span />
			</button>
			<nav
				id="main-navigation"
				className={menuOpen ? "menu-open" : ""}
				aria-label="Main navigation"
			>
				<a href="#experience" onClick={() => setMenuOpen(false)}>
					{t("work")}
				</a>
				<a href="#profile" onClick={() => setMenuOpen(false)}>
					{t("about")}
				</a>
				<a
					href={language === "en" ? "/resume-en.html" : "/resume.html"}
					onClick={() => setMenuOpen(false)}
				>
					{t("resume")}
				</a>
				<button
					className="language-switch"
					type="button"
					onClick={() => setLanguage(language === "en" ? "fr" : "en")}
					aria-label="Change language"
				>
					{language === "en" ? "FR" : "EN"}
				</button>
				<a
					className="nav-contact"
					href="mailto:contact@barnabepilliaudin.fr"
					onClick={() => setMenuOpen(false)}
				>
					{t("talk")} <span>↗</span>
				</a>
			</nav>
		</header>
	)
}

export default Header
