import useLanguage from "@/hooks/useLanguage"
import type { LocaleKey } from "@/locales/Locale.type"
import { formatId } from "@/utils/utils"

type SectionTitleProps = {
	sectionId: number
	sectionName: LocaleKey
}
const SectionTitle = (props: SectionTitleProps) => {
	const { sectionId, sectionName } = props
	const { t } = useLanguage()
	return (
		<div className="mb-10 flex items-center gap-6">
			<p className="text-teal font-mono text-xs font-medium tracking-wide whitespace-nowrap uppercase">
				{formatId(sectionId)} / {t(sectionName)}
			</p>
			<span className="bg-line h-px w-full" />
		</div>
	)
}

export default SectionTitle
