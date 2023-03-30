import DraftEdiorPrinterSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/DraftEditorPrinterSection'
import EduSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/EduSection'
import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'
import InterestsSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InterestsSection'
import TemplateWrapper from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/TemplateWrapper'

import ExperienceSection from './ExperienceSection'

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
    experience = [],
    education = [],
    coreCompetencies,
    interests,
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

export default TraditionalTemplate
