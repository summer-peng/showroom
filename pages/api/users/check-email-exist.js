import { getUserByEmail } from '@/service/usersService'

export default function handler(req, res) {
  const { email } = req.body
  getUserByEmail(email)
    .then((result) => {
      if (result) {
        res.status(200).json(true)
      }
      res.status(200).json(false)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json(e)
    })
}
