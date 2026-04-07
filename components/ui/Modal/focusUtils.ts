export const getFocusableElements = (container: HTMLElement) => {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ].join(","),
    ),
  ).filter((el) => {
    const isDisabled = el.hasAttribute("disabled")
    const isAriaHidden = el.getAttribute("aria-hidden") === "true"
    return !isDisabled && !isAriaHidden
  })
}
