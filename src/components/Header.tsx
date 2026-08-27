import useMenu from "../hooks/useMenu"
import Navbar from "./header/Navbar"

const Header = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)
	const ariaLabel = isMenuOpen ? "Close navigation" : "Open navigation"

	return (
		<header className="topbar">
			<a className="wordmark" href="#top" aria-label="Back to top">
				BP<span>.</span>
			</a>
			<button
				className="menu-toggle"
				type="button"
				onClick={toggleIsMenuOpen}
				aria-expanded={isMenuOpen}
				aria-controls="main-navigation"
				aria-label={ariaLabel}
			>
				{/* Burger Icon */}
				<span />
				<span />
				<span />
			</button>
			<Navbar />
		</header>
	)
}

export default Header
