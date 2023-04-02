import { convertFromRaw, EditorState } from 'draft-js'
import PropTypes from 'prop-types'

import DraftEditorPrinter from '@/components/commons/DraftEdiorPrinter'
import InfoSection from '@/components/pages/ResumeMgmt/ResumeViewer/Templates/common/InfoSection'

import styles from './styles.module.scss'

const DraftEdiorPrinterSection = ({ title, contentState }) => {
  if (!contentState) {
    return null
  }

  const editorState = EditorState.createWithContent(
    convertFromRaw(contentState),
  )
  if (!editorState.getCurrentContent().hasText()) {
    return null
  }

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
