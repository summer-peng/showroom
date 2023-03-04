import classnames from 'classnames'
import html2pdf from 'html2pdf.js'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const DownloadPdf = ({ element, className, downloadButton }) => {
  const opt = {
    filename: 'chen-tsung-resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  const handleOnClick = () => {
    html2pdf(element.current, opt)
  }

  const DownloadButton = downloadButton()

  return (
    <div onClick={handleOnClick}>
      <DownloadButton className={className} />
    </div>
  )
}

DownloadPdf.defaultProps = {
  downloadButton: () => {
    return ({ className, ...restProps }) => (
      <i
        className={classnames(
          'fa-solid fa-cloud-arrow-down',
          styles['download-icon'],
          className,
        )}
        {...restProps}
      />
    )
  },
}
DownloadPdf.propTypes = {
  element: PropTypes.object,
  className: PropTypes.func,
  downloadButton: PropTypes.func,
}

export default DownloadPdf
