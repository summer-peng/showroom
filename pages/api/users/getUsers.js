import { getUserList } from '@/service/usersService'

export default function handler(req, res) {
  getUserList(req.body)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json(e)
    })
}
