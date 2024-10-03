// Local imports
import { faEpicGames } from './faEpicGames.js'
import { faGOG } from './faGOG.js'
import { faHumbleBundle } from './faHumbleBundle.js'





// Type imports
/**
 * @typedef {import('@fortawesome/fontawesome-svg-core').IconDefinition} IconDefinition
 * @typedef {import('@fortawesome/fontawesome-svg-core').IconPack} IconPack
 * @typedef {import('@fortawesome/fontawesome-svg-core').IconPrefix} IconPrefix
 */





const prefix = 'fak'

const _iconsCache = {
	faEpicGames,
	faGOG,
	faHumbleBundle,
}

export {
	/** @type {IconPack} */
	_iconsCache as fac,

	/** @type {IconPrefix} */
	prefix,

	/** @type {IconDefinition} */
	faHumbleBundle,
}
