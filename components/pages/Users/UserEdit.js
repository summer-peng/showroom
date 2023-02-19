import { Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { BackButton, SubmitButton } from '@/components/commons/Buttons'
import FormField from '@/components/commons/Forms/FormField'
import API from '@/utils/apiUtils'
import MessageUtils from '@/utils/messageUtils'

import validationSchema from './validations'

import styles from './styles.module.scss'

const UserEdit = ({ title, initialValues, afterSubmit }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const onSubmit = (values) => {
    return API.post('/api/users/upsertUser', values)
      .then(() => {
        return MessageUtils.success()
      })
      .then(() => {
        if (afterSubmit) {
          afterSubmit()
        } else {
          router.push('/users/user-query')
        }
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
                <FormField label={t('email')} name="email" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField
                  type="password"
                  label={t('password')}
                  name="password"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField label={t('firstName')} name="firstName" />
              </Col>
              <Col>
                <FormField label={t('lastName')} name="lastName" />
              </Col>
            </Row>
            <div className={styles['button-section']}>
              <BackButton />
              <SubmitButton onClick={handleSubmit} />
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
  afterSubmit: PropTypes.func,
}

export default UserEdit
