// Module imports
import { useMemo } from 'react'





// Types
type Props = {
	/** @description The object to be used for JSON+LD. */
	data: object,
}





/** Renders a JSON+LD block into the page. */
export function JSONLD(props: Props) {
	const { data } = props

	const dataString = useMemo(() => {
		return { __html: JSON.stringify(data) }
	}, [data])

	return (
		<script
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={dataString}
			type={'application/ld+json'} />
	)
}
