const { useState } = require('react')

const useToggle = () => {
  const [toggle, setToggle] = useState(false)

  const open = () => setToggle(true)
  const close = () => setToggle(false)

  return { toggle, open, close }
}

export default useToggle
