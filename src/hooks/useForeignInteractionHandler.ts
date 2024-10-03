// Module imports
import {
	useCallback,
	useEffect,
	type RefObject,
} from 'react'





// Types
type ForeignInteractionHandler = (this: Document, ev: MouseEvent) => any





/**
 * Execute a callback when a click is detected outside of an element.
 */
export function useForeignInteractionHandler(targetRef: RefObject<Element>, callback: Function) {
	const handleForeignInteraction: ForeignInteractionHandler = useCallback(event => {
		const currentElement = targetRef.current

		if (currentElement && (currentElement !== event.target) && !currentElement.contains((event.target as HTMLElement))) {
			callback(event)
		}
	}, [
		callback,
		targetRef,
	])

	useEffect(() => {
		document.addEventListener('click', handleForeignInteraction)

		return () => document.removeEventListener('click', handleForeignInteraction)
	}, [handleForeignInteraction])

	return { handleForeignInteraction }
}
