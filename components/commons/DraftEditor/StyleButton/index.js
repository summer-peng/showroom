import classnames from 'classnames'

const StyleButton = ({ label, onToggle, active, style }) => {
  const handleToggle = (e) => {
    e.preventDefault()
    onToggle(style)
  }

  return (
    <span
      className={classnames('RichEditor-styleButton', {
        'RichEditor-activeButton': active,
      })}
      onMouseDown={handleToggle}
    >
      {label}
    </span>
  )
}

export default StyleButton
