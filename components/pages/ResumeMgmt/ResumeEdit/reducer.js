import { CHANGE_PHASE, PHASES } from './utils'

const reducer = (state, action) => {
  const { type, payload } = action
  const { steps } = state
  const changeStep = (nextPhase) => {
    // deep copy the steps array
    const newStepStatus = JSON.parse(JSON.stringify(steps))
    const nextIndex = steps.map((s) => s.id).indexOf(nextPhase)
    for (let i = 0; i < steps.length; i++) {
      if (i <= nextIndex) {
        newStepStatus[i].active = true
      } else {
        newStepStatus[i].active = false
      }
    }

    return newStepStatus
  }

  switch (type) {
    case CHANGE_PHASE: {
      const { nextPhase } = payload
      return {
        ...state,
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    case PHASES.HEADER: {
      const { resume, nextPhase } = payload
      return {
        ...state,
        resumes: {
          ...resume,
        },
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    case PHASES.SUMMARY: {
      const { summary, nextPhase } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          summary,
        },
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    case PHASES.SKILLS: {
      const { skills, nextPhase } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          skills,
        },
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    case PHASES.EXPERIENCE: {
      const { experience, nextPhase } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          experience,
        },
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    case PHASES.EDUCATION: {
      const { education, nextPhase } = payload
      return {
        ...state,
        resumes: {
          ...state.resumes,
          education,
        },
        currentPhase: nextPhase,
        steps: changeStep(nextPhase),
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
