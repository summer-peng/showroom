import { convertFromRaw } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'

const DraftEditorPrinter = ({ contentState }) => {
  if (!contentState) {
    return <div></div>
  }

  let html = stateToHTML(convertFromRaw(contentState))

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default DraftEditorPrinter
