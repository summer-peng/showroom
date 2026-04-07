import {
  ArrowRight,
  Send,
  Edit,
  ArrowDown,
  Trash,
  ArrowLeft,
} from "react-feather"
import { useState } from "react"

import Modal from "@/components/ui/Modal/Modal"
import { Button } from "@/components/ui/Button"

import styles from "./styles.module.scss"

export const getServerSideProps = async () => {
  const breadCrumbItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "ui",
      url: "/ui",
      active: true,
    },
  ]
  return {
    props: {
      breadCrumbItems,
    },
  }
}

export default function UI() {
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  return (
    <div>
      <div>
        <h3>Button</h3>
        <div>
          <div>
            <span className={styles["showcase-btn"]}>
              <Button variant="primary">Primary</Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="primary" startIcon={<Send size={18} />}>
                Primary
              </Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="primary" endIcon={<ArrowRight size={18} />}>
                Primary
              </Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="primary" loading>
                Primary
              </Button>
            </span>
          </div>
          <div>
            <span className={styles["showcase-btn"]}>
              <Button variant="secondary">Second Primary</Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="secondary" startIcon={<Edit size={18} />}>
                Second Primary
              </Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="secondary" endIcon={<ArrowDown size={18} />}>
                Second Primary
              </Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="secondary" loading>
                Second Primary
              </Button>
            </span>
          </div>
          <div>
            <span className={styles["showcase-btn"]}>
              <Button variant="danger">Dangerous</Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="danger" startIcon={<Trash size={18} />}>
                Dangerous
              </Button>
            </span>
            <span className={styles["showcase-btn"]}>
              <Button variant="danger" endIcon={<ArrowLeft size={18} />}>
                Dangerous
              </Button>
            </span>
            <span>
              <Button variant="danger" loading>
                Dangerous
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3>Modal</h3>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <h2>Modal 1</h2>
          <Button onClick={() => setShowModal2(true)}>Open Modal2</Button>
        </Modal>
        <Modal open={showModal2} onClose={() => setShowModal2(false)}>
          <h2>Modal2</h2>
        </Modal>
      </div>
    </div>
  )
}
