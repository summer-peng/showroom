import { useRef } from 'react'
import dynamic from 'next/dynamic'

import { Button } from '@/components/commons/Buttons'

import styles from './styles.module.scss'

const TemplateWrapper = ({ children }) => {
  const cvRef = useRef()

  const DownloadPdf = dynamic(
    () => import('@/components/commons/DownloadPdf'),
    {
      ssr: false,
    },
  )

  const DownloadButton = () => {
    const button = () => <Button type="primary" titleKey={'Download'} />
    return button
  }
  return (
    <div className={styles['container']}>
      <div className={styles['download-section']}>
        <DownloadPdf element={cvRef} downloadButton={DownloadButton} />
      </div>
      <div className={styles['wrapper']}>
        <div className={styles['resume']} ref={cvRef}>
          {children}
        </div>
      </div>
      <div className={styles['page-bottom-space']} />
    </div>
  )
}

export default TemplateWrapper
