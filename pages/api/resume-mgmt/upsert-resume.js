import { getServerSession } from 'next-auth/next'

import { upsertResumes } from '@/service/resumesService'

import { authOptions } from '../auth/[...nextauth]'

const methods = ['POST', 'PUT']

export default async function handler(req, res) {
  const { method, body } = req
  const session = await getServerSession(req, res, authOptions)

  const { user } = session
  const { userId } = user || {}
  if (!session) {
    res.status(400).json('invalid token')
    return
  }

  if (methods.indexOf(method) < 0) {
    res.status(405).json('Method not support')
    return
  }

  try {
    body.userId = userId
    body.updateDate = new Date()
    delete body.createDate
    await upsertResumes(body)
    res.status(200).json(true)
  } catch (e) {
    console.error(e)
    res.status(500).json(e)
  }
}
