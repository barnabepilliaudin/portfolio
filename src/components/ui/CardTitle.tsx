import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CardTitleProps = {
	className?: string
	children: ReactNode
}

const CardTitle = ({ className, children }: CardTitleProps) => (
	<p className={twMerge("font-display text-3xl font-semibold pb-2", className)}>
		{children}
	</p>
)

export default CardTitle
