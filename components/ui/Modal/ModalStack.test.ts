import { isTopModal, pushModal, removeModal } from "./modalStack"

describe("ui/Modal/ModalStack test", () => {
  beforeEach(() => {
    removeModal("modal-1")
    removeModal("modal-2")
    removeModal("modal-3")

    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  })

  it("should add modal", () => {
    pushModal("modal-1")
    expect(isTopModal("modal-1")).toBe(true)
  })

  it("should remove modal", () => {
    pushModal("modal-1")
    pushModal("modal-2")
    expect(isTopModal("modal-2")).toBe(true)

    removeModal("modal-2")
    expect(isTopModal("modal-1")).toBe(true)
    expect(isTopModal("modal-2")).toBe(false)
  })

  it("should not duplicate same modal id", () => {
    pushModal("modal-1")
    pushModal("modal-1")

    removeModal("modal-1")

    expect(isTopModal("modal-1")).toBe(false)
  })

  it("should add overflow hidden on body", () => {
    pushModal("modal-1")

    expect(document.body).toHaveStyle({ overflow: "hidden" })
  })

  it("should recover overflow on body after close modal", () => {
    document.body.style.overflow = "scroll"

    pushModal("modal-1")

    expect(document.body).toHaveStyle({ overflow: "hidden" })

    removeModal("modal-1")

    expect(document.body).toHaveStyle({ overflow: "scroll" })
  })

  it("should recover paddingRight on body after close modal", () => {
    document.body.style.paddingRight = "20px"

    pushModal("modal-1")

    removeModal("modal-1")

    expect(document.body).toHaveStyle({ paddingRight: "20px" })
  })
})
