import { useMemo } from 'react'

import TraditionalTemplate from './Templates/Traditional'
import { TEMPLATE_TYPE } from './const'

const ResumeViewer = ({ resume }) => {
  const { resumeType } = resume

  const ResumetTemplate = useMemo(() => {
    switch (resumeType) {
      case TEMPLATE_TYPE.TRADITIONAL: {
        return TraditionalTemplate
      }
      default: {
        return TraditionalTemplate
      }
    }
  }, [resumeType])

  return <ResumetTemplate resume={resume} />
}

export default ResumeViewer
