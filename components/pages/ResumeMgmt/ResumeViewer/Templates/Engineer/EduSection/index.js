import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const EduSection = ({
  schoolName,
  location,
  degree,
  major,
  startDate,
  endDate,
}) => {
  return (
    <section className={styles['edu-section']}>
      <div className={styles['degree-wrapper']}>
        <div>
          <span className={styles['degree']}>{degree}</span>
          {degree && major && <span className={styles['sepreate']}>in</span>}
          <span>{major}</span>
        </div>
        <div className={styles['graduation-date']}>
          {startDate} {startDate ? '-' : ''} {endDate}
        </div>
      </div>
      <div className="schrool-name">
        <span>{schoolName}</span>
        {schoolName && location && (
          <span className={styles['sepreate']}>|</span>
        )}
        <span>{location}</span>
      </div>
    </section>
  )
}

EduSection.propTypes = {
  schoolName: PropTypes.string,
  location: PropTypes.string,
  degree: PropTypes.string,
  major: PropTypes.string,
  gradiatedDate: PropTypes.string,
}

export default EduSection
