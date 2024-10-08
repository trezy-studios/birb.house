// Module imports
import '@xyflow/react/dist/base.css'

import {
	type Metadata,
	type Viewport,
} from 'next'
import localFont from 'next/font/local'





// Local imports
import '@/styles/app.scss'

import { JSONLD } from '@/components/JSONLD/JSONLD'
import Layout from '@/components/Layout/Layout'
import { PropsWithChildren } from 'react'
import { BIRBHOUSEGAMES_JSONLD } from '@/json+ld/BirbhouseGames'
import { TREZY_JSONLD } from '@/json+ld/Trezy'





// Types
type Props = Readonly<PropsWithChildren>





const heyamPro = localFont({
  display: 'swap',
  src: '../styles/fonts/heyam-pro/heyam-pro.woff2',
	variable: '--font-heyam-pro',
	weight: '400',
})





export default function RootLayout(props: Props) {
	const { children } = props

	return (
		<html
			className={heyamPro.variable}
			lang={'en'}>
			<head>
				<link
					href={'https://use.typekit.net/wcl7qou.css'}
					rel={'stylesheet'} />
			</head>

			<body>
				<Layout>
					{children}
				</Layout>

				<JSONLD data={TREZY_JSONLD} />
				<JSONLD data={BIRBHOUSEGAMES_JSONLD} />
			</body>
		</html>
	)
}

export const metadata: Metadata = {
  authors: [
		{
			name: 'Trezy',
			url: 'https://trezy.codes',
		},
	],
  creator: 'Trezy',
	description: '',
	keywords: [
		'Birb',
		'Birbhouse',
		'Birbhouse Games',
		'Debug',
		'Debug Game',
		'Games',
		'Game Development',
		'The Inn at Nightfall',
		'Video Games',
		'Web Games',
	],
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
	openGraph: {
		locale: 'en_US',
		type: 'website',
		url: process.env.NEXT_PUBLIC_SITE_URL!,
		siteName: 'Birbhouse Games | Handcrafted Gaming Experiences',
	},
  publisher: 'Trezy',
	title: {
		default: 'Birbhouse Games',
		template: '%s | Birbhouse Games',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@TrezyStudios',
		site: '@TrezyStudios',
	},
}

export const viewport: Viewport = {
	themeColor: '#f5511e',
}
