import { useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

import StepProgress from '@/components/commons/StepProgress'
import Education from '@/components/pages/ResumeMgmt/ResumeEdit/Education'
import Experience from '@/components/pages/ResumeMgmt/ResumeEdit/Experience'
import Header from '@/components/pages/ResumeMgmt/ResumeEdit/Header'
import Skills from '@/components/pages/ResumeMgmt/ResumeEdit/Skills'
import Summary from '@/components/pages/ResumeMgmt/ResumeEdit/Summary'

import reducer from './reducer'
import useSubmitAndBack from './useSubmitAndBack'
import { defaultState, PHASES } from './utils'

const ResumeEdit = ({ initialResume }) => {
  const initialStates = {
    ...defaultState,
    resumes: {
      ...defaultState.resumes,
      ...initialResume,
    },
  }

  const [state, dispatch] = useReducer(reducer, initialStates)
  const { currentPhase, steps } = state

  const { SUBMIT_MAPPING, BACK_MAPPING } = useSubmitAndBack({ state, dispatch })

  const CurrentPhaseForm = useMemo(() => {
    switch (currentPhase) {
      case PHASES.HEADER: {
        return Header
      }
      case PHASES.SUMMARY: {
        return Summary
      }
      case PHASES.SKILLS: {
        return Skills
      }
      case PHASES.EXPERIENCE: {
        return Experience
      }
      case PHASES.EDUCATION: {
        return Education
      }
    }
  }, [currentPhase])

  return (
    <div>
      <StepProgress steps={steps} />
      <CurrentPhaseForm
        {...state}
        onSubmit={SUBMIT_MAPPING[currentPhase]}
        onBack={BACK_MAPPING[currentPhase]}
      />
    </div>
  )
}

ResumeEdit.propTypes = {
  initialResume: PropTypes.object,
}

export default ResumeEdit
