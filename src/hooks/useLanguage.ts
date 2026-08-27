import { atom, useAtom } from "jotai"

import { Languages, type Language } from "../locales/Locale.type"
import { translate } from "../locales/translations"

const languageAtom = atom<Language>(Languages.en)

const useLanguage = () => {
	const [language, setLanguage] = useAtom(languageAtom)
	const t = translate(language)

	return { language, setLanguage, t }
}

export default useLanguage
