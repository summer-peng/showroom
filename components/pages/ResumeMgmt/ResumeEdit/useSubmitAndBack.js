import { useRouter } from 'next/router'

import MessageUtils from '@/utils/messageUtils'

import {
  educationAction,
  experienceAction,
  headerAction,
  nextPhaseAction,
  skillsAction,
  summaryAction,
} from './actions'
import { upsertResume } from './api'
import { PHASES } from './utils'

const useSubmitAndBack = ({ state, dispatch }) => {
  const router = useRouter()

  const SUBMIT_MAPPING = {
    [PHASES.HEADER]: (header) => {
      dispatch(headerAction(header, PHASES.SUMMARY))
    },
    [PHASES.SUMMARY]: (summary) => {
      dispatch(summaryAction(summary, PHASES.SKILLS))
    },
    [PHASES.SKILLS]: (skills) => {
      dispatch(skillsAction(skills, PHASES.EXPERIENCE))
    },
    [PHASES.EXPERIENCE]: (experience) => {
      dispatch(experienceAction(experience, PHASES.EDUCATION))
    },
    [PHASES.EDUCATION]: (education) => {
      dispatch(educationAction(education, PHASES.EDUCATION))
      const resumes = {
        ...state.resumes,
        education,
      }

      upsertResume(resumes)
        .then(() => {
          return MessageUtils.success()
        })
        .then(() => {
          router.push('/resume-mgmt/resume-query')
        })
    },
  }

  const BACK_MAPPING = {
    [PHASES.HEADER]: () => {
      router.push('/')
    },
    [PHASES.SUMMARY]: () => {
      dispatch(nextPhaseAction(PHASES.HEADER))
    },
    [PHASES.SKILLS]: () => {
      dispatch(nextPhaseAction(PHASES.SUMMARY))
    },
    [PHASES.EXPERIENCE]: () => {
      dispatch(nextPhaseAction(PHASES.SKILLS))
    },
    [PHASES.EDUCATION]: () => {
      dispatch(nextPhaseAction(PHASES.EXPERIENCE))
    },
  }

  return { SUBMIT_MAPPING, BACK_MAPPING }
}

export default useSubmitAndBack
