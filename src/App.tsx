import { useState } from 'react'
import './App.css'

type Language = 'en' | 'fr'

const copy = {
  en: {
    work: 'Experience', about: 'Profile', resume: 'Resume', talk: "Let's talk",
    available: 'Available for a good challenge', hero: 'Barnabé', heroAccent: 'PILLIAUDIN',
    intro: "I'm Barnabé. I build web products with TypeScript, React, Node.js, and cloud tools, and I also work on the infrastructure that runs them.",
    seeWork: 'See my experience', viewResume: 'View resume', experience: 'Experience & impact',
    cynaFull: 'Full Stack Developer', cynaDevops: 'DevOps Engineer', jproject: 'Web & Mobile Developer',
    cynaFullMeta: 'January 2026 — October 2026 · Work-study · Clichy', cynaDevopsMeta: 'August 2024 — January 2026 · Work-study · Clichy', jprojectMeta: 'May 2023 — July 2024 · Internship then work-study · Cergy',
    cynaFullIntro: 'Building the full-stack platform that lets customers subscribe to a managed SOC.', cynaDevopsIntro: 'Making the infrastructure observable, repeatable, and easier for teams to operate.', jprojectIntro: 'Building web and mobile products for a platform that creates custom websites.',
    projects: 'Projects', pipeline: 'CI/CD pipeline', pipelineMeta: 'DevOps study project · Sup de Vinci · 2026', pipelineText: 'Designed a complete delivery chain: automated tests, vulnerability scanning, image builds, infrastructure as code, and Kubernetes deployment. I also developed the application being deployed.', shop: 'E-commerce website', shopMeta: 'Sup de Vinci · 2024', shopText: 'Built an online store with an administration interface, a Golang backend, and a Next.js frontend.', profile: 'A full-stack developer with 3 years of startup experience. I deliver features end to end, with a strong focus on code quality, security, and performance.', contact: 'Want to talk?', footer: 'Made with curiosity in France',
  },
  fr: {
    work: 'Expérience', about: 'Profil', resume: 'CV', talk: 'Me contacter',
    available: 'Disponible pour un beau challenge', hero: 'Barnabé', heroAccent: 'PILLIAUDIN',
    intro: "Je suis Barnabé. Je développe des produits web avec TypeScript, React, Node.js et des outils cloud, tout en travaillant sur l'infrastructure qui les fait tourner.",
    seeWork: 'Voir mon expérience', viewResume: 'Voir mon CV', experience: 'Expérience & impact',
    cynaFull: 'Développeur Full Stack', cynaDevops: 'DevOps Engineer', jproject: 'Développeur Web & Mobile',
    cynaFullMeta: 'Janvier 2026 — Octobre 2026 · Alternance · Clichy', cynaDevopsMeta: 'Août 2024 — Janvier 2026 · Alternance · Clichy', jprojectMeta: 'Mai 2023 — Juillet 2024 · Stage puis alternance · Cergy',
    cynaFullIntro: 'Développement full stack de la plateforme permettant aux clients de souscrire au SOC managé.', cynaDevopsIntro: "Rendre l'infrastructure observable, reproductible et plus simple à opérer pour les équipes.", jprojectIntro: 'Développement de produits web et mobiles pour une plateforme de création de sites personnalisés.',
    projects: 'Projets', pipeline: 'Pipeline CI/CD', pipelineMeta: "Projet d'étude DevOps · Sup de Vinci · 2026", pipelineText: "Conception d'une chaîne complète : tests automatisés, scan de vulnérabilités, build d'images, infrastructure as code et déploiement Kubernetes. Développement de l'application déployée.", shop: 'Site e-commerce', shopMeta: 'Sup de Vinci · 2024', shopText: "Création d'un site e-commerce avec interface d'administration, backend Golang et frontend Next.js.", profile: "Développeur Full Stack (TypeScript, React / Next.js, Vue / Nuxt, Node.js) avec 3 ans d'expérience en environnement startup. Je livre des fonctionnalités de bout en bout, du développement à la mise en production, avec une exigence forte sur la qualité de code, la sécurité et la performance.", contact: 'On discute ?', footer: 'Fait avec curiosité en France',
  },
}

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Back to top">BP<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          <span /><span /><span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'menu-open' : ''} aria-label="Main navigation">
          <a href="#experience" onClick={() => setMenuOpen(false)}>{t.work}</a><a href="#profile" onClick={() => setMenuOpen(false)}>{t.about}</a><a href={language === 'en' ? '/resume-en.html' : '/resume.html'} onClick={() => setMenuOpen(false)}>{t.resume}</a>
          <button className="language-switch" type="button" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} aria-label="Change language">{language === 'en' ? 'FR' : 'EN'}</button>
          <a className="nav-contact" href="mailto:contact@barnabepilliaudin.fr" onClick={() => setMenuOpen(false)}>{t.talk} <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> {t.available}</p><h1>{t.hero}<br /><em>{t.heroAccent}</em></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-dark" href="#experience">{t.seeWork} <span>↓</span></a><a className="button button-outline" href={language === 'en' ? '/resume-en.html' : '/resume.html'}>{t.viewResume} <span>↗</span></a></div></div>
          <div className="hero-console" aria-label="Technology overview"><div className="console-bar"><span /><span /><span /><b>barnabe.dev / stack</b></div><div className="console-body"><p><i>const</i> developer = &#123;</p><p className="indent">name: <strong>'Barnabé'</strong>,</p><p className="indent">stack: [<strong>'TypeScript'</strong>,</p><p className="indent double"><strong>'Golang'</strong>, <strong>'Node.js'</strong>],</p><p className="indent">toolchain: [<strong>'Hono'</strong>,</p><p className="indent double"><strong>'Kysely'</strong>, <strong>'Remeda'</strong>,</p><p className="indent double"><strong>'pnpm'</strong>, <strong>'Fiber'</strong>,</p><p className="indent double"><strong>'GORM'</strong>, <strong>'oxlint'</strong>,</p><p className="indent double"><strong>'golint'</strong>],</p><p className="indent">ships: <strong>true</strong></p><p>&#125;</p><p className="console-cursor">▮</p></div><div className="console-caption">FULL STACK / DEVOPS / AI</div></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading"><p className="eyebrow">01 / {t.experience}</p><span className="section-rule" /></div>
          <p className="section-lead">{t.profile}</p>
          <div className="experience-list">
            <article className="experience-row"><span className="experience-date">2026</span><div><h2>{t.cynaFull}</h2><p className="experience-meta">{t.cynaFullMeta}</p><p>{t.cynaFullIntro}</p><ul><li>{language === 'fr' ? "Automatisation du support par agents IA Mastra : analyse du ticket, choix de l'action et contrôle des droits." : 'Automated support with Mastra AI agents: ticket analysis, action selection, and requester authorization.'}</li><li>{language === 'fr' ? 'Contribution à un SOAR interne traitant plus de 90 % des alertes.' : 'Contributed to an internal SOAR processing more than 90% of alerts.'}</li><li>{language === 'fr' ? 'Création de règles Cursor, skills et personas Claude pour améliorer le code généré et réduire les tokens.' : 'Created Cursor rules, skills, and Claude personas to improve generated code and reduce token usage.'}</li></ul></div><span className="row-arrow">↗</span></article>
            <article className="experience-row"><span className="experience-date">2024 — 2026</span><div><h2>{t.cynaDevops}</h2><p className="experience-meta">{t.cynaDevopsMeta}</p><p>{t.cynaDevopsIntro}</p><ul><li>{language === 'fr' ? 'Déploiement automatisé de services internes avec Docker et Kubernetes.' : 'Deployed internal tools with Docker and Kubernetes, with automated releases.'}</li><li>{language === 'fr' ? 'Playbook Ansible et module Terraform pour déployer des VM Scaleway de façon sécurisée.' : 'Built an Ansible playbook and Terraform module for secure, pre-configured Scaleway VMs.'}</li><li>{language === 'fr' ? 'Exporteur Prometheus, monitoring Slack et automatisations internes avec n8n.' : 'Built a Prometheus exporter, Slack monitoring, and internal n8n automations.'}</li></ul></div><span className="row-arrow">↗</span></article>
            <article className="experience-row"><span className="experience-date">2023 — 2024</span><div><h2>{t.jproject}</h2><p className="experience-meta">{t.jprojectMeta}</p><p>{t.jprojectIntro}</p><ul><li>{language === 'fr' ? 'Plateforme Nuxt.js / Django, puis migration du frontend vers Next.js.' : 'Built a Nuxt.js / Django website platform, then migrated the frontend to Next.js.'}</li><li>{language === 'fr' ? "Développement de l'application mobile associée en Flutter." : 'Developed the companion mobile application in Flutter.'}</li><li>{language === 'fr' ? 'Livraison de fonctionnalités majeures sans régression ni bug.' : 'Shipped major features without regressions or production bugs.'}</li></ul></div><span className="row-arrow">↗</span></article>
          </div>
        </section>

        <section className="projects-section" id="profile"><div className="section-heading"><p className="eyebrow">02 / {t.projects}</p><span className="section-rule" /></div><div className="project-notes"><article><div className="project-number">01</div><h2>{t.pipeline}</h2><p className="project-meta-line">{t.pipelineMeta}</p><p>{t.pipelineText}</p></article><article><div className="project-number">02</div><h2>{t.shop}</h2><p className="project-meta-line">{t.shopMeta}</p><p>{t.shopText} <a href="https://github.com/KrispyTech/airneis" target="_blank" rel="noreferrer">GitHub ↗</a></p></article></div></section>
      </main>

      <footer><p>{t.contact}</p><a href="mailto:contact@barnabepilliaudin.fr">contact@barnabepilliaudin.fr <span>↗</span></a><div className="footer-bottom"><span>© 2026 Barnabé Pilliaudin</span><span>{t.footer}</span><span className="social-links"><a href="https://github.com/BarnabePILLIAUDIN" target="_blank" rel="noreferrer">GitHub ↗</a> · <a href="https://gitlab.com/barnabePILLIAUDIN" target="_blank" rel="noreferrer">GitLab ↗</a></span></div></footer>
    </div>
  )
}

export default App
