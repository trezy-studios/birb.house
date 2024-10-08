// Module imports
import {
	type Person,
	type WithContext,
} from 'schema-dts'





export const TREZY_JSONLD: WithContext<Person> = {
	'@context': 'https://schema.org',
	'@id': 'https://trezy.codes',
	'@type': 'Person',
	jobTitle: 'Founder',
	givenName: 'Trezy',
	url: 'http://trezy.codes',
}
