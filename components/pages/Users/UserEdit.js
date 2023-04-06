import { Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { BackButton, SubmitButton } from '@/components/commons/Buttons'
import FormField from '@/components/commons/Forms/FormField'
import useBlockUI from '@/hooks/useBlockUI'
import MessageUtils from '@/utils/messageUtils'

import { checkEmailExisted, upsertUser } from './apis'
import validationSchema from './validations'

import styles from './styles.module.scss'

const UserEdit = ({ title, initialValues, afterSubmit }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const { blockUI, unBlockUI } = useBlockUI()

  const checkEmail = (email) => {
    if (initialValues.email) {
      return new Promise((resolve) => resolve(false))
    } else {
      return checkEmailExisted(email)
    }
  }
  const onSubmit = (values, { setFieldError }) => {
    const { email } = values
    blockUI()
    return checkEmail(email).then((isExist) => {
      if (isExist) {
        setFieldError('email', 'The email is already registed')
      } else {
        upsertUser({ ...values, email: email.toLowerCase() })
          .then(() => {
            unBlockUI()
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
            unBlockUI()
          })
      }
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
