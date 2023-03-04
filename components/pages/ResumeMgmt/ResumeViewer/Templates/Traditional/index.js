import { useRef } from 'react'
import dynamic from 'next/dynamic'

import { Button } from '@/components/commons/Buttons'
import DraftEditorPrinter from '@/components/commons/DraftEdiorPrinter'

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
  } = resume
  const DownloadPdf = dynamic(
    () => import('@/components/commons/DownloadPdf'),
    {
      ssr: false,
    },
  )
  const cvRef = useRef()

  const DownloadButton = () => {
    const button = () => <Button type="primary" titleKey={'Download'} />
    return button
  }
  return (
    <div className={styles['container']}>
      <div className={styles['download-section']}>
        <DownloadPdf element={cvRef} downloadButton={DownloadButton} />
      </div>
      <div className={styles['wrapper']}>
        <div className={styles['resume']} ref={cvRef}>
          <div className={styles['circle']}>
            {firstName && firstName.charAt(0)}
            {lastName && lastName.charAt(0)}
          </div>
          <h2
            className={styles['author-name']}
          >{`${firstName} ${lastName}`}</h2>
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
          <InfoSection title="Skills">
            <ul className={styles['skills-ul']}>
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul>
          </InfoSection>
          <InfoSection title="Experience">
            {experience.map((exp, index) => {
              const {
                jobTitle,
                companyName,
                city,
                startDate,
                endDate,
                detail,
              } = exp
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
              const { name, location, degree, major, graduatedDate } = edu
              return (
                <EduSection
                  key={index}
                  schoolName={name}
                  location={location}
                  degree={degree}
                  major={major}
                  gradiatedDate={graduatedDate}
                />
              )
            })}
          </InfoSection>
        </div>
        <div className={styles['page-bottom-space']} />
      </div>
    </div>
  )
}

export default TraditionalTemplate
