import { useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

import StepProgress from '@/components/commons/StepProgress'
import ChooseTemplate from '@/components/pages/ResumeMgmt/ResumeEdit/ChooseTemplate'
import CoreCompetencies from '@/components/pages/ResumeMgmt/ResumeEdit/CoreCompetencies'
import Education from '@/components/pages/ResumeMgmt/ResumeEdit/Education'
import Experience from '@/components/pages/ResumeMgmt/ResumeEdit/Experience'
import Header from '@/components/pages/ResumeMgmt/ResumeEdit/Header'
import Interests from '@/components/pages/ResumeMgmt/ResumeEdit/Interests'
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
      case PHASES.CHOOSE_TEMPLATE: {
        return ChooseTemplate
      }
      case PHASES.HEADER: {
        return Header
      }
      case PHASES.SUMMARY: {
        return Summary
      }
      case PHASES.CORE_COMPENTENCIES: {
        return CoreCompetencies
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
      case PHASES.INTERESTS: {
        return Interests
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
