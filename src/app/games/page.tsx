// Module imports
import { Metadata } from 'next'





// Local imports
import { GameCard } from '@/components/GameCard/GameCard'
import * as Contentful from '@/helpers/Contentful'





export default async function GamesPage() {
	const games = await Contentful.getGames()

	const mappedGames = games.map(game => (
		<GameCard
			key={game.sys.id}
			game={game} />
	))

	return (
		<>
			{mappedGames}
		</>
	)
}

export const metadata: Metadata = {
	description: 'A Universe of Unforgettable Experiences',
	title: 'Our Games',
}
