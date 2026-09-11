import type { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type CardDescription = PropsWithChildren<{ className?: string }>

const CardDescription = ({ className, children }: CardDescription) => (
	<p className={twMerge("text-muted max-w-lg leading-relaxed py-2", className)}>
		{children}
	</p>
)

export default CardDescription
