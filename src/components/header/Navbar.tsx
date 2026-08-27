import { map } from "remeda"

import useLanguage from "../../hooks/useLanguage"
import useMenu from "../../hooks/useMenu"

type NavbarItemProps = {
	onClick: () => void
	children: React.ReactNode
	href?: string
	as?: string
	type?: string
	"aria-label"?: string
	className?: string
}
const NavbarItem = ({ as: Component = "a", ...otherProps }: NavbarItemProps) => (
	<Component {...otherProps} />
)

const Navbar = () => {
	const { t, language, setLanguage } = useLanguage()
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	const handleSetIsOpenMenu = (value: boolean) => () => setIsMenuOpen(value)
	const handleChangeLanguage = () => setLanguage(language === "en" ? "fr" : "en")

	const navbarItems = [
		{
			label: t("work"),
			href: "#experience",
			onClick: handleSetIsOpenMenu(false),
		},
		{
			label: t("about"),
			href: "#profile",
			onClick: handleSetIsOpenMenu(false),
		},
		{
			label: t("resume"),
			href: language === "en" ? "/resume-en.html" : "/resume.html",
			onClick: handleSetIsOpenMenu(false),
		},
		{
			as: "button",
			type: "button",
			label: language === "en" ? "FR" : "EN",
			"aria-label": "Change language",
			className: "language-switch",
			onClick: handleChangeLanguage,
		},
		{
			label: t("talk"),
			href: "mailto:contact@barnabepilliaudin.fr",
			className: "nav-contact",
			onClick: handleSetIsOpenMenu(false),
		},
	]

	return (
		<nav
			id="main-navigation"
			className={isMenuOpen ? "menu-open" : ""}
			aria-label="Main navigation"
		>
			{map(navbarItems, ({ label, ...props }, count) => (
				<NavbarItem {...props} key={`navbarItem-${count}`}>
					{label}
				</NavbarItem>
			))}
		</nav>
	)
}

export default Navbar
