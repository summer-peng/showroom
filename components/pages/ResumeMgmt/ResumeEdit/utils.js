export const CHANGE_PHASE = 'change_phase'
export const PHASES = {
  HEADER: 'header',
  SUMMARY: 'summary',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
}

export const steps = Object.keys(PHASES).map((key) => {
  return {
    id: PHASES[key],
    title: PHASES[key],
    active: PHASES[key] === PHASES.HEADER ? true : false,
  }
})

export const defaultState = {
  resumes: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    skills: [],
    experience: [],
    education: [],
  },
  currentPhase: PHASES.HEADER,
  steps: [...steps],
}

export const initialTestStates = {
  resumes: {
    firstName: 'Chen-Tsung',
    lastName: 'Peng',
    phoneNumber: '3345678',
    email: 'zjone.peng@gmail.com',
    skills: ['JAVA', 'EEE', 'EEE', 'EESDSD', 'SDSD'],
    experience: [
      {
        jobTitle: 'Frontend Engineer',
        companyName: 'Morrison Express Corporation.',
        city: 'Taipei',
        startDate: '04/2020',
        endDate: '04/2022',
        detail: [
          'Launched several systems to help administrators, warehouse employees, and clients to manage and track shipments by React, React Hook, Formik (Including User Mgmt, Shipment Mgmt, Tracking Mgmt, Cargo Mgmt)',
          'Led junior engineers to develop the features and deployment for a product by Github flow',
          'Negotiated requirements and release schedule with business analyst and backend engineers to ensure that our business model would provide satisfactory results',
        ],
      },
      {
        jobTitle: 'Superier Engineer',
        companyName: 'Hyweb Technology Inc.',
        city: 'Taipei',
        startDate: '10/2017',
        endDate: '04/2020',
        detail: [
          'Launched new systems by Java, Oracle Spring framework, MyBatis, Hibernate, JQuery, Reactjs',
          'Assisted team members to learn new frontend framework and develop new features',
          'Analyzed and integrated old system to present system',
        ],
      },
      {
        jobTitle: 'Engineer',
        companyName: 'Hyweb Technology Inc.',
        city: 'Taipei',
        startDate: '10/2015',
        endDate: '10/2017',
        detail: [
          'Designed and implemented new features to systems by Java, Spring framework, Hibernate, Jquery',
        ],
      },
      {
        jobTitle: 'Software Developer',
        companyName: 'Symphox Information Co.,Ltd.',
        city: 'Taipei',
        startDate: '09/2014',
        endDate: '09/2015',
        detail: [
          'Developed and maintained content management system for online shopping mall by Java, Spring MVC, Oracle, MyBatis',
        ],
      },
    ],
    education: [
      {
        name: 'National Taiwan Normal University',
        location: 'Taiwan',
        degree: 'Master of Science',
        major: 'Computer Science Information Engineering',
        startDate: '09/2011',
        endDate: '07/2013',
      },
    ],
  },
  currentPhase: PHASES.HEADER,
  steps: [...steps],
}

const utils = {
  CHANGE_PHASE,
  PHASES,
  defaultState,
  initialTestStates,
}

export default utils
