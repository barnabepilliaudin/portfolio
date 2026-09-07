import experiences from "@content/experiences"
import { projects } from "@content/projects"
import useLanguage from "@hooks/useLanguage"
import { LANGUAGES, type Language, type LocaleKey } from "@locales/Locale.type"
import { map, values } from "remeda"

import { CV_FILE_NAME, PERSONAL_INFO, ROUTES } from "@/constants"

const skillGroups: [LocaleKey, LocaleKey][] = [
	["resumeFrontEnd", "resumeFrontEndSkills"],
	["resumeBackEnd", "resumeBackEndSkills"],
	["resumeDatabases", "resumeDatabaseSkills"],
	["resumeDevOpsCloud", "resumeDevOpsCloudSkills"],
	["resumeAi", "resumeAiSkills"],
	["resumeTools", "resumeToolsSkills"],
]

const educationItems: [string, LocaleKey, LocaleKey][] = [
	["2024 — 2026", "resumeMaster", "resumeWorkStudy"],
	["2023 — 2024", "resumeBachelor", "resumeWorkStudy"],
	["2021 — 2023", "resumePreparatory", "resumeSupDeVinci"],
]

type ResumeSectionItem = { title?: string; content: React.ReactNode }

const ResumeSection = ({ sections }: { sections: ResumeSectionItem[] }) => (
	<>
		{sections.map(({ title, content }, index) => (
			<section
				className="mb-7 space-y-3.5"
				key={`${title}-${index}`}
			>
				{title && (
					<h2 className="border-line text-teal border-b pb-2.5 text-[13px] font-bold tracking-[2px] uppercase">
						{title}
					</h2>
				)}
				{content}
			</section>
		))}
	</>
)

const ResumeActions = () => {
	const { language, setLanguage, t } = useLanguage()

	return (
		<div className="fixed top-5 right-5 z-1 flex gap-2 max-[700px]:top-3 max-[700px]:right-3 print:hidden">
			<a
				className="border-line text-ink fixed top-5 left-5 border bg-white px-4 py-3 font-bold max-[700px]:top-3 max-[700px]:left-3 max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[13px]"
				href={ROUTES.home}
			>
				← {t("resumeBack")}
			</a>
			<select
				className="border-line text-ink cursor-pointer appearance-none border bg-white px-4 py-3 font-bold max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[13px]"
				aria-label={t("resumeLanguage")}
				value={language}
				onChange={(event) => setLanguage(event.target.value as Language)}
			>
				{map(values(LANGUAGES), (option) => (
					<option
						key={option}
						value={option}
					>
						{option.toUpperCase()}
					</option>
				))}
			</select>
			<a
				className="bg-teal px-4 py-3 font-bold text-white! max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[13px]"
				href={`/${CV_FILE_NAME}`}
				download={CV_FILE_NAME}
			>
				{t("resumeDownload")}
			</a>
		</div>
	)
}

const ResumeHeader = () => {
	const { t } = useLanguage()

	return (
		<header className="border-teal border-b-[3px] pb-7">
			<h1 className="m-0 text-[44px] tracking-[-2px] max-[700px]:text-4xl">
				{PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
			</h1>
			<p className="text-teal my-2 mb-3 font-bold tracking-[3px] uppercase">
				{t("resumeRole")}
			</p>
			<p className="text-muted">
				{PERSONAL_INFO.city} ({PERSONAL_INFO.zipCode}), {PERSONAL_INFO.country}
				<br />
				<div className="flex gap-2">
					<a
						className="text-teal!"
						href={`mailto:${PERSONAL_INFO.email}`}
					>
						Email
					</a>
					.
					<a
						className="text-teal!"
						href={PERSONAL_INFO.linkedIn}
					>
						LinkedIn
					</a>
					·
					<a
						className="text-teal!"
						href={PERSONAL_INFO.gitLinks.github}
					>
						GitHub
					</a>
					·
					<a
						className="text-teal!"
						href={PERSONAL_INFO.gitLinks.gitlab}
					>
						Gitlab
					</a>
				</div>
			</p>
		</header>
	)
}

const ResumeSidebar = () => {
	const { t } = useLanguage()
	const sections = [
		{
			title: t("resumeSkills"),
			content: skillGroups.map(([name, skills]) => (
				<p key={name}>
					<b>{t(name)}</b>
					<br />
					{t(skills)}
				</p>
			)),
		},
		{
			title: t("resumeEducation"),
			content: educationItems.map(([period, degree, school]) => (
				<p key={period}>
					<b>{period}</b>
					<br />
					<b>{t(degree)}</b>
					<br />
					<span className="text-muted">{t(school)}</span>
				</p>
			)),
		},
		{ title: t("resumeLanguages"), content: <p>{t("resumeLanguagesText")}</p> },
		{ title: t("resumeInterests"), content: <p>{t("resumeInterestsText")}</p> },
	]

	return (
		<aside className="max-[700px]:mb-8.5">
			<ResumeSection sections={sections} />
		</aside>
	)
}

const ResumeExperience = () => {
	const { t } = useLanguage()

	return (
		<ResumeSection
			sections={[
				{
					title: t("resumeExperience"),
					content: experiences.map((experience) => (
						<div
							className="mb-6.75"
							key={experience.name}
						>
							<h3 className="m-0 text-[19px]">
								{t(experience.name)} · {experience.period}
							</h3>
							<p className="text-muted my-0.75 mb-2.5 text-[13px]">
								{t(experience.meta)}
							</p>
							<ul className="space-y-1.75">
								{experience.tasks.map((task) => (
									<li key={task}>{t(task)}</li>
								))}
							</ul>
						</div>
					)),
				},
			]}
		/>
	)
}

const ResumeProjects = () => {
	const { t } = useLanguage()

	return (
		<ResumeSection
			sections={[
				{
					title: t("projects"),
					content: projects.map((project) => (
						<p key={project.name}>
							<b>{t(project.name)}</b> · {t(project.meta)}
							<br />
							{t(project.description)}
							<a
								className="text-teal"
								href={project.link.url}
							>
								{project.link.platform} ↗
							</a>
						</p>
					)),
				},
			]}
		/>
	)
}

const ResumeMain = () => {
	const { t } = useLanguage()

	return (
		<main className="space-y-0">
			<ResumeSection
				sections={[
					{ content: <p>{t("profile")}</p> },
					{ content: <ResumeExperience /> },
					{ content: <ResumeProjects /> },
				]}
			/>
		</main>
	)
}

const Resume = () => {
	const { language } = useLanguage()

	return (
		<div
			className="bg-paper text-ink min-h-screen font-[Arial,sans-serif] text-base leading-[1.55]"
			lang={language}
		>
			<ResumeActions />
			<article className="mx-auto my-10 max-w-240 bg-white p-14 px-16 max-[700px]:m-0 max-[700px]:px-5.5 max-[700px]:pt-17.5 max-[700px]:pb-8 print:m-0 print:px-0 print:py-5">
				<ResumeHeader />
				<div className="grid grid-cols-[220px_minmax(0,1fr)] gap-12 pt-8.5 max-[700px]:block">
					<ResumeSidebar />
					<ResumeMain />
				</div>
			</article>
		</div>
	)
}

export default Resume
