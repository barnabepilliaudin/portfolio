import Navbar from "@components/header/Navbar"
import useMenu from "@hooks/useMenu"

const Header = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)
	const ariaLabel = isMenuOpen ? "Close navigation" : "Open navigation"

	return (
		<header className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:h-22 md:px-10">
			<a
				className="font-display text-2xl font-bold tracking-tight"
				href="#top"
				aria-label="Back to top"
			>
				BP<span className="text-teal">.</span>
			</a>
			<button
				className="border-line inline-flex size-10 cursor-pointer flex-col justify-center gap-1 border bg-transparent px-2 py-2 md:hidden"
				type="button"
				onClick={toggleIsMenuOpen}
				aria-expanded={isMenuOpen}
				aria-controls="main-navigation"
				aria-label={ariaLabel}
			>
				{/* Burger Icon */}
				<span
					className={`bg-ink block h-0.5 w-6 transition duration-200 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
				/>
				<span
					className={`bg-ink block h-0.5 w-6 transition duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
				/>
				<span
					className={`bg-ink block h-0.5 w-6 transition duration-200 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
				/>
			</button>
			<Navbar />
		</header>
	)
}

export default Header
