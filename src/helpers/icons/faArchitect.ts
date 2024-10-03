import {
	IconDefinition,
	IconName,
	IconPrefix,
} from '@fortawesome/fontawesome-svg-core'

export const height = 16
export const iconName = 'architect' as IconName
export const ligatures: string[] = []
export const prefix = 'fac' as IconPrefix
export const svgPathData = 'M.9,15.1l-.9-4.9L3.6,1.7l2.7-.8.8.9L1.7,15.1h-.8ZM15.1,15.1l.9-4.9L12.4,1.7l-2.7-.8-.8.9,5.4,13.3h.8Z'
export const unicode = 'f999'
export const width = 16

export const definition: IconDefinition = {
	prefix,
	iconName,
	icon: [
		width,
		height,
		ligatures,
		unicode,
		svgPathData,
	],
}

export const faArchitect = definition
