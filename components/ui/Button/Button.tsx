import { forwardRef, Ref } from "react"
import classnames from "classnames"

import { Spinner } from "../Spinner"

import styles from "./styles.module.scss"
import ButtonProps from "./Button.type"

const Button = (
  {
    children,
    variant = "primary",
    className,
    startIcon,
    endIcon,
    loading = false,
    disabled,
    ...restProps
  }: ButtonProps,
  ref: Ref<HTMLButtonElement> | undefined,
) => {
  return (
    <button
      type={restProps.type ?? "button"}
      ref={ref}
      aria-busy={loading}
      className={classnames(styles.common, styles[variant], className)}
      disabled={disabled || loading}
      {...restProps}
    >
      <span className={classnames({ [styles.hidden]: loading })}>
        {startIcon && <span className={styles["start-icon"]}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles["end-icon"]}>{endIcon}</span>}
      </span>
      {loading && (
        <span className={styles.spinner} role="status" aria-live="polite">
          <Spinner size={24} />
        </span>
      )}
    </button>
  )
}

export default forwardRef<HTMLButtonElement, ButtonProps>(Button)
