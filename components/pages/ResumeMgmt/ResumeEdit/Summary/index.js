import { useRef } from 'react'
import dynamic from 'next/dynamic'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

const Summary = ({ resumes, onSubmit, onBack }) => {
  const DraftEditor = dynamic(() => import('@/components/commons/DraftEditor'))

  const state = useRef(null)

  return (
    <div>
      <DraftEditor
        onChange={(contentState) => {
          state.current = contentState
        }}
        initialVale={resumes.summary}
      />
      <ButtonGroup
        onBack={onBack}
        onNext={() => {
          onSubmit({ summary: state.current })
        }}
      />
    </div>
  )
}

export default Summary
