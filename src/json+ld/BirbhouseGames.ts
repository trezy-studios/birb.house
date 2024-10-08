// Module imports
import {
	type Organization,
	type WithContext,
} from 'schema-dts'





export const BIRBHOUSEGAMES_JSONLD: WithContext<Organization> = {
	'@context': 'https://schema.org',
	'@id': 'https://birb.house/#organization',
	'@type': 'Organization',
	contactPoint: {
		'@type': 'ContactPoint',
		email: 'hello@birb.house',
	},
	founders: [
		{ '@id': 'https://trezy.codes' },
	],
	foundingDate: '2022-06-16T05:00:00.000Z',
	legalName: 'Trezy Studios, LLC',
	logo: 'https://birb.house/brand/color-logo-dark.png',
	name: 'Birbhouse Games',
	url: 'https://birb.house',
}
