// Local imports
import { store } from '@/store/store'





/** Renders all of our JSON+LD into the page. */
export function JSONLDRenderer() {
	const { jsonLD } = store.state

	const dataString = {
		__html: JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': Array.from(jsonLD),
		}),
	}

	return (
		<script
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={dataString}
			type={'application/ld+json'} />
	)
}
