import useLanguage from "@hooks/useLanguage"
import useMenu from "@hooks/useMenu"
import { map } from "remeda"

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
			className:
				"border-line max-w-8 text-center cursor-pointer appearance-none border font-mono text-xs font-medium text-ink md:px-2 md:py-1.5",
			onClick: handleChangeLanguage,
		},
		{
			label: t("talk"),
			href: "mailto:contact@barnabepilliaudin.fr",
			className: "border-b border-ink pb-1 max-md:border-b-0",
			onClick: handleSetIsOpenMenu(false),
		},
	]

	return (
		<nav
			id="main-navigation"
			className={`border-line bg-paper shadow-menu absolute top-18 right-5 left-5 z-10 flex flex-col items-stretch gap-0 border px-5 py-5 text-sm font-semibold md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${isMenuOpen ? "flex" : "hidden"}`}
			aria-label="Main navigation"
		>
			{map(navbarItems, ({ label, ...props }, count) => (
				<NavbarItem
					{...props}
					className={`hover:text-teal py-3 transition-colors duration-200 md:py-0 ${props.className ?? ""}`}
					key={`navbarItem-${count}`}
				>
					{label}
				</NavbarItem>
			))}
		</nav>
	)
}

export default Navbar
