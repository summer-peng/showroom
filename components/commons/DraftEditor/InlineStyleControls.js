import StyleButton from './StyleButton'

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
]

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(({ label, style }) => (
        <StyleButton
          key={label}
          active={currentStyle.has(style)}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  )
}

export default InlineStyleControls
