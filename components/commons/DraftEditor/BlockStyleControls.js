import { BLOCK_TYPES } from './configs'
import StyleButton from './StyleButton'

const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(({ label, style }) => (
        <StyleButton
          key={label}
          active={style === blockType}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  )
}

export default BlockStyleControls
