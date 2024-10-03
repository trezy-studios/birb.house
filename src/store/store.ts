// Module imports
import { makeStore } from 'statery'





// Local imports
import { initialState } from './initialState'





export const store = makeStore(initialState)

if (typeof window !== 'undefined') {
	// @ts-ignore
	window.store = store
}
