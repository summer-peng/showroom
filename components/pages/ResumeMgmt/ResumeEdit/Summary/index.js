import { Formik } from 'formik'

import FormField from '@/components/commons/Forms/FormField'
import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

const Summary = ({ resumes, onSubmit, onBack }) => {
  return (
    <Formik initialValues={{ summary: resumes.summary }} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <div>
            <FormField type="textarea" name="summary" label="Summary" />
            <ButtonGroup onBack={onBack} onNext={handleSubmit} />
          </div>
        )
      }}
    </Formik>
  )
}

export default Summary
