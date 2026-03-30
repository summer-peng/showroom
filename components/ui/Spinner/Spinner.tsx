import SpinnerProps from "./Spinner.type"
import styles from "./styles.module.scss"

const Spinner = ({ size = 40, color = "#ffffffff" }: SpinnerProps) => {
  return (
    <div
      className={styles.spinner}
      style={
        {
          "--size": typeof size === "number" ? `${size}px` : size,
          "--color": color,
        } as React.CSSProperties
      }
    >
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" />
      </svg>
    </div>
  )
}

export default Spinner
