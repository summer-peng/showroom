import { CHANGE_PHASE, PHASES } from './utils'

export const nextPhaseAction = (stepOperation) => {
  return {
    type: CHANGE_PHASE,
    payload: { stepOperation },
  }
}

export const resumeTypeAction = (resumeType) => {
  return {
    type: PHASES.CHOOSE_TEMPLATE,
    payload: {
      resumeType,
    },
  }
}

export const headerAction = (header) => {
  return {
    type: PHASES.HEADER,
    payload: {
      resume: { ...header },
    },
  }
}

export const coreCompetenciesAction = (form) => {
  return {
    type: PHASES.CORE_COMPENTENCIES,
    payload: {
      coreCompetencies: form.coreCompetencies,
    },
  }
}

export const summaryAction = (summaryForm) => {
  return {
    type: PHASES.SUMMARY,
    payload: {
      summary: summaryForm.summary,
    },
  }
}

export const experienceAction = (experience) => {
  return {
    type: PHASES.EXPERIENCE,
    payload: {
      experience,
    },
  }
}

export const educationAction = (education) => {
  return {
    type: PHASES.EDUCATION,
    payload: {
      education,
    },
  }
}

export const interestsAction = (interests) => {
  return {
    type: PHASES.INTERESTS,
    payload: {
      interests,
    },
  }
}
