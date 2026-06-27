import { forwardRef } from "react"
import { Form } from "react-bootstrap"
import dynamic from "next/dynamic"
import type { SelectInstance } from "react-select"

import { SelectProps } from "./Select.types"

const Select = ({
  label,
  name,
  options,
  defaultValue,
  ...restProps
}: SelectProps) => {
  const ReactSelect = dynamic(() => import("react-select"), {
    ssr: false,
  })

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <ReactSelect
        name={name}
        options={options}
        defaultValue={defaultValue}
        {...restProps}
      />
    </Form.Group>
  )
}

export default forwardRef<SelectInstance<SelectProps>, SelectProps>(Select)
