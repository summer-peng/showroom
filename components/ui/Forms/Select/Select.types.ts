import type { Props as ReactSelectProps } from "react-select"

export interface SelectProps extends ReactSelectProps {
  label?: string
  name: string
}
