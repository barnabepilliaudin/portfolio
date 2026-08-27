import useLanguage from "../hooks/useLanguage"

const Main = () => {
	const { t, language } = useLanguage()

	return (
		<main id="top">
			<section className="hero-section">
				<div className="hero-copy">
					<p className="eyebrow">
						<span className="status-dot" /> {t("available")}
					</p>
					<h1>
						{t("hero")}
						<br />
						<em>{t("heroAccent")}</em>
					</h1>
					<p className="hero-intro">{t("intro")}</p>
					<div className="hero-actions">
						<a className="button button-dark" href="#experience">
							{t("seeWork")} <span>↓</span>
						</a>
						<a
							className="button button-outline"
							href={language === "en" ? "/resume-en.html" : "/resume.html"}
						>
							{t("viewResume")} <span>↗</span>
						</a>
					</div>
				</div>
				<div className="hero-console" aria-label="Technology overview">
					<div className="console-bar">
						<span />
						<span />
						<span />
						<b>barnabe.dev / stack</b>
					</div>
					<div className="console-body">
						<p>
							<i>const</i> developer = &#123;
						</p>
						<p className="indent">
							name: <strong>'Barnabé'</strong>,
						</p>
						<p className="indent">
							stack: [<strong>'TypeScript'</strong>,
						</p>
						<p className="indent double">
							<strong>'Golang'</strong>, <strong>'Node.js'</strong>],
						</p>
						<p className="indent">
							toolchain: [<strong>'Hono'</strong>,
						</p>
						<p className="indent double">
							<strong>'Kysely'</strong>, <strong>'Remeda'</strong>,
						</p>
						<p className="indent double">
							<strong>'pnpm'</strong>, <strong>'Fiber'</strong>,
						</p>
						<p className="indent double">
							<strong>'GORM'</strong>, <strong>'oxlint'</strong>,
						</p>
						<p className="indent double">
							<strong>'golint'</strong>],
						</p>
						<p className="indent">
							ships: <strong>true</strong>
						</p>
						<p>&#125;</p>
						<p className="console-cursor">▮</p>
					</div>
					<div className="console-caption">FULL STACK / DEVOPS / AI</div>
				</div>
			</section>

			<section className="experience-section" id="experience">
				<div className="section-heading">
					<p className="eyebrow">01 / {t("experience")}</p>
					<span className="section-rule" />
				</div>
				<p className="section-lead">{t("profile")}</p>
				<div className="experience-list">
					<article className="experience-row">
						<span className="experience-date">2026</span>
						<div>
							<h2>{t("cynaFull")}</h2>
							<p className="experience-meta">{t("cynaFullMeta")}</p>
							<p>{t("cynaFullIntro")}</p>
							<ul>
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
						<span className="row-arrow">↗</span>
					</article>
					<article className="experience-row">
						<span className="experience-date">2024 — 2026</span>
						<div>
							<h2>{t("cynaDevops")}</h2>
							<p className="experience-meta">{t("cynaDevopsMeta")}</p>
							<p>{t("cynaDevopsIntro")}</p>
							<ul>
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
						<span className="row-arrow">↗</span>
					</article>
					<article className="experience-row">
						<span className="experience-date">2023 — 2024</span>
						<div>
							<h2>{t("jproject")}</h2>
							<p className="experience-meta">{t("jprojectMeta")}</p>
							<p>{t("jprojectIntro")}</p>
							<ul>
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
						<span className="row-arrow">↗</span>
					</article>
				</div>
			</section>

			<section className="projects-section" id="profile">
				<div className="section-heading">
					<p className="eyebrow">02 / {t("projects")}</p>
					<span className="section-rule" />
				</div>
				<div className="project-notes">
					<article>
						<div className="project-number">01</div>
						<h2>{t("pipeline")}</h2>
						<p className="project-meta-line">{t("pipelineMeta")}</p>
						<p>{t("pipelineText")}</p>
					</article>
					<article>
						<div className="project-number">02</div>
						<h2>{t("shop")}</h2>
						<p className="project-meta-line">{t("shopText")}</p>
						<p>
							{t("shopText")}
							<a href="https://github.com/KrispyTech/airneis" target="_blank" rel="noreferrer">
								GitHub ↗
							</a>
						</p>
					</article>
				</div>
			</section>
		</main>
	)
}

export default Main
