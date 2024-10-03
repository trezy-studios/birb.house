// Module imports
import classnames from 'classnames'
import { type PropsWithChildren } from 'react'





// Local imports
import styles from './PageSection.module.scss'





// Types
type Props = PropsWithChildren<{
	className?: string,
}>





export function PageSection(props: Props) {
	const {
		children,
		className,
	} = props

	return (
		<section className={classnames(styles['container'], className)}>
			{children}
		</section>
	)
}
