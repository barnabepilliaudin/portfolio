import useLanguage from "@hooks/useLanguage"
import { LANGUAGES, type Language } from "@locales/Locale.type"
import { map, values } from "remeda"

const LanguageSelect = () => {
	const { language, setLanguage, t } = useLanguage()

	return (
		<select
			className="border-line text-ink cursor-pointer appearance-none border bg-white px-4 py-3 font-bold max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[13px]"
			aria-label={t("resumeLanguage")}
			value={language}
			onChange={(event) => setLanguage(event.target.value as Language)}
		>
			{map(values(LANGUAGES), (option) => (
				<option
					key={option}
					value={option}
				>
					{option.toUpperCase()}
				</option>
			))}
		</select>
	)
}

export default LanguageSelect
