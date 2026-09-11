import type { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type CardMetaProps = PropsWithChildren<{ className?: string }>

const CardMeta = ({ className, children }: CardMetaProps) => (
	<p className={twMerge("text-teal mt-1 mb-5 font-mono text-xs", className)}>
		{children}
	</p>
)

export default CardMeta
