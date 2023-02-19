import { useState } from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/commons/Buttons'
import FormField from '@/components/commons/Forms/FormField'

import validationSchema from './validations'

import styles from './styles.module.scss'

const initialValues = {
  email: '',
  password: '',
}

const Signin = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const onSubmit = ({ email, password }) => {
    return signIn('credentials', { email, password, redirect: false }).then(
      (response) => {
        const { status, ok, error: resError } = response
        if (ok && status === 200) {
          const queryString = window.location.search
          const urlParams = new URLSearchParams(queryString)
          const redirectUrl = urlParams.get('redirectUrl') || '/'
          router.push(redirectUrl)
        } else {
          setError(resError)
        }
      },
    )
  }

  return (
    <div className={styles['container']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <div className={styles['signin-form']}>
              <h2>Login to my website</h2>
              <div>
                <FormField label="Email" name="email" />
              </div>
              <div>
                <FormField type="password" label="Password" name="password" />
              </div>
              <div className={styles['error']}>{error}</div>
              <Button
                className={styles['signin-btn']}
                type="primary"
                titleKey="Login"
                onClick={handleSubmit}
              />
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default Signin
