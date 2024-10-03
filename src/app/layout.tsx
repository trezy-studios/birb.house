// Module imports
import '@xyflow/react/dist/base.css'

import localFont from 'next/font/local'





// Local imports
import '@/styles/app.scss'

import Layout from '@/components/Layout/Layout'
import { PropsWithChildren } from 'react'





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
			</body>
		</html>
	)
}
