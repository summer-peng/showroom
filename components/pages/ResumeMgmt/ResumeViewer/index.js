import { useMemo } from 'react'

import EngineerTemplate from './Templates/Engineer'
import TraditionalTemplate from './Templates/Traditional'
import { TEMPLATE_TYPE } from './const'

const ResumeViewer = ({ resume }) => {
  const { resumeType } = resume

  const ResumetTemplate = useMemo(() => {
    switch (resumeType) {
      case TEMPLATE_TYPE.TRADITIONAL: {
        return TraditionalTemplate
      }
      case TEMPLATE_TYPE.ENGINEER: {
        return EngineerTemplate
      }
      default: {
        return TraditionalTemplate
      }
    }
  }, [resumeType])

  return <ResumetTemplate resume={resume} />
}

export default ResumeViewer
