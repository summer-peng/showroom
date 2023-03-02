import { convertFromRaw } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'

const DraftEditorPrinter = ({ contentState }) => {
  let html = stateToHTML(convertFromRaw(contentState))

  return <div>{html}</div>
}

export default DraftEditorPrinter
