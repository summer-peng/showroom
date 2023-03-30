import { CHANGE_PHASE, PHASES } from './utils'

const changeStep = (currentPhase, steps, opeation) => {
  // deep copy the steps array
  const newSteps = JSON.parse(JSON.stringify(steps))
  const currentIndex = steps.map((s) => s.id).indexOf(currentPhase)
  const nextIndex =
    currentIndex + 1 >= steps.length ? currentIndex : currentIndex + 1
  const prevIndex = currentIndex - 1 <= 0 ? 0 : currentIndex - 1

  const newIndex = opeation === 'prev' ? prevIndex : nextIndex
  const nextPhase = steps[newIndex].id

  for (let i = 0; i < steps.length; i++) {
    if (i <= newIndex) {
      newSteps[i].active = true
    } else {
      newSteps[i].active = false
    }
  }

  return { newSteps, nextPhase }
}

const reducer = (state, action) => {
  const { type, payload } = action
  const { stepOperation = 'next' } = payload
  const { steps, currentPhase } = state

  const { newSteps, nextPhase } = changeStep(currentPhase, steps, stepOperation)

  switch (type) {
    case CHANGE_PHASE: {
      return {
        ...state,
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.CHOOSE_TEMPLATE: {
      const { resumeType } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          resumeType,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.HEADER: {
      const { resume } = payload
      return {
        ...state,
        resumes: {
          ...resume,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.CORE_COMPENTENCIES: {
      const { coreCompetencies } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          coreCompetencies,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.SUMMARY: {
      const { summary } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          summary,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.EXPERIENCE: {
      const { experience } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          experience,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.EDUCATION: {
      const { education } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          education,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    case PHASES.INTERESTS: {
      const { interests } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          interests,
        },
        currentPhase: nextPhase,
        steps: newSteps,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
