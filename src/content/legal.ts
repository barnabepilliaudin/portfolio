import type { Language } from "@locales/Locale.type"

import { HOSTING_INFO, LANGUAGE_STORAGE_KEY, PERSONAL_INFO } from "@/constants"

export type LegalSection = { title: string; paragraphs: string[] }

export type LegalPage = {
	title: string
	lastUpdated: string
	notice: { title: string; sections: LegalSection[] }
	privacy: { title: string; sections: LegalSection[] }
	prevailingVersion: string
}

const LAST_UPDATED = { fr: "27 novembre 2026", en: "November 27, 2026" }

const fullName = `${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`
const { email } = PERSONAL_INFO
const host = `${HOSTING_INFO.name}, ${HOSTING_INFO.address}`

export const legal: Record<Language, LegalPage> = {
	fr: {
		title: "Mentions légales & politique de confidentialité",
		lastUpdated: `Dernière mise à jour : ${LAST_UPDATED.fr}`,
		notice: {
			title: "Mentions légales",
			sections: [
				{
					title: "Éditeur du site",
					paragraphs: [
						`Ce site est édité par ${fullName}, personne physique agissant à titre non professionnel.`,
						`Contact : ${email}`,
						`Directeur de la publication : ${fullName}.`,
					],
				},
				{
					title: "Hébergeur",
					paragraphs: [
						`${host}.`,
						`Téléphone : ${HOSTING_INFO.phone} · ${HOSTING_INFO.website}`,
					],
				},
				{
					title: "Propriété intellectuelle",
					paragraphs: [
						`Les textes, le design et le code de ce site sont la propriété de ${fullName}, sauf mention contraire. Toute reproduction sans autorisation est interdite.`,
						"Les marques et logos cités (AWS, Credly, GitHub, GitLab, LinkedIn) appartiennent à leurs propriétaires respectifs.",
					],
				},
			],
		},
		privacy: {
			title: "Politique de confidentialité",
			sections: [
				{
					title: "Responsable du traitement",
					paragraphs: [
						`${fullName} est responsable des traitements décrits ci-dessous. Contact : ${email}`,
					],
				},
				{
					title: "Données techniques (hébergement)",
					paragraphs: [
						`Lors de votre visite, l'hébergeur (${HOSTING_INFO.name}, via GitHub Pages) enregistre des données techniques telles que votre adresse IP et votre navigateur, à des fins de sécurité et de bon fonctionnement du service. Base légale : intérêt légitime (art. 6.1.f RGPD).`,
						"Ces données peuvent être transférées aux États-Unis. GitHub est certifié au titre du Data Privacy Framework UE-États-Unis.",
					],
				},
				{
					title: "Messages que vous m'envoyez",
					paragraphs: [
						`Si vous m'écrivez à ${email}, j'utilise votre adresse et le contenu de votre message uniquement pour vous répondre. Base légale : intérêt légitime et mesures précontractuelles (art. 6.1.b et 6.1.f RGPD).`,
						"Ces échanges sont conservés au maximum 5 ans après le dernier contact, durée correspondant à la prescription civile (art. 2224 du Code civil), puis supprimés.",
					],
				},
				{
					title: "Cookies et stockage local",
					paragraphs: [
						`Ce site n'utilise aucun cookie, aucun outil de mesure d'audience et aucune publicité. Seule votre préférence de langue est enregistrée dans le stockage local de votre navigateur (clé « ${LANGUAGE_STORAGE_KEY} »). Ce stockage est strictement nécessaire au service que vous demandez et ne requiert donc pas de consentement.`,
						"Les polices de caractères et images sont hébergées sur ce site : aucune donnée n'est envoyée à des services tiers lors de votre navigation.",
					],
				},
				{
					title: "Liens externes",
					paragraphs: [
						"Les liens vers GitHub, GitLab, LinkedIn ou Credly vous dirigent vers des sites tiers soumis à leurs propres politiques de confidentialité.",
					],
				},
				{
					title: "Vos droits",
					paragraphs: [
						`Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour les exercer, écrivez à ${email}.`,
						"Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
					],
				},
			],
		},
		prevailingVersion:
			"En cas de divergence entre les versions française et anglaise, la version française prévaut.",
	},
	en: {
		title: "Legal notice & privacy policy",
		lastUpdated: `Last updated: ${LAST_UPDATED.en}`,
		notice: {
			title: "Legal notice",
			sections: [
				{
					title: "Publisher",
					paragraphs: [
						`This website is published by ${fullName}, a private individual acting in a non-professional capacity.`,
						`Contact: ${email}`,
						`Publication director: ${fullName}.`,
					],
				},
				{
					title: "Hosting provider",
					paragraphs: [
						`${host}.`,
						`Phone: ${HOSTING_INFO.phone} · ${HOSTING_INFO.website}`,
					],
				},
				{
					title: "Intellectual property",
					paragraphs: [
						`The texts, design and code of this website belong to ${fullName}, unless stated otherwise. Reproduction without permission is prohibited.`,
						"Trademarks and logos mentioned (AWS, Credly, GitHub, GitLab, LinkedIn) belong to their respective owners.",
					],
				},
			],
		},
		privacy: {
			title: "Privacy policy",
			sections: [
				{
					title: "Data controller",
					paragraphs: [
						`${fullName} is the controller of the processing described below. Contact: ${email}`,
					],
				},
				{
					title: "Technical data (hosting)",
					paragraphs: [
						`When you visit, the hosting provider (${HOSTING_INFO.name}, through GitHub Pages) records technical data such as your IP address and browser, for security and to operate the service. Legal basis: legitimate interest (GDPR art. 6(1)(f)).`,
						"This data may be transferred to the United States. GitHub is certified under the EU–US Data Privacy Framework.",
					],
				},
				{
					title: "Messages you send me",
					paragraphs: [
						`If you write to ${email}, I use your address and message only to reply to you. Legal basis: legitimate interest and pre-contractual steps (GDPR art. 6(1)(b) and 6(1)(f)).`,
						"These exchanges are kept for up to 5 years after the last contact, matching the French civil limitation period (Civil Code art. 2224), then deleted.",
					],
				},
				{
					title: "Cookies and local storage",
					paragraphs: [
						`This website uses no cookies, no analytics and no advertising. Only your language preference is saved in your browser's local storage (key "${LANGUAGE_STORAGE_KEY}"). This is strictly necessary for the service you request, so no consent is required.`,
						"Fonts and images are hosted on this website: no data is sent to third-party services while you browse.",
					],
				},
				{
					title: "External links",
					paragraphs: [
						"Links to GitHub, GitLab, LinkedIn or Credly take you to third-party websites governed by their own privacy policies.",
					],
				},
				{
					title: "Your rights",
					paragraphs: [
						`You have the right to access, rectify, erase, restrict, object to and port your data. To exercise them, write to ${email}.`,
						"You can also lodge a complaint with the CNIL, the French data protection authority (www.cnil.fr).",
					],
				},
			],
		},
		prevailingVersion:
			"This is a translation. If the French and English versions differ, the French version prevails.",
	},
}
