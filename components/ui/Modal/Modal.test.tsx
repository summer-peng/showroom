import userEvent from "@testing-library/user-event"
import { cleanup, render, screen } from "@testing-library/react"

import Modal from "./Modal"
import { removeModal } from "./modalStack"

describe("Modal", () => {
  beforeEach(() => {
    removeModal("modal-1")
    removeModal("modal-2")
    removeModal("modal-3")

    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  })

  afterEach(() => {
    cleanup()
  })

  it("should not render when open is false", () => {
    render(
      <Modal open={false} onClose={jest.fn()}>
        <div>modal content</div>
      </Modal>,
    )

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(screen.queryByText("modal content")).not.toBeInTheDocument()
  })

  it("should render when open is true", () => {
    render(
      <Modal open onClose={jest.fn()}>
        <div>modal content</div>
      </Modal>,
    )

    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("modal content")).toBeInTheDocument()
  })

  it("should call onClose when close button is clicked", async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()

    render(
      <Modal open onClose={onClose}>
        <div>modal content</div>
      </Modal>,
    )

    await user.click(screen.getByRole("button", { name: /close modal/i }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("should call onClose when backdrop is clicked", async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()

    render(
      <Modal open onClose={onClose}>
        <div>modal content</div>
      </Modal>,
    )

    const dialog = screen.getByRole("dialog")
    const overlay = dialog.parentElement

    expect(overlay).not.toBeNull()

    await user.click(overlay!)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("should not call onClose when modal content is clicked", async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()

    render(
      <Modal open onClose={onClose}>
        <div>modal content</div>
      </Modal>,
    )

    await user.click(screen.getByText("modal content"))

    expect(onClose).not.toHaveBeenCalled()
  })

  it("should call onClose when Escape is pressed", async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()

    render(
      <Modal open onClose={onClose} closeOnEsc>
        <button type="button">action</button>
      </Modal>,
    )

    await user.keyboard("{Escape}")

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("should render into document.body with portal", () => {
    render(
      <Modal open onClose={jest.fn()}>
        <div>portal content</div>
      </Modal>,
    )

    expect(document.body).toContainElement(screen.getByText("portal content"))
  })
})
