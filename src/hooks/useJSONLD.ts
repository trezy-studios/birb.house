// Module imports
import { type Thing } from 'schema-dts'





// Local imports
import { addJSONLD } from '@/store/actions/addJSONLD'





export function useJSONLD(data: Thing) {
	addJSONLD(data)
}
