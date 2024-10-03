// Module imports
import {
	type MouseEventHandler,
	type PropsWithChildren,
} from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'





// Local imports
import styles from './Link.module.scss'

import { ExternalLink } from '../ExternalLink/ExternalLink'




// Types
type Props = PropsWithChildren<{
	className?: string,
	href?: string,
	isActive?: boolean,
	onClick?: MouseEventHandler<HTMLAnchorElement>,
}>





export function Link(props: Props) {
	const {
		children,
		className = '',
		href,
		isActive,
		onClick,
	} = props

	const compiledClassName = classnames(styles['link'], className, {
		[styles['is-active']]: isActive,
	})

	if ((href?.startsWith('/')) || (href?.startsWith('#'))) {
		return (
			<NextLink
				className={compiledClassName}
				href={href}
				onClick={onClick}>
				{children}
			</NextLink>
		)
	}

	return (
		<ExternalLink
			className={compiledClassName}
			href={href}
			onClick={onClick}>
			{children}
		</ExternalLink>
	)
}
