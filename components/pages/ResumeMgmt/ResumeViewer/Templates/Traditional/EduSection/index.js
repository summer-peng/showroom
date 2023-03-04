import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const EduSection = ({ schoolName, location, degree, major, gradiatedDate }) => {
  return (
    <div className={styles['edu-section']}>
      <div className="schrool-name">
        {schoolName} | {location}
      </div>
      <div className={styles['degree']}>
        <span>{degree}</span> in {major}
      </div>
      <div className={styles['graduation-date']}>{gradiatedDate}</div>
    </div>
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
