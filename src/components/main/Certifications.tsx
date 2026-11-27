import CardTitle from "@components/ui/CardTitle"
import SectionTitle from "@components/ui/SectionTitle"
import useLanguage from "@hooks/useLanguage"

import CardMeta from "@/components/ui/CardMeta"
import {
	BADGE_SIZE_PX,
	CERTIFICATIONS,
	HTMLIds,
	SECTION_NUMBERS,
} from "@/constants"

const AwsCertifications = () => {
	const { t } = useLanguage()
	const { title, issuedOn, expiresOn, badgeUrl, badgeImage } =
		CERTIFICATIONS.awsSaa

	return (
		<div className="flex flex-col gap-3">
			<CardTitle>{title}</CardTitle>
			<CardMeta>
				{issuedOn} - {expiresOn}
			</CardMeta>
			<a
				className="flex w-fit flex-col items-center gap-2"
				href={badgeUrl}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={badgeImage}
					alt={`${title} badge`}
					width={BADGE_SIZE_PX}
					height={BADGE_SIZE_PX}
					loading="lazy"
				/>
				<span className="text-teal font-mono text-xs">
					{t("verifyBadge")} ↗
				</span>
			</a>
		</div>
	)
}

const Certifications = () => (
	<section
		className="py-1.5 md:py-6.25"
		id={HTMLIds.certifications}
	>
		<SectionTitle
			sectionId={SECTION_NUMBERS.certifications}
			sectionName="certifications"
		/>
		<AwsCertifications />
	</section>
)

export default Certifications
