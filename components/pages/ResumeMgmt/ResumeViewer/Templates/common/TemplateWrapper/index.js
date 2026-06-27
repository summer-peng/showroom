import { Button } from "@/components/ui/Button"

import styles from "./styles.module.scss"

const TemplateWrapper = ({ children }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["download-section"]}>
        <Button type="primary" onClick={() => window.print()}>
          Download
        </Button>
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["resume"]}>{children}</div>
      </div>
      <div className={styles["page-bottom-space"]} />
    </div>
  )
}

export default TemplateWrapper
