import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function handler(req, res) {
  const { page = 1, rows = 10 } = req.body
  prisma.users
    .findMany({ skip: (page - 1) * rows, take: rows })
    .then((data) => {
      return prisma.users.count().then((count) => {
        return {
          page,
          rows,
          totalRecords: count,
          dataList: [
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
            ...data,
          ],
        }
      })
    })
    .then((result) => {
      res.status(200).json(result)
    })
}
