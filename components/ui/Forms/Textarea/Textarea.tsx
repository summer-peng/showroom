import { Ref, forwardRef } from "react"
import { Form } from "react-bootstrap"

import type { TextareaProps } from "./Textarea.types"

const Textarea = (
  { label, name, row = 5, ...restProps }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>,
) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        ref={ref}
        {...restProps}
        name={name}
        row={row}
      />
    </Form.Group>
  )
}

export default forwardRef<HTMLTextAreaElement, TextareaProps>(Textarea)
