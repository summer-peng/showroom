import { useState } from 'react'

import Select from '@/components/commons/Forms/Select'
import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'
import ResumeViewer from '@/components/pages/ResumeMgmt/ResumeViewer'
import { TEMPLATE_TYPE } from '@/components/pages/ResumeMgmt/ResumeViewer/const'

import { dummyData } from './const'

import styles from './styles.module.scss'

const options = Object.keys(TEMPLATE_TYPE).map((key) => {
  return {
    label: key,
    value: key,
  }
})

const ChooseTemplate = ({ resumes, onSubmit, onBack }) => {
  const resumeType = resumes.resumeType || TEMPLATE_TYPE.TRADITIONAL
  const selectedResumeType = { label: resumeType, value: resumeType }
  const [type, setType] = useState(selectedResumeType)

  const demoResume = resumes.title ? resumes : dummyData
  return (
    <div className={styles['template-selection-container']}>
      <Select
        className={styles['selector']}
        label="Resume Type"
        options={options}
        value={type}
        onChange={(v) => setType(v)}
      />
      <ResumeViewer resume={{ ...demoResume, resumeType: type.value }} />
      <ButtonGroup onBack={onBack} onNext={() => onSubmit(type.value)} />
    </div>
  )
}

export default ChooseTemplate
