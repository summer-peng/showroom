import { PrismaClient } from '@prisma/client'

// TODO: use define plugin to enable local log
const prisma = new PrismaClient(/*{ log: ['query', 'info', 'warn', 'error'] }*/)

export const getUserList = (params) => {
  const { page = 1, rows = 10, id, firstName, lastName, name } = params
  const whereCondtion = {}
  if (id) {
    whereCondtion.id = id
  }

  if (firstName) {
    whereCondtion.firstName = firstName
  }

  if (lastName) {
    whereCondtion.lastName = lastName
  }

  if (name) {
    whereCondtion.OR = [
      {
        lastName: {
          contains: name,
        },
      },
      {
        firstName: {
          contains: name,
        },
      },
    ]
  }

  return prisma.users
    .findMany({
      where: whereCondtion,
      skip: (page - 1) * rows,
      take: rows,
    })
    .then((data) => {
      return prisma.users.count().then((count) => {
        return {
          page,
          rows,
          // for test
          totalRecords: 3000,
          dataList: data,
        }
      })
    })
}

export const upsertUser = (user) => {
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
