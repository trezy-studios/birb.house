// Module imports
import { Thing } from 'schema-dts'





// Local imports
import { getPalette } from '@/helpers/getPalette'





export const initialState: {
	jsonLD: Set<Thing>,
	palette: Map<string, string>,
} = {
	jsonLD: new Set,
	palette: getPalette(),
}
