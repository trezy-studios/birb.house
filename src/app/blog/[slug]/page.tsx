// Module imports
import { type Metadata } from 'next'





// Local imports
import * as Contentful from '@/helpers/Contentful'
import { Heading } from '@/components/Heading/Heading'
import { PageSection } from '@/components/PageSection/PageSection'





// Types
type Props = {
	params: {
		page: string,
	}
}





export default async function BlogPage(props: Props) {
	const page = Number(props.params.page ?? 1)

	const articles = await Contentful.getArticles(page)

	console.log(articles)

	return (
		<PageSection>
			<Heading level={2}>
				{'Article'}
			</Heading>
		</PageSection>
	)

	// const mappedGames = games.map(game => (
	// 	<GameCard
	// 		key={game.sys.id}
	// 		game={game} />
	// ))

	// return (
	// 	<>
	// 		{mappedGames}
	// 	</>
	// )
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
