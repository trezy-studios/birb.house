'use client'

// Module imports
import {
	type CSSProperties,
	useCallback,
	useMemo,
} from 'react'
import classnames from 'classnames'
import Image from 'next/image.js'
import { type ImageFit } from '@/typedefs/contentful-extended/ImageFit'
import { type ImageFocusArea } from '@/typedefs/contentful-extended/ImageFocusArea'
import { type ImageLoader } from 'next/dist/client/image-component'
import { type PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import { type Property } from 'csstype'





// Local imports
import styles from './ContentfulImage.module.scss'





// Types
type Props = {
	alt?: string,
	blurDataURL?: string,
	className?: string,
	fill?: boolean,
	fit?: ImageFit,
	focusArea?: ImageFocusArea,
	height?: number,
	isPriority?: boolean,
	objectFit?: Property.ObjectFit,
	objectPosition?: Property.ObjectPosition<string>,
	placeholder?: PlaceholderValue,
	sizes?: string,
	src: string,
	title?: string,
	width?: number,
}





/**
 * Renders an image from Contentful.
 *
 * @component
 */
export function ContentfulImage(props: Props) {
	const {
		alt = '',
		blurDataURL = '',
		className = '',
		fill = false,
		fit,
		focusArea,
		height,
		isPriority = false,
		objectFit = 'cover',
		objectPosition,
		placeholder = 'empty',
		sizes,
		src,
		title = '',
		width,
	} = props

	const loader: ImageLoader = useCallback(loaderProps => {
		const {
			quality,
			width: loaderWidth,
		} = loaderProps

		const url = new URL(`${src}`)

		url.searchParams.set('fm', 'webp')
		url.searchParams.set('w', loaderWidth.toString())
		url.searchParams.set('q', (quality || 75).toString())

		if (fit) {
			url.searchParams.set('fit', fit)
		}

		if (focusArea) {
			url.searchParams.set('f', focusArea.toLowerCase().replace(/\s/u, '_'))
		}

		return url.href
	}, [
		fit,
		focusArea,
		src,
	])

	const compiledImageStyles: CSSProperties = useMemo(() => ({
		aspectRatio: `${width} / ${height}`,
		height: '100%',
		objectFit: objectFit,
		objectPosition: objectPosition,
		width: '100%',
	}), [
		height,
		objectFit,
		objectPosition,
		width,
	])

	const compiledWrapperStyles = useMemo(() => {
		const result = {}

		if (width && height) {
			result['--aspect-ratio'] = `${width} / ${height}`
		}

		return result
	}, [
		height,
		width,
	])

	const compiledClassName = classnames(styles['container'], className)

	return (
		<div
			className={compiledClassName}
			style={compiledWrapperStyles}>
			<Image
				alt={alt}
				blurDataURL={blurDataURL}
				fill={fill}
				height={!fill ? height : undefined}
				loader={loader}
				placeholder={placeholder}
				priority={isPriority}
				sizes={sizes}
				src={src}
				style={compiledImageStyles}
				title={title}
				width={!fill ? width : undefined} />
		</div>
	)
}
