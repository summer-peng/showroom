import Image from 'next/image'
import PropTypes from 'prop-types'

const CustomizedOption = ({ option, onOptionClick }) => {
  const { label, value, addtionalInfo = {} } = option
  const {
    imgUrl = 'https://cdn-icons-png.flaticon.com/512/5039/5039041.png',
    alt = '',
  } = addtionalInfo
  return (
    <div key={value} onClick={() => onOptionClick(option)}>
      <Image width={20} height={20} src={imgUrl} alt={alt} />
      <span>{label}</span>
    </div>
  )
}

CustomizedOption.option = {
  option: {},
  onOptionClick: () => null,
}

CustomizedOption.propTypes = {
  option: PropTypes.object,
  onOptionClick: PropTypes.func,
}

export default CustomizedOption
