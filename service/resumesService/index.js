import { convertToDateString, convertToDateTimeString } from '@/utils/dateUtils'

import prisma from '../utils/dbUtil'

export const getResumesByUserId = (userId) => {
  return prisma.resumes.findMany({
    where: {
      userId: userId,
    },
  })
}
export const getResumeList = (params) => {
  const { page = 1, rows = 10, id, userId } = params
  const whereCondtion = { userId }
  if (id) {
    whereCondtion.id = id
  }

  return prisma.resumes
    .findMany({
      where: whereCondtion,
      skip: (page - 1) * rows,
      take: rows,
    })
    .then((data) => {
      return prisma.resumes.count().then((count) => {
        return {
          page,
          rows,
          totalRecords: count,
          dataList: data.map(({ createDate, updateDate, ...restProps }) => {
            return {
              ...restProps,
              createDate: convertToDateString(createDate),
              updateDate: convertToDateString(updateDate),
            }
          }),
        }
      })
    })
}

export const upsertResumes = async (resume) => {
  const { id, ...restProps } = resume
  if (id) {
    return prisma.resumes.update({
      where: {
        id,
      },
      data: {
        ...restProps,
      },
    })
  } else {
    return prisma.resumes.create({
      data: {
        ...restProps,
      },
    })
  }
}
