import PropTypes from 'prop-types'

const OptionList = ({
  loading,
  options,
  onOptionClick,
  components,
  ...restProps
}) => {
  const { CustomizedOption } = components

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  if (CustomizedOption) {
    return options.map((opt, index) => {
      return (
        <CustomizedOption
          key={index}
          option={opt}
          onOptionClick={onOptionClick}
        />
      )
    })
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
  components: {},
}
OptionList.propTypes = {
  loading: PropTypes.bool,
  options: PropTypes.array,
  components: PropTypes.object,
}

export default OptionList
