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
    whereCondtion.first_name = firstName
  }

  if (lastName) {
    whereCondtion.last_name = lastName
  }

  if (name) {
    console.log(name)
    whereCondtion.OR = [
      {
        last_name: {
          contains: name,
        },
      },
      {
        first_name: {
          contains: name,
        },
      },
    ]
  }

  console.log(whereCondtion)
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
