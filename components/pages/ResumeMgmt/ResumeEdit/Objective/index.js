import { useRef } from 'react'
import dynamic from 'next/dynamic'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

const Objective = ({ resumes, onSubmit, onBack }) => {
  const DraftEditor = dynamic(() => import('@/components/commons/DraftEditor'))

  const state = useRef(resumes.objective)

  return (
    <div>
      <DraftEditor
        onChange={(contentState) => {
          state.current = contentState
        }}
        initialVale={resumes.objective}
      />
      <ButtonGroup
        onBack={onBack}
        onNext={() => {
          onSubmit({ objective: state.current })
        }}
      />
    </div>
  )
}

export default Objective
