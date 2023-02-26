import { useCallback, useState } from 'react'
import { Form } from 'react-bootstrap'
import classnames from 'classnames'

import styles from './styles.module.scss'

const TextAddingInput = ({ label, name, onAdd, ...restProps }) => {
  const [val, setVal] = useState('')

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (val) {
          onAdd(val)
          setVal('')
        }
      }
    },
    [onAdd, val],
  )

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Group className={styles['group']}>
        <Form.Control
          type="text"
          name={name}
          {...restProps}
          onChange={(e) => {
            setVal(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          value={val}
        />
        <i
          className={classnames('fa-solid fa-plus')}
          onClick={() => {
            if (val) {
              onAdd(val)
              setVal('')
            }
          }}
        />
      </Form.Group>
    </Form.Group>
  )
}

export default TextAddingInput
