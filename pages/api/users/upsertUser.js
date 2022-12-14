import { upsertUser } from '@/service/usersService'

export default function handler(req, res) {
  upsertUser(req.body)
    .then(() => {
      res.status(200).json(true)
    })
    .catch((e) => {
      res.status(500).json(e)
    })
}
