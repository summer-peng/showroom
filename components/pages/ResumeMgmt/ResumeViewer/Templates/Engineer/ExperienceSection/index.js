import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import styles from "./styles.module.scss"

const ExperienceSection = ({
  jobTitle,
  companyName,
  city,
  startDate,
  endDate,
  experienceList,
  lng,
}) => {
  const { t } = useTranslation()

  return (
    <section className={styles["experience-section"]}>
      <div className={styles["job-intro"]}>
        <div>
          <span className={styles["job-title"]}>{jobTitle}</span>
          <span>
            {companyName} | {city}
          </span>
        </div>
        <div className={styles["duration"]}>
          {startDate} - {endDate ?? t("present", { lng: lng })}
        </div>
      </div>
      <div className={styles["job-detail"]}>
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
