import { forwardRef, Ref } from "react"
import { Form } from "react-bootstrap"

import type { TextInputProps } from "./TextInput.types"

const TextInput = (
  { label, name, ...restProps }: TextInputProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        ref={ref}
        type="text"
        name={name}
        size="sm"
        {...restProps}
      />
    </Form.Group>
  )
}

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput)
