import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import { useRouter } from 'next/router'

import FormField from '@/components/Forms/FormField'
import API from '@/utils/apiUtils'

import validationSchema from './validations'

export const getServerSideProps = () => {
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'User Query',
      url: '/users/userQuery',
    },
    {
      name: 'User Create',
      active: true,
    },
  ]
  return {
    props: {
      breadCrumbItems,
    },
  }
}

const UserEdit = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const onSubmit = (values) => {
    console.log('values', values)
    return API.post('/api/users/upsertUser', values)
      .then(() => {
        router.push('/users/userQuery')
      })
      .catch((e) => {
        alert(JSON.stringify(e))
        console.error(e)
      })
  }

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: null,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form>
          <Container>
            <h2>User edit</h2>
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

export default UserEdit
