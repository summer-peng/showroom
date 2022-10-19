import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserList = (params) => {
  const { page = 1, rows = 10 } = params

  return prisma.users
    .findMany({ skip: (page - 1) * rows, take: rows })
    .then((data) => {
      return prisma.users.count().then((count) => {
        return {
          page,
          rows,
          // for test
          totalRecords: count,
          dataList: data,
        }
      })
    })
}

export const upsertUser = (user) => {
  console.log('user', user)
  const { id, ...restProps } = user
  if (id) {
    return prisma.users.update({
      where: {
        id,
      },
      data: {
        ...restProps,
      },
    })
  } else {
    return prisma.users.create({
      data: {
        ...restProps,
      },
    })
  }
}
