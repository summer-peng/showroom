import PropTypes from 'prop-types'

import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import Item from './Item'

const EduSection = ({ title, education }) => {
  return (
    <InfoSection title={title}>
      {education.map((edu, index) => {
        const { name, location, degree, major, startDate, endDate } = edu
        return (
          <Item
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
  )
}

EduSection.defaultProps = {
  title: '',
  education: [],
}

EduSection.propTypes = {
  title: PropTypes.string,
  education: PropTypes.array,
}

export default EduSection
