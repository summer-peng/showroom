import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const ExperienceSection = ({
  jobTitle,
  companyName,
  city,
  startDate,
  endDate,
  experienceList,
}) => {
  return (
    <section className={styles['experience-section']}>
      <div className={styles['job-intro']}>
        <div className={styles['company-name']}>
          {companyName} | {city}
        </div>
        <div className={styles['job-title']}>{jobTitle}</div>
        <div className={styles['duration']}>
          {startDate}~{endDate}
        </div>
      </div>
      <div>
        <ul>
          {experienceList.map((exp, index) => {
            return <li key={index}>{exp}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

ExperienceSection.defaultProps = {
  experienceList: [],
}

ExperienceSection.propTypes = {
  jobTitle: PropTypes.string,
  companyName: PropTypes.string,
  city: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  experienceList: PropTypes.array,
}

export default ExperienceSection
