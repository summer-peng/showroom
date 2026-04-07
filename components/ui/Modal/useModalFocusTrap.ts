import { useEffect } from "react"

import { getFocusableElements } from "./focusUtils"

type UseModalFocusTrapProps = {
  open: boolean
  containerRef: React.RefObject<HTMLElement | null>
  onClose: () => void
  closeOnEsc?: boolean
  isTopModal: () => boolean
}

const useModalFocusTrap = ({
  open,
  containerRef,
  onClose,
  closeOnEsc,
  isTopModal,
}: UseModalFocusTrapProps) => {
  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    const contentEl = containerRef.current
    if (contentEl) {
      const focusableElementList = getFocusableElements(contentEl)

      const focusable = focusableElementList[0] ?? contentEl

      focusable?.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isTopModal()) return

      if (closeOnEsc && e.key === "Escape") {
        onClose()
      }

      if (e.key !== "Tab") return

      const content = containerRef.current
      if (!content) {
        return
      }

      const focusableElements = getFocusableElements(content)

      if (focusableElements.length === 0) {
        e.preventDefault()
        content.focus()
        return
      }

      const activeElement = document.activeElement
      const firstElement = focusableElements[0] ?? content
      const lastElement =
        focusableElements[focusableElements.length - 1] ?? content

      if (e.shiftKey) {
        if (activeElement === firstElement || activeElement === content) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open, onClose, closeOnEsc, containerRef, isTopModal])
}

export default useModalFocusTrap
