// Module imports
import classnames from 'classnames'
import { type PropsWithChildren } from 'react'





// Local imports
import styles from './Content.module.scss'





// Types
type Props = PropsWithChildren<{
	className?: string,
}>





export function Content(props: Props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = classnames(styles['container'], className)

	return (
		<div className={compiledClassName}>
			{children}
		</div>
	)
}
