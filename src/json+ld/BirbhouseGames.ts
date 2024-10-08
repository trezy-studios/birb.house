// Module imports
import { type Corporation } from 'schema-dts'





export const BIRBHOUSEGAMES_JSONLD: Corporation = {
	'@id': 'https://birb.house/#corporation',
	'@type': 'Corporation',
	contactPoint: { '@id': 'https://birb.house/#contactpoint' },
	founders: [
		{ '@id': 'https://trezy.codes/#person' },
	],
	foundingDate: '2022-06-16T05:00:00.000Z',
	legalName: 'Trezy Studios, LLC',
	logo: 'https://birb.house/brand/color-logo-dark.png',
	name: 'Birbhouse Games',
	subjectOf: { '@id': 'https://birb.house' },
	url: 'https://birb.house',
}
