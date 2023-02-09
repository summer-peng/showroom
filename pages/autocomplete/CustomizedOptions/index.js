import Image from 'next/image'

export default function CustomizedOption({ option, onOptionClick }) {
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
