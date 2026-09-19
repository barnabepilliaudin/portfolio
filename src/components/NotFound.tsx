const NotFound = () => (
	<main className="bg-paper text-ink flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
		<p className="text-teal font-mono text-xs font-bold tracking-[2px] uppercase">
			404
		</p>
		<h1 className="font-display text-5xl font-semibold">Page not found</h1>
		<p className="text-muted">The page you are looking for does not exist.</p>
		<a
			className="bg-ink px-4 py-3 text-xs font-bold text-white!"
			href="/"
		>
			Back to home
		</a>
	</main>
)

export default NotFound
