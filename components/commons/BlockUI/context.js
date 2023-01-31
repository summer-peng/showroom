import { createContext } from 'react'

const context = createContext({
  show: false,
  blockUI: () => null,
  unBlockUI: () => null,
})

export default context
