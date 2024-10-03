// Module imports
import { Fragment } from 'react'
import Image from 'next/image'





// Local imports
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { Link } from '../components/Link/Link'





// Constants
const richImageStyles = {
	objectFit: 'cover',
	position: 'relative',
}





/**
 * Parses a node fragment from Contentful.
 *
 * @param {object} nodeFragment The node fragment to be parsed.
 * @returns {import('react').ReactElement[]} An array of JSX components.
 */
export function parseContentfulNodeFragment(nodeFragment) {
	return nodeFragment.content.map((node, nodeIndex) => {
		switch (node.nodeType) {
			case 'blockquote':
				return (
					<blockquote key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</blockquote>
				)

			case 'embedded-asset-block': {
				if (/^image\/\S+$/iu.test(node.data.target.fields.file.contentType)) {
					return (
						<figure key={nodeIndex}>
							<Image
								alt={node.data.target.fields.description}
								fill
								src={`https:${node.data.target.fields.file.url}`}
								title={node.data.target.fields.title} />
						</figure>
					)
				}

				console.log(`Unhandled asset type: ${node.data.target.fields.contentType}`, node)
				return null
			}

			case 'embedded-entry-block':
				switch (node.data.target.sys.contentType.sys.id) {
					// case 'componentCodeBlock':
					// 	return (
					// 		<Code
					// 			key={nodeIndex}
					// 			language={node.data.target.fields.language}>
					// 			{node.data.target.fields.code}
					// 		</Code>
					// 	)

					case 'componentRichImage':
						return (
							<div
								key={nodeIndex}
								// @ts-expect-error Next.js's CSS types for `object-fit` are garbo, so... 🤷🏻‍♂️
								style={richImageStyles}>
								<ContentfulRichImage
									data={node.data.target}
									fill
									sizes={'50vw'} />
							</div>
						)

					default:
						console.log(`Unhandled embedded content type: ${node.data.target.sys.contentType.sys.id}`, node)
						return null
				}

			case 'heading-1':
				return (
					<h2 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h2>
				)

			case 'heading-2':
				return (
					<h2 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h2>
				)

			case 'heading-3':
				return (
					<h3 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h3>
				)

			case 'heading-4':
				return (
					<h4 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h4>
				)

			case 'heading-5':
				return (
					<h5 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h5>
				)

			case 'heading-6':
				return (
					<h6 key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</h6>
				)

			case 'hr':
				return (
					<hr key={nodeIndex} />
				)

			case 'hyperlink':
				return (
					<Link
						key={nodeIndex}
						href={node.data.uri}>
						{parseContentfulNodeFragment(node)}
					</Link>
				)

			case 'list-item':
				return (
					<li key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</li>
				)

			case 'ordered-list':
				return (
					<ol
						key={nodeIndex}
						className={'numbered-list'}>
						{parseContentfulNodeFragment(node)}
					</ol>
				)

			case 'paragraph':
				return (
					<p key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</p>
				)

			case 'table':
				return (
					<table key={nodeIndex}>
						<tbody>
							{parseContentfulNodeFragment(node)}
						</tbody>
					</table>
				)

			case 'table-cell':
				return (
					<td key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</td>
				)

			case 'table-header-cell':
				return (
					<th key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</th>
				)

			case 'table-row':
				return (
					<tr key={nodeIndex}>
						{parseContentfulNodeFragment(node)}
					</tr>
				)

			case 'text':
				return node.marks.reduce((accumulator, mark) => {
					switch (mark.type) {
						case 'bold':
							accumulator = (
								<strong key={nodeIndex}>
									{accumulator}
								</strong>
							)
							break

						case 'code':
							accumulator = (
								<code key={nodeIndex}>
									{accumulator}
								</code>
							)
							break

						case 'italic':
							accumulator = (
								<em key={nodeIndex}>
									{accumulator}
								</em>
							)
							break

						case 'subscript':
							accumulator = (
								<sub key={nodeIndex}>
									{accumulator}
								</sub>
							)
							break

						case 'superscript':
							accumulator = (
								<sup key={nodeIndex}>
									{accumulator}
								</sup>
							)
							break

						case 'underline':
							accumulator = (
								<u key={nodeIndex}>
									{accumulator}
								</u>
							)
							break

						default:
							console.log(`Unhandled mark type: ${mark.type}`)
					}
					return accumulator
				}, (
					<Fragment key={nodeIndex}>
						{node.value}
					</Fragment>
				))

			case 'unordered-list':
				return (
					<ul
						key={nodeIndex}
						className={'bulleted-list'}>
						{parseContentfulNodeFragment(node)}
					</ul>
				)

			default:
				console.log(`Unhandled node type: ${node.type ?? node.nodeType}`, node)
				return null
		}
	})
}
