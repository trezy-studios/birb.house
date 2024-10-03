// Module imports
import '@xyflow/react/dist/base.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { type PropsWithChildren } from 'react'





// Local imports
import styles from './Layout.module.scss'

import { Banner } from '@/components/Banner/Banner'





// Types
type Props = Readonly<PropsWithChildren>





config.autoAddCss = false

export default function Layout(props: Props) {
	const { children } = props

	return (
		<div className={styles['container']}>
			<Banner key={'banner'} />

			<main
				className={styles['content']}
				key={'main-content'}>
				{children}
			</main>
		</div>
	)
}
