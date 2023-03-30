import PropTypes from 'prop-types'

import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import Item from './Item'

const EduSection = ({ education }) => {
  return (
    <InfoSection title="Education">
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
  education: [],
}

EduSection.propTypes = {
  education: PropTypes.array,
}

export default EduSection
