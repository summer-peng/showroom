import { CHANGE_PHASE, PHASES } from './utils'

export const nextPhaseAction = (nextPhase) => {
  return {
    type: CHANGE_PHASE,
    payload: { nextPhase },
  }
}

export const headerAction = (header, nextPhase) => {
  return {
    type: PHASES.HEADER,
    payload: {
      resume: { ...header },
      nextPhase,
    },
  }
}

export const summaryAction = (summaryForm, nextPhase) => {
  return {
    type: PHASES.SUMMARY,
    payload: {
      summary: summaryForm.summary,
      nextPhase,
    },
  }
}

export const skillsAction = (skills, nextPhase) => {
  return {
    type: PHASES.SKILLS,
    payload: {
      skills,
      nextPhase,
    },
  }
}

export const experienceAction = (experience, nextPhase) => {
  return {
    type: PHASES.EXPERIENCE,
    payload: {
      experience,
      nextPhase,
    },
  }
}

export const educationAction = (education, nextPhase) => {
  return {
    type: PHASES.EDUCATION,
    payload: {
      education,
      nextPhase,
    },
  }
}
