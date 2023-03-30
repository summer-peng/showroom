import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const InfoSection = ({ title, className, children }) => {
  return (
    <section className={classnames(styles['info-section'], className)}>
      <div className={styles['title-section']}>
        <span>{title}</span>
        <hr />
      </div>
      <div className={styles['content-section']}>{children}</div>
    </section>
  )
}

InfoSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default InfoSection
