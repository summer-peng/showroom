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
      <div className={styles['degree']}>
        <div>
          <span>{degree}</span> in {major}
        </div>
        <div className={styles['graduation-date']}>
          {startDate} - {endDate}
        </div>
      </div>
      <div className="schrool-name">
        {schoolName} | {location}
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
