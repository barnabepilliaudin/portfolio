import { LANGUAGES, type Language } from "@locales/Locale.type"
import { translate } from "@locales/translations"
import { atom, useAtom } from "jotai"

const languageAtom = atom<Language>(LANGUAGES.en)

const useLanguage = () => {
	const [language, setLanguage] = useAtom(languageAtom)
	const t = translate(language)

	return { language, setLanguage, t }
}

export default useLanguage
