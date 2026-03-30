import { createRef } from "react"
import { render, screen } from "@testing-library/react"

import Button from "./Button"

// mock Spinner，避免把測試焦點放到 Spinner 本身
jest.mock("../Spinner", () => ({
  Spinner: ({ size }: { size: number }) => (
    <div data-testid="spinner" data-size={size} />
  ),
}))

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
  })

  it('uses "button" as default type', () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
  })

  it("uses provided type when passed", () => {
    render(<Button type="submit">Submit</Button>)

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit")
  })

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Save</Button>)

    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("sets aria-busy=false by default", () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "false")
  })

  it("sets aria-busy=true and disables button when loading", () => {
    render(<Button loading>Save</Button>)

    const button = screen.getByRole("button")

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute("aria-busy", "true")
  })

  it("renders loading status and spinner when loading", () => {
    render(<Button loading>Save</Button>)

    expect(screen.getByRole("status")).toBeInTheDocument()
    expect(screen.getByTestId("spinner")).toBeInTheDocument()
    expect(screen.getByTestId("spinner")).toHaveAttribute("data-size", "24")
  })

  it("does not render loading status when not loading", () => {
    render(<Button>Save</Button>)

    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument()
  })

  it("renders startIcon when provided", () => {
    render(
      <Button startIcon={<span data-testid="start-icon">S</span>}>Save</Button>,
    )

    expect(screen.getByTestId("start-icon")).toBeInTheDocument()
  })

  it("renders endIcon when provided", () => {
    render(
      <Button endIcon={<span data-testid="end-icon">E</span>}>Save</Button>,
    )

    expect(screen.getByTestId("end-icon")).toBeInTheDocument()
  })

  it("forwards ref to the button element", () => {
    const ref = createRef<HTMLButtonElement>()

    render(<Button ref={ref}>Save</Button>)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current).toBe(screen.getByRole("button"))
  })
})
