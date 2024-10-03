// Local imports
import { ContentfulImage } from '@/components/ContentfulImage/ContentfulImage'
import { ContentfulRichImageCredit } from '@/components/ContentfulRichImageCredit/ContentfulRichImageCredit'
import { Link } from '@/components/Link/Link'
import { Entry } from 'contentful'
import { ImageFocusArea } from '@/typedefs/contentful-extended/ImageFocusArea'
import { TypeComponentRichImageSkeleton } from '@/typedefs/contentful/TypeComponentRichImage'





// Types
type Props = {
	className?: string,
	data: Entry<TypeComponentRichImageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>,
	fill?: boolean,
	isPriority?: boolean,
	showCredits?: boolean,
	sizes?: string,
}





/** Renders an image from Contentful with rich data. */
export function ContentfulRichImage(props: Props) {
	const {
		className = '',
		data,
		fill,
		isPriority = false,
		showCredits = false,
		sizes,
	} = props

	const {
		caption,
		credits,
		focusArea,
		image,
		link,
	} = data.fields

	if (!image || !image.fields.file || !image.fields.file.details.image) {
		return null
	}

	// const { blurDataURL } = data.metadata

	const alt = data.fields.description ?? image.fields.description
	const title = data.fields.title ?? image.fields.title

	let result = (
		<ContentfulImage
			alt={alt}
			// blurDataURL={blurDataURL}
			fill={fill}
			focusArea={focusArea as ImageFocusArea}
			height={image.fields.file.details.image.height}
			isPriority={isPriority}
			// placeholder={blurDataURL ? 'blur' : undefined}
			sizes={sizes}
			src={image.fields.file.url}
			title={title}
			width={image.fields.file.details.image.width} />
	)

	if (link) {
		result = (
			<Link href={link}>
				{result}
			</Link>
		)
	}

	return (
		<figure className={className}>
			{result}

			{Boolean(showCredits && (caption ?? credits)) && (
				<figcaption>
					{Boolean(caption) && caption}

					{typeof credits !== 'undefined' && (
						<ContentfulRichImageCredit credits={credits} />
					)}
				</figcaption>
			)}
		</figure>
	)
}
