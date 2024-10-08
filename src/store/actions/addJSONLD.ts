// Module imports
import { type Thing } from 'schema-dts'





// Local imports
import { store } from '@/store/store'





export function addJSONLD(data: Thing) {
	store.set(previousState => {
		const { jsonLD } = previousState
		const jsonLDArray = Array.from(jsonLD)

		const itemAlreadyExists = jsonLDArray.some(item => item['@id'] === data['@id'])

		if (!itemAlreadyExists) {
			jsonLD.add(data)
		}

		return { jsonLD: new Set(jsonLD) }
	})
}
