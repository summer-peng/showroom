import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ContentState,
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from 'draft-js'
import PropTypes from 'prop-types'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'
    default:
      return null
  }
}

const DraftEditor = ({ initialVale, onChange, value }) => {
  const initialState = useMemo(() => {
    if (!initialVale) {
      return EditorState.createEmpty()
    }
    if (typeof initialVale === 'string') {
      return EditorState.createWithContent(ContentState.createFromText('hello'))
    }

    return EditorState.createWithContent(convertFromRaw(initialVale))
  }, [initialVale])

  const [editorState, setEditorState] = useState(initialState)

  const ref = useRef(null)

  useEffect(() => {
    if (value) {
      setEditorState(EditorState.createWithContent(convertFromRaw(value)))
    }
  }, [value])

  const handleChange = useCallback(
    (newEditorState) => {
      setEditorState(newEditorState)
      const rawData = convertToRaw(newEditorState.getCurrentContent())
      onChange(rawData)
    },
    [onChange],
  )

  const focus = () => ref.current.focus()

  const handleKeyCommand = useCallback(
    (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command)
      if (newState) {
        handleChange(newState)
        return true
      }
      return false
    },
    [handleChange],
  )

  const mapKeyToEditorCommand = useCallback(
    (e) => {
      if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */)
        if (newEditorState !== editorState) {
          handleChange(newEditorState)
        }
        return
      }
      return getDefaultKeyBinding(e)
    },
    [editorState, handleChange],
  )

  const toggleBlockType = useCallback(
    (blockType) => {
      handleChange(RichUtils.toggleBlockType(editorState, blockType))
    },
    [editorState, handleChange],
  )

  const toggleInlineStyle = useCallback(
    (inlineStyle) => {
      handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    },
    [editorState, handleChange],
  )

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = 'RichEditor-editor'
  const contentState = editorState.getCurrentContent()
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder'
    }
  }
  return (
    <div className="RichEditor-root">
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className} onClick={focus}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleChange}
          placeholder="Tell a story..."
          ref={ref}
          spellCheck={true}
        />
      </div>
    </div>
  )
}

DraftEditor.defaultProps = {
  onChange: () => null,
  initialVale: null,
  value: null,
}

DraftEditor.propTypes = {
  initialVale: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.object,
}

export default DraftEditor
