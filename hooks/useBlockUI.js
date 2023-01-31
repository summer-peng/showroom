import { useContext } from 'react'

import blockUIContext from '@/components/commons/BlockUI/context'

const useBlockUI = () => useContext(blockUIContext)

export default useBlockUI
