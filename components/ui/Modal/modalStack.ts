const modalStack: string[] = []
let bodyOverflow = ""
let paddingRight = ""

export const pushModal = (id: string) => {
  if (modalStack.includes(id)) return

  if (modalStack.length === 0) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    bodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    paddingRight = document.body.style.paddingRight
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  modalStack.push(id)
}

export const removeModal = (id: string) => {
  const currentId = modalStack.indexOf(id)
  if (currentId >= 0) {
    modalStack.splice(currentId, 1)
  }

  if (modalStack.length === 0) {
    document.body.style.overflow = bodyOverflow
    document.body.style.paddingRight = paddingRight
  }
}

export const isTopModal = (id: string) => {
  const last = modalStack.length - 1
  return modalStack[last] === id
}
