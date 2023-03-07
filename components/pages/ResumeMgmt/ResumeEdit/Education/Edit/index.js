import { useCallback } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Formik } from 'formik'

import FormField from '@/components/commons/Forms/FormField'
import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

import { ACTION } from '../utils'

const Edit = ({ education, currentIndex, setState }) => {
  const edu = education[currentIndex] || {}

  const onBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: null,
      page: ACTION.LIST,
    }))
  }, [setState])

  const onSubmit = useCallback(
    (form) => {
      setState((prev) => {
        const { myEducation } = prev
        const newExp = [...myEducation]
        newExp[currentIndex] = form
        return {
          myEducation: newExp,
          currentIndex: null,
          page: ACTION.LIST,
        }
      })
    },
    [currentIndex, setState],
  )
  return (
    <div className="edit-form">
      <Formik initialValues={edu} onSubmit={onSubmit}>
        {({ handleSubmit }) => {
          return (
            <div>
              <h2>Update your education</h2>
              <Row>
                <Col>
                  <FormField label="School Name" name="name" />
                </Col>
                <Col>
                  <FormField label="School Location" name="location" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormField label="Degree" name="degree" />
                </Col>
                <Col>
                  <FormField label="Major" name="major" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormField label="Start Date" name="startDate" />
                </Col>
                <Col>
                  <FormField label="End Date" name="endDate" />
                </Col>
              </Row>
              <ButtonGroup
                onBack={onBack}
                onNext={handleSubmit}
                nextTitle="save"
              />
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default Edit
