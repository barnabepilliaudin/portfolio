import useLanguage from "../hooks/useLanguage"

const Main = () => {
	const { t, language } = useLanguage()

	return (
		<main id="top" className="mx-auto max-w-7xl px-5 md:px-10">
			<section className="relative flex min-h-0 flex-col items-stretch md:min-h-148 md:flex-row md:items-center">
				<div className="z- relative animate-[enter_.8s_both_ease-out] py-10 md:py-16 md:pb-20">
					<p className="text-teal font-mono text-xs font-medium tracking-wide uppercase">
						<span className="bg-teal shadow-status mr-2 inline-block h-2 w-2 rounded-full align-middle" />{" "}
						{t("available")}
					</p>
					<h1 className="font-display my-5 max-w-3xl text-6xl leading-none font-semibold tracking-tighter md:my-7 md:mb-6 md:text-8xl">
						{t("hero")}
						<br />
						<em className="text-teal not-italic">{t("heroAccent")}</em>
					</h1>
					<p className="text-muted max-w-lg text-base leading-relaxed md:text-lg">{t("intro")}</p>
					<div className="mt-7 flex items-center gap-3.5 md:mt-9 md:gap-7">
						<a
							className="bg-ink inline-flex flex-1 items-center justify-between gap-6 px-3.5 py-3.5 text-xs font-bold text-white md:flex-none md:px-4.5 md:py-4"
							href="#experience"
						>
							<span className="text-white">{t("seeWork")}</span>{" "}
							<span className="text-lime text-base">↓</span>
						</a>
						<a
							className="border-ink inline-flex flex-1 items-center justify-between gap-6 border px-3.5 py-3.5 text-xs font-bold md:flex-none md:px-4.5 md:py-4"
							href={language === "en" ? "/resume-en.html" : "/resume.html"}
						>
							<span>{t("viewResume")}</span> <span className="text-teal text-base">↗</span>
						</a>
					</div>
				</div>
				<div
					className="bg-navy shadow-console mt-2.5 mb-20 w-full text-slate-100 md:mt-0 md:mb-0 md:ml-auto md:w-96"
					aria-label="Technology overview"
				>
					<div className="flex items-center gap-1 border-b border-slate-600 px-4 py-3 font-mono text-xs text-slate-400">
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
						<p className="pl-6">
							stack: [<strong>'TypeScript'</strong>,
						</p>
						<p className="pl-12">
							<strong>'Golang'</strong>, <strong>'Node.js'</strong>],
						</p>
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
			</section>

			<section className="border-line border-b py-16.25 md:py-25" id="experience">
				<div className="mb-10 flex items-center gap-6">
					<p className="text-teal font-mono text-xs font-medium tracking-wide whitespace-nowrap uppercase">
						01 / {t("experience")}
					</p>
					<span className="bg-line h-px w-full" />
				</div>
				<p className="text-muted mb-10 max-w-2xl text-lg leading-normal md:mb-14 md:text-xl">
					{t("profile")}
				</p>
				<div className="border-ink border-t">
					<article className="border-line grid grid-cols-12 gap-2 border-b py-7.5 md:gap-6">
						<span className="text-muted col-span-12 font-mono text-xs md:col-span-2 md:pt-1">
							2026
						</span>
						<div className="col-span-11 min-w-0 md:col-span-9">
							<h2 className="font-display text-xl font-semibold md:text-2xl">{t("cynaFull")}</h2>
							<p className="text-teal mt-1 mb-5 font-mono text-xs">{t("cynaFullMeta")}</p>
							<p className="text-muted max-w-3xl text-sm">{t("cynaFullIntro")}</p>
							<ul className="text-muted mt-5 list-disc pl-5 text-sm leading-relaxed">
								<li>
									{language === "fr"
										? "Automatisation du support par agents IA Mastra : analyse du ticket, choix de l'action et contrôle des droits."
										: "Automated support with Mastra AI agents: ticket analysis, action selection, and requester authorization."}
								</li>
								<li>
									{language === "fr"
										? "Contribution à un SOAR interne traitant plus de 90 % des alertes."
										: "Contributed to an internal SOAR processing more than 90% of alerts."}
								</li>
								<li>
									{language === "fr"
										? "Création de règles Cursor, skills et personas Claude pour améliorer le code généré et réduire les tokens."
										: "Created Cursor rules, skills, and Claude personas to improve generated code and reduce token usage."}
								</li>
							</ul>
						</div>
						<span className="text-teal col-span-1 text-2xl">↗</span>
					</article>
					<article className="border-line grid grid-cols-12 gap-2 border-b py-7.5 md:gap-6">
						<span className="text-muted col-span-12 font-mono text-xs md:col-span-2 md:pt-1">
							2024 — 2026
						</span>
						<div className="col-span-11 min-w-0 md:col-span-9">
							<h2 className="font-display text-xl font-semibold md:text-2xl">{t("cynaDevops")}</h2>
							<p className="text-teal mt-1 mb-5 font-mono text-xs">{t("cynaDevopsMeta")}</p>
							<p className="text-muted max-w-3xl text-sm">{t("cynaDevopsIntro")}</p>
							<ul className="text-muted mt-5 list-disc pl-5 text-sm leading-relaxed">
								<li>
									{language === "fr"
										? "Déploiement automatisé de services internes avec Docker et Kubernetes."
										: "Deployed internal tools with Docker and Kubernetes, with automated releases."}
								</li>
								<li>
									{language === "fr"
										? "Playbook Ansible et module Terraform pour déployer des VM Scaleway de façon sécurisée."
										: "Built an Ansible playbook and Terraform module for secure, pre-configured Scaleway VMs."}
								</li>
								<li>
									{language === "fr"
										? "Exporteur Prometheus, monitoring Slack et automatisations internes avec n8n."
										: "Built a Prometheus exporter, Slack monitoring, and internal n8n automations."}
								</li>
							</ul>
						</div>
						<span className="text-teal col-span-1 text-2xl">↗</span>
					</article>
					<article className="border-line grid grid-cols-12 gap-2 border-b py-7.5 md:gap-6">
						<span className="text-muted col-span-12 font-mono text-xs md:col-span-2 md:pt-1">
							2023 — 2024
						</span>
						<div className="col-span-11 min-w-0 md:col-span-9">
							<h2 className="font-display text-xl font-semibold md:text-2xl">{t("jproject")}</h2>
							<p className="text-teal mt-1 mb-5 font-mono text-xs">{t("jprojectMeta")}</p>
							<p className="text-muted max-w-3xl text-sm">{t("jprojectIntro")}</p>
							<ul className="text-muted mt-5 list-disc pl-5 text-sm leading-relaxed">
								<li>
									{language === "fr"
										? "Plateforme Nuxt.js / Django, puis migration du frontend vers Next.js."
										: "Built a Nuxt.js / Django website platform, then migrated the frontend to Next.js."}
								</li>
								<li>
									{language === "fr"
										? "Développement de l'application mobile associée en Flutter."
										: "Developed the companion mobile application in Flutter."}
								</li>
								<li>
									{language === "fr"
										? "Livraison de fonctionnalités majeures sans régression ni bug."
										: "Shipped major features without regressions or production bugs."}
								</li>
							</ul>
						</div>
						<span className="text-teal col-span-1 text-2xl">↗</span>
					</article>
				</div>
			</section>

			<section className="border-line border-b py-16 md:py-24" id="profile">
				<div className="mb-10 flex items-center gap-6">
					<p className="text-teal font-mono text-xs font-medium tracking-wide whitespace-nowrap uppercase">
						02 / {t("projects")}
					</p>
					<span className="bg-line h-px w-full" />
				</div>
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
					<article className="border-ink border-t pt-4">
						<div className="text-teal mb-8 font-mono text-xs">01</div>
						<h2 className="font-display text-3xl font-semibold">{t("pipeline")}</h2>
						<p className="text-teal my-2 mb-5 font-mono text-xs">{t("pipelineMeta")}</p>
						<p className="text-muted max-w-lg leading-relaxed">{t("pipelineText")}</p>
					</article>
					<article className="border-ink border-t pt-4">
						<div className="text-teal mb-8 font-mono text-xs">02</div>
						<h2 className="font-display text-3xl font-semibold">{t("shop")}</h2>
						<p className="text-teal my-2 mb-5 font-mono text-xs">{t("shopText")}</p>
						<p className="text-muted max-w-lg leading-relaxed">
							{t("shopText")}
							<a href="https://github.com/KrispyTech/airneis" target="_blank" rel="noreferrer">
								<span className="text-teal">GitHub ↗</span>
							</a>
						</p>
					</article>
				</div>
			</section>
		</main>
	)
}

export default Main
