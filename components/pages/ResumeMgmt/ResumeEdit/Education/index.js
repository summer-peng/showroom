import { useMemo, useState } from 'react'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

import Edit from './Edit'
import List from './List'
import { ACTION } from './utils'

const Education = ({ onSubmit, onBack, resumes }) => {
  const [state, setState] = useState({
    myEducation: resumes.education || [],
    page: ACTION.LIST,
    currentIndex: null,
  })

  const { page, myEducation, currentIndex } = state

  const EducationPhase = useMemo(() => {
    switch (page) {
      case ACTION.LIST: {
        return List
      }
      case ACTION.EDIT: {
        return Edit
      }
    }
  }, [page])

  return (
    <div>
      <EducationPhase
        education={myEducation}
        currentIndex={currentIndex}
        setState={setState}
      />
      {page === ACTION.LIST && (
        <ButtonGroup
          onBack={onBack}
          onNext={() => {
            onSubmit(myEducation)
          }}
          onCreate={() => {
            setState((prev) => {
              return {
                ...prev,
                page: ACTION.EDIT,
                currentIndex: myEducation.length,
              }
            })
          }}
          createTipMsg={myEducation.length === 0 ? 'Create here' : ''}
        />
      )}
    </div>
  )
}

export default Education
