import { createHmac } from 'crypto'

export const getHashBySha256 = (stringInput) => {
  const secret = 'my-personal-project'
  return createHmac('sha256', secret).update(stringInput).digest('hex')
}
