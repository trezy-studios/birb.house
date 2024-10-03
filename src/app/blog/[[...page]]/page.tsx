// Module imports
import { type Metadata } from 'next'





// Local imports
import styles from './page.module.scss'

import * as Contentful from '@/helpers/Contentful'
import { Heading } from '@/components/Heading/Heading'
import { PageSection } from '@/components/PageSection/PageSection'
import { Link } from '@/components/Link/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/Button/Button'





// Types
type Props = {
	params: {
		page: string,
	}
}





export default async function BlogPage(props: Props) {
	const page = Number(props.params.page ?? 1)

	const articles = await Contentful.getArticles(page)

	return (
		<>
			<PageSection>
				<Heading level={2}>
					{'Blog'}
				</Heading>
			</PageSection>

			<PageSection>
				{articles.map(article => (
					<article
						className={styles['article-summary']}
						key={article.sys.id}>
						<Link href={`/blog/${article.fields.slug}`}>
							<Heading level={3}>
								{article.fields.title}
							</Heading>
						</Link>

						<p>{article.fields.shortDescription}</p>

						<Button href={`/blog/${article.fields.slug}`}>
							{'Read more'}
							<FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</article>
				))}
			</PageSection>
		</>
	)
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
