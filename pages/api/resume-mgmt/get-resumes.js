import { getServerSession } from 'next-auth/next'

import { getResumeList } from '@/service/resumesService'

import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  const { user } = session
  const { userId } = user || {}
  if (!session) {
    res.status(400).json('invalid token')
    return
  }

  const params = {
    ...req.body,
    userId,
  }

  getResumeList(params)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json(e)
    })
}
