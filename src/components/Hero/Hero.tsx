// Module imports
import {
	type CSSProperties,
	type ReactNode,
	useMemo,
} from 'react'
import classnames from 'classnames'





// Local imports
import styles from './Hero.module.scss'





// Types
type Props = {
	background?: ReactNode,
	backgroundPositionX?: 'left' | 'right' | 'center',
	backgroundPositionY?: 'top' | 'bottom' | 'center',
	backgroundClassName?: string,
	backgroundColor?: string,
	backgroundFit?: 'cover' | 'contain',
	children?: ReactNode,
	className?: string,
	contentClassName?: string,
	contentPositionX?: 'left' | 'right' | 'center',
	contentPositionY?: 'top' | 'bottom' | 'center',
	style?: CSSProperties,
}





/**
 * Renders a hero container.
 *
 * @component
 */
export function Hero(props: Props) {
	const {
		background = null,
		backgroundPositionX = 'center',
		backgroundPositionY = 'center',
		backgroundClassName = '',
		backgroundColor,
		backgroundFit = 'cover',
		children = null,
		className = '',
		contentClassName = '',
		contentPositionX = 'center',
		contentPositionY = 'center',
		style = {},
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(
			styles['hero'],
			styles[`content-position-x-${contentPositionX}`],
			styles[`content-position-y-${contentPositionY}`],
			className,
		)
	}, [
		className,
		contentPositionX,
		contentPositionY,
	])

	const compiledContentClassName = useMemo(() => {
		return classnames(
			styles['hero-content'],
			contentClassName,
		)
	}, [contentClassName])

	const compiledBackgroundClassName = useMemo(() => {
		return classnames(
			styles['background'],
			styles[`position-x-${backgroundPositionX}`],
			styles[`position-y-${backgroundPositionY}`],
			styles[`background-${backgroundFit}`],
			backgroundClassName,
		)
	}, [
		backgroundClassName,
		backgroundPositionX,
		backgroundPositionY,
		backgroundFit,
	])

	const compiledStyles = useMemo(() => {
		const stylesObject: CSSProperties = { ...style }

		if (backgroundColor) {
			stylesObject.backgroundColor = backgroundColor
		}

		return stylesObject
	}, [
		backgroundColor,
		style,
	])

	return (
		<div
			className={compiledClassName}
			style={compiledStyles}>
			<div className={compiledBackgroundClassName}>
				{background}
			</div>

			<div className={compiledContentClassName}>
				{children}
			</div>
		</div>
	)
}
