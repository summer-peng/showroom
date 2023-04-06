import { useState } from 'react'

import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'
import CreateList from '@/components/pages/ResumeMgmt/CreateList'

const Interests = ({ resumes, onSubmit, onBack }) => {
  const [interestList, setInterestList] = useState(resumes.interests || [])

  const handleSubmit = () => {
    onSubmit(interestList)
  }
  return (
    <div>
      <CreateList
        valueList={interestList}
        setValueList={setInterestList}
        placeholder="Please add your interests"
      />
      <ButtonGroup nextTitle="Submit" onNext={handleSubmit} onBack={onBack} />
    </div>
  )
}

export default Interests
