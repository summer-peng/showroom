import DraftEditorPrinter from '@/components/commons/DraftEdiorPrinter'
import TemplateWrapper from '@/components/pages/ResumeMgmt/ResumeViewer/TemplateWrapper'

import EduSection from './EduSection'
import ExperienceSection from './ExperienceSection'
import InfoSection from './InfoSection'

import styles from './styles.module.scss'

const TraditionalTemplate = ({ resume }) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    province,
    postalCode,
    summary,
    skills = [],
    experience = [],
    education = [],
    coreCompetencies,
  } = resume

  return (
    <TemplateWrapper>
      <div className={styles['circle']}>
        {firstName && firstName.charAt(0)}
        {lastName && lastName.charAt(0)}
      </div>
      <h2 className={styles['author-name']}>{`${firstName} ${lastName}`}</h2>
      <div className={styles['contact-info']}>
        {email && (
          <>
            <span>{email}</span>
            <span>|</span>
          </>
        )}
        {phoneNumber && (
          <>
            <span>{phoneNumber}</span>
            <span>|</span>
          </>
        )}
        <span>{`${city}, ${province} ${postalCode}`}</span>
      </div>
      <InfoSection title="Summary" className={styles['summary-section']}>
        <DraftEditorPrinter contentState={summary} />
      </InfoSection>
      <InfoSection title="Core Competencies">
        <DraftEditorPrinter contentState={coreCompetencies} />
      </InfoSection>
      <InfoSection title="Skills">
        <ul className={styles['skills-ul']}>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </InfoSection>
      <InfoSection title="Experience">
        {experience.map((exp, index) => {
          const { jobTitle, companyName, city, startDate, endDate, detail } =
            exp
          return (
            <ExperienceSection
              key={index}
              jobTitle={jobTitle}
              companyName={companyName}
              city={city}
              startDate={startDate}
              endDate={endDate}
              experienceList={detail}
            />
          )
        })}
      </InfoSection>
      <InfoSection title="Education">
        {education.map((edu, index) => {
          const { name, location, degree, major, startDate, endDate } = edu
          return (
            <EduSection
              key={index}
              schoolName={name}
              location={location}
              degree={degree}
              major={major}
              startDate={startDate}
              endDate={endDate}
            />
          )
        })}
      </InfoSection>
    </TemplateWrapper>
  )
}

export default TraditionalTemplate
