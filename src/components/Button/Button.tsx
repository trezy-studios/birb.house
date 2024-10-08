// Module imports
import {
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react'
import classnames from 'classnames'





// Local imports
import styles from './Button.module.scss'

import { Link } from '@/components/Link/Link'





// Types
type Props = {
  children?: ReactNode,
  className?: string,
  hideOverflow?: boolean,
  href?: string,
  isPrimary?: boolean,
  onBlur?: FocusEventHandler<HTMLButtonElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onFocus?: FocusEventHandler<HTMLButtonElement>,
  type?: 'button' | 'reset' | 'submit',
}





export function Button(props: Props) {
  const {
    children = null,
    className = '',
    hideOverflow = true,
    href = undefined,
    isPrimary = false,
    onBlur = undefined,
    onClick = undefined,
    onFocus = undefined,
    type = 'button',
  } = props

  const compiledClassName = classnames({
    [styles['button']]: true,
    [styles['hide-overflow']]: hideOverflow,
    [styles['is-primary']]: isPrimary,
  }, className)

  if (href) {
    return (
      <Link
        className={compiledClassName}
        href={href}>
        <span>{children}</span>
      </Link>
    )
  }

  return (
    // eslint-disable-next-line react/forbid-elements
    <button
      className={compiledClassName}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      type={type}>
      <span>{children}</span>
    </button>
  )
}
