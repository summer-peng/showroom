import DraftEditorPrinter from '@/components/commons/DraftEdiorPrinter'
import TemplateWrapper from '@/components/pages/ResumeMgmt/ResumeViewer/TemplateWrapper'

import InfoSection from '../Traditional/InfoSection'

import EduSection from './EduSection'
import ExperienceSection from './ExperienceSection'

import styles from './styles.module.scss'

const Engineer = ({ resume }) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedinUrl,
    githubUrl,
    summary,
    experience = [],
    education = [],
    objective,
    city,
  } = resume

  return (
    <TemplateWrapper>
      <div className={styles['employee-info-wrapper']}>
        <div className={styles['name']}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div>
          <span className={styles['phone']}>{phoneNumber}</span>
        </div>
      </div>
      <div className={styles['additional-info']}>
        <div className={styles['city-mail']}>
          <div>{city}</div>
          <div>{email}</div>
        </div>
        <div className={styles['links']}>
          {linkedinUrl && (
            <a target="_blank" href={linkedinUrl} rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          )}
          {githubUrl && (
            <a target="_blank" href={githubUrl} rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          )}
        </div>
      </div>
      <InfoSection title="Objective">
        <DraftEditorPrinter contentState={objective} />
      </InfoSection>
      <InfoSection title="Hightlights" className={styles['hightlighs-section']}>
        <DraftEditorPrinter contentState={summary} />
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

export default Engineer
