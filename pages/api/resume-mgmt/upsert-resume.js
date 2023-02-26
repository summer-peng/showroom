import { getServerSession } from 'next-auth/next'

import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req, res) {
  const { method, body } = req
  const session = await getServerSession(req, res, authOptions)

  const { user } = session
  const { userId } = user || {}

  if (!session) {
    res.status(400).json('invalid token')
    return
  }

  if (method !== 'POST' || method !== 'PUT') {
    res.status(405).json('Method not support')
    return
  }

  try {
    body.resumes.userId = userId
    //const resume = await upsertResume(body)
    res.status(200).json(true)
  } catch (e) {
    console.error(e)
    res.status(500).json(e)
  }
}
