import CardTitle from "@components/ui/CardTitle"
import SectionTitle from "@components/ui/SectionTitle"

import CardMeta from "@/components/ui/CardMeta"
import { HTMLIds } from "@/utils/utils"
const AwsCertifications = () => (
	<div className="flex flex-col gap-3">
		<CardTitle>AWS Certified Solutions Architect - Associate</CardTitle>
		<CardMeta> 08/2026 - 08/2029 </CardMeta>
		<div
			data-iframe-width="150"
			data-iframe-height="270"
			data-share-badge-id="18c641be-0867-46fd-a27b-cfa68eba1739"
			data-share-badge-host="https://www.credly.com"
		></div>
		<script
			type="text/javascript"
			async
			src="//cdn.credly.com/assets/utilities/embed.js"
		></script>
	</div>
)
const Certifications = () => (
	<section
		className="py-1.5 md:py-6.25"
		id={HTMLIds.certifications}
	>
		<SectionTitle
			sectionId={2}
			sectionName="certifications"
		/>
		<AwsCertifications />
	</section>
)

export default Certifications
