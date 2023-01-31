import classnames from 'classnames'
import html2pdf from 'html2pdf.js'

import styles from './styles.module.scss'

const DownloadPdf = ({ element, className }) => {
  const opt = {
    margin: 0.5,
    filename: 'chen-tsung-resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  return (
    <i
      className={classnames(
        'fa-solid fa-cloud-arrow-down',
        styles['download-icon'],
        className,
      )}
      onClick={() => html2pdf(element.current, opt)}
    />
  )
}

export default DownloadPdf
