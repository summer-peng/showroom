import { Col, Row } from 'react-bootstrap'
import { Formik } from 'formik'

import FormField from '@/components/commons/Forms/FormField'
import ButtonGroup from '@/components/pages/ResumeMgmt/ButtonGroup'

const Header = ({ resumes, onSubmit, onBack }) => {
  return (
    <Formik onSubmit={onSubmit} initialValues={resumes}>
      {({ handleSubmit }) => {
        return (
          <div>
            <h3>About this Resume</h3>
            <Row>
              <Col>
                <FormField name="title" label="Title" />
              </Col>
              <Col>
                <FormField name="remark" label="remark" />
              </Col>
            </Row>
            <h3>Fill out your header</h3>
            <Row>
              <Col>
                <FormField name="firstName" label="First name" />
              </Col>
              <Col>
                <FormField name="lastName" label="Last name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField name="email" label="Email" />
              </Col>
              <Col>
                <FormField name="phoneNumber" label="Phone No." />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField name="city" label="City" />
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FormField name="province" label="Province" />
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FormField name="postalCode" label="Postal Code" />
              </Col>
            </Row>
            <ButtonGroup onBack={onBack} onNext={handleSubmit} />
          </div>
        )
      }}
    </Formik>
  )
}

export default Header
