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
            Software Engineer with 7 years experience working in IT industry.
            Excels at developing and optimizing the core modules to web
            application. Able to design a web app to attract users with
            aesthetically pleasing interfaces and exceptional UX elements.
            Willing to adopt new technologies and embrace friendly changes to
            improve abilities and enhance projects.
          </div>
        </InfoSection>
        <InfoSection title="Skills">
          <ul className={styles['skills-ul']}>
            <li>
              Frontend Programming: Javascript, React and <br /> React Hooks,
              jQuery, HTML, CSS, Bootstrap
            </li>
            <li>Version Control Systems: Git, Github</li>
            <li>
              Back-End and Database Skills: Java, Spring, Oracle, ORM tools
            </li>
            <li>Time Management and Prioritization</li>
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
              'Launched several systems to help our administrator, warehouse employees, and our clients to manage and track their shipments by React, React Hook, Formik (Including User Mgmt, Shipment Mgmt, Tracking Mgmt, Cargo Mgmt)',
              'Led junior engineers to develop the features and deployment for a product by Github flow.',
              'Negotiated requirements and release schedule with business analyst and backend engineers to ensure that our business model would provide satisfactory results.',
            ]}
          />
          <ExperienceSection
            jobTitle="Superier Engineer"
            companyName="Hyweb Technology Inc."
            city="Taipei"
            startDate="10/2017"
            endDate="04/2020"
            experienceList={[
              'Launched new systems by Java, Oracle Spring framework, MyBatis, Hibernate, JQuery, Reactjs.',
              'Assisted team members to learn new frontend framework and develop new features',
              'Analyzed and integrated old system to present system',
            ]}
          />
          <ExperienceSection
            jobTitle="Engineer"
            companyName="Hyweb Technology Inc."
            city="Taipei"
            startDate="10/2015"
            endDate="10/2017"
            experienceList={[
              'Designed and implemented new features to systems by Java, Spring framework, Hibernate, Jquery',
            ]}
          />
          <ExperienceSection
            jobTitle="Software Developer"
            companyName="Symphox Information Co.,Ltd."
            city="Taipei"
            startDate="09/2014"
            endDate="09/2015"
            experienceList={[
              'Developed and maintained content management system for online shopping mall by Java, Spring MVC, Oracle, MyBatis.',
            ]}
          />
          <ExperienceSection
            companyName="Substitute Military Service"
            city="Taiwan"
            startDate="08/2013"
            endDate="08/2014"
            experienceList={[
              'Maintained campus safety and dealt with general affairs in elementary school',
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
