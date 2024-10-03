// Module imports
import { Entry } from 'contentful'





// Local imports
import {
	type TypeComponentPhotographerCreditSkeleton,
	type TypeComponentPhotographyPlatformCreditSkeleton,
} from '@/typedefs/contentful'
import { Link } from '@/components/Link/Link'





// Types
type IndividualCredit = {
	name: string,
	url: string,
}
type CompiledCredits = {
	photographer?: IndividualCredit,
	platform?: IndividualCredit,
}
type Props = {
	credits: (Entry<TypeComponentPhotographerCreditSkeleton | TypeComponentPhotographyPlatformCreditSkeleton> | undefined)[],
}





/** Renders an image from Contentful with rich data. */
export function ContentfulRichImageCredit(props: Props) {
	const { credits } = props

	const parsedCredits = credits.reduce((accumulator, credit) => {
		if (credit) {
			if ('photographerName' in credit.fields && 'photographerUrl' in credit.fields) {
				accumulator.photographer = {
					name: credit.fields.photographerName as string,
					url: credit.fields.photographerUrl as string,
				}
			} else if ('platformName' in credit.fields && 'platformUrl' in credit.fields) {
				accumulator.platform = {
					name: credit.fields.platformName as string,
					url: credit.fields.platformUrl as string,
				}
			}
		}

		return accumulator
	}, {} as CompiledCredits)

	return (
		<>
			{'Photo'}
			{Boolean('photographer' in parsedCredits) && (
				<>
					{' by '}
					<Link href={parsedCredits.photographer?.url}>
						{parsedCredits.photographer?.name}
					</Link>
				</>
			)}

			{Boolean(parsedCredits.platform) && (
				<>
					{' on '}
					<Link href={parsedCredits.platform?.url}>
						{parsedCredits.platform?.name}
					</Link>
				</>
			)}
		</>
	)
}
