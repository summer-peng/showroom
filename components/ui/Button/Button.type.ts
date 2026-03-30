import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: "primary" | "danger" | "secondary"
  startIcon?: ReactNode
  endIcon?: ReactNode
  disabled?: boolean
  loading?: boolean
}

export default ButtonProps
