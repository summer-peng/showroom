import DraftEdiorPrinterSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/DraftEditorPrinterSection'
import EduSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/EduSection'
import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'
import InterestsSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InterestsSection'
import TemplateWrapper from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/TemplateWrapper'

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
    coreCompetencies,
    address,
    city,
    province,
    postalCode,
    interests,
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
          <div>{`${address}, ${city}, ${province} ${postalCode}`}</div>
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
      <DraftEdiorPrinterSection title="Summary" contentState={summary} />
      <DraftEdiorPrinterSection
        title="Core Competencies"
        contentState={coreCompetencies}
      />
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
      <EduSection education={education} />
      <InterestsSection interests={interests} />
    </TemplateWrapper>
  )
}

export default Engineer
