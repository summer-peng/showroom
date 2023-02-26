import { useMemo, useState } from 'react'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

import Edit from './Edit'
import List from './List'
import { ACTION } from './utils'

const Experience = ({ resumes, onSubmit, onBack }) => {
  const [state, setState] = useState({
    myExperience: resumes.experience || [],
    page: ACTION.LIST,
    currentIndex: null,
  })

  const { page, myExperience, currentIndex } = state

  const ExperiencePhase = useMemo(() => {
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
      <ExperiencePhase
        experience={myExperience}
        currentIndex={currentIndex}
        setState={setState}
      />
      {page === ACTION.LIST && (
        <ButtonGroup
          onBack={onBack}
          onNext={() => {
            onSubmit(myExperience)
          }}
          nextTitle="Next"
        />
      )}
    </div>
  )
}

export default Experience
