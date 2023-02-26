import { useState } from 'react'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'
import CreateList from '@/components/pages/ResumeMgmt/CreateList'

const Skills = ({ resumes, onSubmit, onBack }) => {
  const [skillList, setSkillList] = useState(resumes.skills || [])

  const handleSubmit = () => {
    onSubmit(skillList)
  }
  return (
    <div>
      <CreateList
        valueList={skillList}
        setValueList={setSkillList}
        placeholder="Please add your skills"
      />
      <ButtonGroup onNext={handleSubmit} onBack={onBack} />
    </div>
  )
}

export default Skills
