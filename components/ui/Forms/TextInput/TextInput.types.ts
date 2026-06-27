import type { FormControlProps } from "react-bootstrap"

export interface TextInputProps extends FormControlProps {
  label?: string
  name: string
}
