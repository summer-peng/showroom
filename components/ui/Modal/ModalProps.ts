import { CSSProperties, ReactNode } from "react"

interface ModalProps {
  open: boolean
  onClose: () => void
  closeOnBackdropClick?: boolean
  closeOnEsc?: boolean
  showCloseButton?: boolean
  contentClassName?: string
  children?: ReactNode
  minHeight?: CSSProperties["minHeight"]
  ariaLabel?: string
  ariaLabelledBy?: string
  ariaDescribedBy?: string
}

export default ModalProps
