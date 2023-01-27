import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const InfoSection = ({ title, children }) => {
  return (
    <section className={styles['info-section']}>
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
