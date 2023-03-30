import { useRouter } from 'next/router'

import useBlockUI from '@/hooks/useBlockUI'
import MessageUtils from '@/utils/messageUtils'

import {
  coreCompetenciesAction,
  educationAction,
  experienceAction,
  headerAction,
  interestsAction,
  nextPhaseAction,
  resumeTypeAction,
  summaryAction,
} from './actions'
import { upsertResume } from './api'
import { PHASES } from './utils'

const useSubmitAndBack = ({ state, dispatch }) => {
  const { steps } = state
  const { blockUI, unBlockUI } = useBlockUI()
  const router = useRouter()

  const SUBMIT_MAPPING = {
    [PHASES.CHOOSE_TEMPLATE]: (resumeType) => {
      dispatch(resumeTypeAction(resumeType))
    },
    [PHASES.HEADER]: (header) => {
      dispatch(headerAction(header))
    },
    [PHASES.SUMMARY]: (summary) => {
      dispatch(summaryAction(summary))
    },
    [PHASES.CORE_COMPENTENCIES]: (coreCompetencies) => {
      dispatch(coreCompetenciesAction(coreCompetencies))
    },
    [PHASES.EXPERIENCE]: (experience) => {
      dispatch(experienceAction(experience))
    },
    [PHASES.EDUCATION]: (education) => {
      dispatch(educationAction(education))
    },
    [PHASES.INTERESTS]: (interests) => {
      blockUI()
      dispatch(interestsAction(interests))
      const resumes = {
        ...state.resumes,
        interests,
      }

      upsertResume(resumes)
        .then(() => {
          unBlockUI()
          return MessageUtils.success()
        })
        .then(() => {
          router.push('/resume-mgmt/resume-query')
        })
        .catch(() => {
          unBlockUI()
        })
    },
  }

  const BACK_MAPPING = {
    [PHASES.CHOOSE_TEMPLATE]: () => {
      router.push('/resume-mgmt/resume-query')
    },
  }

  steps.forEach((step) => {
    const id = step.id
    if (id !== PHASES.CHOOSE_TEMPLATE)
      BACK_MAPPING[id] = () => {
        dispatch(nextPhaseAction('prev'))
      }
  })

  return { SUBMIT_MAPPING, BACK_MAPPING }
}

export default useSubmitAndBack
