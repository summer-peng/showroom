import { useState } from 'react'
import { Form } from 'react-bootstrap'
import classnames from 'classnames'

import styles from './styles.module.scss'

const PasswordInput = ({ label, name, ...restProps }) => {
  const [show, setShow] = useState(false)
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Group className={styles['eye-group']}>
        <Form.Control
          type={show ? 'text' : 'password'}
          name={name}
          {...restProps}
        />
        <i
          className={classnames(
            'fa-regular fa-eye',
            show ? styles['show-password'] : null,
          )}
          onClick={() => setShow(!show)}
        ></i>
      </Form.Group>
    </Form.Group>
  )
}

export default PasswordInput
