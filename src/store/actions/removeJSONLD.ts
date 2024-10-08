// Module imports
import { type Thing } from 'schema-dts'





// Local imports
import { store } from '@/store/store'





export function removeJSONLD(data: Thing) {
	store.set(previousState => {
		const { jsonLD } = previousState
		const jsonLDArray = Array.from(jsonLD)

		const existingItem = jsonLDArray.find(item => item['@id'] === data['@id'])

		if (existingItem) {
			jsonLD.delete(existingItem)
		}

		return { jsonLD: new Set(jsonLD) }
	})
}
