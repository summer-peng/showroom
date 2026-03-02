import PropTypes from 'prop-types'

import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import styles from './styles.module.scss'

const InterestsSection = ({ title, interests }) => {
  if (!interests || interests.length === 0) {
    return
  }

  return (
    <InfoSection title={title}>
      <ul className={styles['interests-ul']}>
        {interests.map((intrs, index) => {
          return <li key={index}>{intrs}</li>
        })}
      </ul>
    </InfoSection>
  )
}

InterestsSection.defaultProps = {
  title: '',
  interests: [],
}

InterestsSection.propTypes = {
  title: PropTypes.string,
  interests: PropTypes.array,
}

export default InterestsSection
