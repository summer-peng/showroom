import { getHashBySha256 } from '@/service/utils/hashUtil'

import prisma from '../utils/dbUtil'

export const getUserByEmail = (email) => {
  return prisma.users.findUnique({
    where: {
      email: email,
    },
    select: {
      password: true,
      email: true,
      userId: true,
      firstName: true,
      lastName: true,
    },
  })
}

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
          totalRecords: count,
          dataList: data.map((d) => {
            return {
              ...d,
              password: '',
            }
          }),
        }
      })
    })
}

export const upsertUser = (user) => {
  const { id, password, ...restProps } = user

  const hash = getHashBySha256(password)

  if (id) {
    return prisma.users.update({
      where: {
        id,
      },
      data: {
        ...restProps,
        password: hash,
      },
    })
  } else {
    return prisma.users.create({
      data: {
        ...restProps,
        password: hash,
      },
    })
  }
}
