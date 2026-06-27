import { useState, Ref, forwardRef } from "react"
import { Form } from "react-bootstrap"
import classnames from "classnames"

import type { TextInputProps } from "./TextInput.types"
import styles from "./PasswordInput.module.scss"

const PasswordInput = (
  { label, name, ...restProps }: TextInputProps,
  ref: Ref<HTMLInputElement>,
) => {
  const [show, setShow] = useState(false)

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Group className={styles["eye-group"]}>
        <Form.Control
          ref={ref}
          type={show ? "text" : "password"}
          name={name}
          {...restProps}
        />
        <i
          className={classnames(
            "fa-regular fa-eye",
            show ? styles["show-password"] : null,
          )}
          onClick={() => setShow(!show)}
        ></i>
      </Form.Group>
    </Form.Group>
  )
}

export default forwardRef<HTMLInputElement, TextInputProps>(PasswordInput)
