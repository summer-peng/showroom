import { Button } from 'react-bootstrap'
import html2pdf from 'html2pdf.js'

const DownloadPdf = ({ element }) => {
  const opt = {
    margin: 0.5,
    filename: 'chen-tsung-resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  return (
    <Button variant="primary" onClick={() => html2pdf(element.current, opt)}>
      Download
    </Button>
  )
}

export default DownloadPdf
