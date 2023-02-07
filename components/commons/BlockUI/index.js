import { useContext } from 'react'

import Modal from '@/components/commons/Modal'

import Spinner from '../Spinner'

import context from './context'

import styles from './styles.module.scss'

export default function BlockUI() {
  const { show, unBlockUI } = useContext(context)

  return (
    <Modal
      onMaskDbClick={unBlockUI}
      toggle={show}
      content={<Spinner />}
      defaultCloseBtn={false}
      contentStyles={styles['content-style']}
    ></Modal>
  )
}
