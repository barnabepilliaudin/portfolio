import { LANGUAGES, type Language } from "@locales/Locale.type"
import { translate } from "@locales/translations"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { LANGUAGE_STORAGE_KEY } from "@/constants"

const languageAtom = atomWithStorage<Language>(LANGUAGE_STORAGE_KEY, LANGUAGES.en)

const useLanguage = () => {
	const [language, setLanguage] = useAtom(languageAtom)
	const t = translate(language)

	return { language, setLanguage, t }
}

export default useLanguage
