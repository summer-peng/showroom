import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import styles from './styles.module.scss'

const InterestsSection = ({ interests }) => {
  return (
    <InfoSection title="Interests">
      <ul className={styles['interests-ul']}>
        {interests.map((intrs, index) => {
          return <li key={index}>{intrs}</li>
        })}
      </ul>
    </InfoSection>
  )
}

export default InterestsSection
