import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import FormField from '@/components/commons/Forms/FormField'
import API from '@/utils/apiUtils'
import MessageUtils from '@/utils/messageUtils'

import validationSchema from './validations'

const UserEdit = ({ title, initialValues }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const onSubmit = (values) => {
    return API.post('/api/users/upsertUser', values)
      .then(() => {
        return MessageUtils.success()
      })
      .then(() => {
        router.push('/users/userQuery')
      })
      .catch((e) => {
        MessageUtils.error({ text: e })
        console.error({ text: e })
      })
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form>
          <Container>
            <h2>{title}</h2>
            <Row>
              <Col>
                <FormField label={t('first_name')} name="first_name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField label={t('last_name')} name="last_name" />
              </Col>
            </Row>
            <div>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

UserEdit.defaultProps = {
  title: '',
  initialValues: {},
}

UserEdit.propTypes = {
  title: PropTypes.string,
  initialValues: PropTypes.object,
}

export default UserEdit
