const Stack = () => (
	<>
		<p className="pl-6">
			stack: [<strong>'TypeScript'</strong>,
		</p>
		<p className="pl-12">
			<strong>'Golang'</strong>, <strong>'Node.js'</strong>],
		</p>
	</>
)

const Toolchain = () => (
	<>
		<p className="pl-6">
			toolchain: [<strong>'Hono'</strong>,
		</p>
		<p className="pl-12">
			<strong>'Kysely'</strong>, <strong>'Remeda'</strong>,
		</p>
		<p className="pl-12">
			<strong>'pnpm'</strong>, <strong>'Fiber'</strong>,
		</p>
		<p className="pl-12">
			<strong>'GORM'</strong>, <strong>'oxlint'</strong>,
		</p>
		<p className="pl-12">
			<strong>'golint'</strong>],
		</p>
	</>
)

const Console = () => (
	<div
		className="bg-navy shadow-console mt-2.5 mb-20 w-full text-slate-100 md:mt-0 md:mb-0 md:ml-auto md:w-96"
		aria-label="Technology overview"
	>
		<div className="flex items-center gap-1 border-b border-slate-600 px-4 py-3 font-mono text-xs text-slate-400">
			{/* The MAC OS Buttons on the top left */}
			<span className="h-2 w-2 rounded-full bg-[#e06b5f]" />
			<span className="h-2 w-2 rounded-full bg-[#e5be62]" />
			<span className="h-2 w-2 rounded-full bg-[#76b99c]" />
			<b className="ml-auto font-normal">barnabe.dev / stack</b>
		</div>
		<div className="[&_strong]:text-lime px-6 py-7 pb-6 font-mono text-sm leading-loose [&_i]:text-fuchsia-300 [&_i]:not-italic [&_strong]:font-normal">
			<p>
				<i>const</i> developer = &#123;
			</p>
			<p className="pl-6">
				name: <strong>'Barnabé'</strong>,
			</p>
			<Stack />
			<Toolchain />
			<p className="pl-6">
				ships: <strong>true</strong>
			</p>
			<p>&#125;</p>
			<p className="text-teal mt-3">▮</p>
		</div>
		<div className="text-lime border-t border-slate-600 px-4 py-3 font-mono text-xs tracking-wide">
			FULL STACK / DEVOPS / AI
		</div>
	</div>
)

export default Console
