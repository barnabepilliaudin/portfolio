import { atom, useAtom } from "jotai"

const menuAtom = atom(false)

const useMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(menuAtom)

	return { isMenuOpen, setIsMenuOpen }
}

export default useMenu
