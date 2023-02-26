import { useCallback } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Formik } from 'formik'

import FormField from '@/components/commons/Forms/FormField'
import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'
import CreateList from '@/components/pages/ResumeMgmt/CreateList'

import { ACTION } from '../utils'

const Edit = ({ experience, currentIndex, setState }) => {
  const exp = experience[currentIndex]

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
        const { myExperience } = prev
        const newExp = [...myExperience]
        newExp[currentIndex] = form
        return {
          myExperience: newExp,
          currentIndex: null,
          page: ACTION.LIST,
        }
      })
    },
    [currentIndex, setState],
  )
  return (
    <div className="edit-form">
      <Formik initialValues={exp} onSubmit={onSubmit}>
        {({ handleSubmit, setFieldValue, values }) => {
          const detail = values.detail || []
          return (
            <div>
              <h2>Update your experience</h2>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <FormField label="Job Title" name="jobTitle" />
                    </Col>
                    <Col>
                      <FormField label="Company Name" name="companyName" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormField label="City" name="city" />
                    </Col>
                    <Col>
                      <FormField label="Province" name="province" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormField
                        label="Start Date"
                        name="startDate"
                        placeholder="mm/yyyy"
                      />
                    </Col>
                    <Col>
                      <FormField
                        label="End Date"
                        name="endDate"
                        placeholder="mm/yyyy"
                      />
                    </Col>
                  </Row>
                </Col>
                {/** detail */}
                <Col>
                  <CreateList
                    valueList={detail}
                    setValueList={(valueList) => {
                      setFieldValue('detail', valueList)
                    }}
                  />
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
