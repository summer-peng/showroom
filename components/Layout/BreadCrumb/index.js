import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const MyBreadcrumb = ({ items }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={styles['breadcrumb-container']}>
      {items.map(({ name, url, active }, index) => {
        if (active) {
          return (
            <div className={styles['breadcrumb-item']} key={index}>
              {name}
            </div>
          )
        }

        return (
          <Link href={url} key={index}>
            {name}
          </Link>
        )
      })}
    </div>
  )
}

MyBreadcrumb.defaultProps = {
  items: [],
}

MyBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
}

export default MyBreadcrumb
