import { useState } from 'react'

import Select from '@/components/commons/Forms/Select'
import { langOptions } from '@/components/Layout/Navigation/const'
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
  const langValue = resumes.lang || 'en-US'
  const selectedResumeType = { label: resumeType, value: resumeType }
  const selectedLang = langOptions.find((opt) => opt.value === langValue)
  const [type, setType] = useState(selectedResumeType)
  const [lang, setLang] = useState(selectedLang)

  const demoResume = resumes.title ? resumes : dummyData

  return (
    <div className={styles['template-selection-container']}>
      <Select
        className={styles['selector']}
        label="Language"
        options={langOptions}
        value={lang}
        onChange={(v) => setLang(v)}
      />
      <Select
        className={styles['selector']}
        label="Resume Type"
        options={options}
        value={type}
        onChange={(v) => setType(v)}
      />
      <ResumeViewer resume={{ ...demoResume, resumeType: type.value }} />
      <ButtonGroup
        onBack={onBack}
        onNext={() => onSubmit({ resumeType: type.value, lang: lang.value })}
      />
    </div>
  )
}

export default ChooseTemplate
