import classnames from 'classnames'

import styles from './styles.module.scss'

export const Container = ({ children }) => {
  return <div className={styles['pagination-container']}>{children}</div>
}

export const Item = ({ active, children, className, ...restProp }) => {
  return (
    <div
      className={classnames(
        styles['item'],
        active ? styles['active-item'] : null,
        className,
      )}
      {...restProp}
    >
      {children}
    </div>
  )
}

export const Ellipsis = () => {
  return <div className={styles['ellipsis']}>...</div>
}

export const First = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles['first-item'], className)} {...restProps}>
      «
    </div>
  )
}

export const Last = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles['last-item'], className)} {...restProps}>
      »
    </div>
  )
}

const items = {
  Container,
  Item,
  Ellipsis,
  First,
  Last,
}

export default items
