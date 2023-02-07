import PropTypes from 'prop-types'

const OptionList = ({ loading, options, onOptionClick, ...restProps }) => {
  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  return options.map((opt) => {
    const { label, value } = opt
    return (
      <div key={value} onClick={() => onOptionClick(opt)} {...restProps}>
        <span>{label}</span>
      </div>
    )
  })
}

OptionList.defaultProps = {
  loading: false,
  options: [],
}
OptionList.propTypes = {
  options: PropTypes.array,
}

export default OptionList
