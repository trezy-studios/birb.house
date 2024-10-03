export function generateRandomHexID(length) {
	const randomValues = crypto.getRandomValues(new Uint8Array(length))
	const randomValuesArray = Array.from(randomValues)

	return randomValuesArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
