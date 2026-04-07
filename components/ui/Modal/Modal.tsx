import classnames from "classnames"
import { XCircle } from "react-feather"
import { useEffect, useRef, useId } from "react"
import { createPortal } from "react-dom"

import useModalFocusTrap from "./useModalFocusTrap"
import { isTopModal, pushModal, removeModal } from "./modalStack"
import type ModalProps from "./ModalProps"
import styles from "./styles.module.scss"

const Modal = ({
  open = false,
  onClose,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  contentClassName,
  children,
  minHeight = "160px",
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const modalId = useId()

  useModalFocusTrap({
    open,
    containerRef: contentRef,
    onClose,
    closeOnEsc,
    isTopModal: () => isTopModal(modalId),
  })

  useEffect(() => {
    if (!open) return

    pushModal(modalId)

    return () => {
      removeModal(modalId)
    }
  }, [open, onClose, modalId])

  if (!open) {
    return null
  }

  return createPortal(
    <div
      className={styles["overlay"]}
      onClick={(e) => {
        if (!isTopModal(modalId)) {
          return
        }

        if (closeOnBackdropClick && e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className={classnames(styles["modal"], contentClassName)}
        ref={contentRef}
        tabIndex={-1}
        style={{ minHeight }}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={() => {
              if (isTopModal(modalId)) {
                onClose()
              }
            }}
            className={styles["close-btn"]}
            aria-label="Close modal"
          >
            <XCircle aria-hidden="true" focusable="false" />
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
