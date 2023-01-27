import { useRef } from 'react'
import dynamic from 'next/dynamic'

import EduSection from '@/components/pages/AboutMe/EduSection'
import ExperienceSection from '@/components/pages/AboutMe/ExperienceSection'
import InfoSection from '@/components/pages/AboutMe/InfoSection'

import styles from './styles.module.scss'

export const getServerSideProps = () => {
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About me',
      active: true,
    },
  ]
  return {
    props: {
      breadCrumbItems,
    },
  }
}

const AboutMePage = () => {
  const DownloadPdf = dynamic(() => import('@/components/DownloadPdf'), {
    ssr: false,
  })
  const cvRef = useRef()

  return (
    <div>
      <div className={styles['download-button']}>
        <DownloadPdf element={cvRef} />
      </div>
      <div ref={cvRef}>
        <h2 className={styles['author-name']}>Chen-Tsung, Peng</h2>
        <div className={styles['contact-info']}>zjone.peng@gmail.com</div>
        <InfoSection title="Summary">
          <div>
            Experienced Software Engineer working in IT industry for 7 years.
            Excels at developing and optimization the core modules to web
            application. Willing to design a web app to attract users with
            aesthetically pleasing interfaces and exceptional UX elements. As
            software industry could be changed frequently, I am willing to adopt
            new techs and embrace changes if it can improve our abilities or
            enhance our projects.
          </div>
        </InfoSection>
        <InfoSection title="Skills">
          <ul className={styles['skills-ul']}>
            <li>
              Frontend Programming: Javascript, React and React Hooks, jQuery,
              HTML, CSS, Bootstrap
            </li>
            <li>Version Control Systems: Git, Github</li>
            <li>Time Management and Prioritization</li>
            <li>
              Back-End and Database Skills: Java, Spring, Oracle, ORM tools
            </li>
          </ul>
        </InfoSection>
        <InfoSection title="Experience">
          <ExperienceSection
            jobTitle="Frontend Engineer"
            companyName="Morrison Express Corporation."
            city="Taipei"
            startDate="04/2020"
            endDate="04/2022"
            experienceList={[
              'Lunched several system to help our administrator, warehouse employee, and our clients to manage and track their shipment by React, React Hook, Formik (Including User Mgmt, Shipement Mgmt, Tracking Mgmt, Cargo Mgmt)',
              'Led junior engineers to develop the features and deployment to a product by Github flow.',
              'Negotiated requirements and releasing schedule with business analyst and backend engineers ensure the result can be satisfied by our business model.',
            ]}
          />
          <ExperienceSection
            jobTitle="Superier Engineer"
            companyName="Hyweb Technology Inc."
            city="Taipei"
            startDate="10/2017"
            endDate="04/2020"
            experienceList={[
              'Launched the new system by Java, Oracle Spring framework, MyBatis, Hibernate, JQuery, Reactjs.',
              'Assisted team members to learn new frontend framework and develop the new features',
              'Analyzed and integrated the old system to the present system',
            ]}
          />
          <ExperienceSection
            jobTitle="Engineer"
            companyName="Hyweb Technology Inc."
            city="Taipei"
            startDate="10/2015"
            endDate="10/2017"
            experienceList={[
              'Design and implement new features to our systems by Java, Spring framework, Hibernate, Jquery',
            ]}
          />
          <ExperienceSection
            jobTitle="Software Developer"
            companyName="Symphox Information Co.,Ltd."
            city="Taipei"
            startDate="09/2014"
            endDate="09/2015"
            experienceList={[
              'Develop and maintain content management system for the online shopping mall by Java, Spring MVC, Oracle, MyBatis.',
            ]}
          />
        </InfoSection>
        <InfoSection title="Education">
          <EduSection
            schoolName="National Taiwan Normal University"
            location="Taipei, Taiwan"
            degree="Master of Science"
            major="Computer Science and Imformation Engineering"
            gradiatedDate="07/2013"
          />
        </InfoSection>
      </div>
      <div className={styles['page-bottom-space']} />
    </div>
  )
}

export default AboutMePage
