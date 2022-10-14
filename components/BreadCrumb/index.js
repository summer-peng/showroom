import { Breadcrumb, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const MyBreadcrumb = ({ items }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <Container className={styles['breadcrumb']}>
      <Breadcrumb>
        {items.map(({ name, url, active }, index) => {
          if (active) {
            return (
              <Breadcrumb.Item key={index} active>
                {name}
              </Breadcrumb.Item>
            )
          }

          return (
            <Breadcrumb.Item key={index} href={url}>
              {name}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </Container>
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
