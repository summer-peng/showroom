import { useRef } from 'react'
import dynamic from 'next/dynamic'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

const CoreCompetencies = ({ resumes, onSubmit, onBack }) => {
  const DraftEditor = dynamic(() => import('@/components/commons/DraftEditor'))

  const state = useRef(resumes.coreCompetencies)

  return (
    <div>
      <DraftEditor
        onChange={(contentState) => {
          state.current = contentState
        }}
        initialVale={resumes.coreCompetencies}
      />
      <ButtonGroup
        onBack={onBack}
        onNext={() => {
          onSubmit({ coreCompetencies: state.current })
        }}
      />
    </div>
  )
}

export default CoreCompetencies
