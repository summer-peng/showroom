import type { FormControlProps } from "react-bootstrap"

export interface TextareaProps extends FormControlProps {
  label?: string
  name: string
  row?: number
}
