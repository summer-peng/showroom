import PropTypes from 'prop-types'

import DraftEditorPrinter from '@/components/commons/DraftEdiorPrinter'
import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import styles from './styles.module.scss'

const DraftEdiorPrinterSection = ({ title, contentState }) => {
  return (
    <InfoSection
      title={title}
      className={styles['draft-editor-printer-section']}
    >
      <DraftEditorPrinter contentState={contentState} />
    </InfoSection>
  )
}

DraftEdiorPrinterSection.propTypes = {
  title: PropTypes.string,
  contentState: PropTypes.object,
}
export default DraftEdiorPrinterSection
