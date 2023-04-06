import { useEffect, useState } from 'react'

import ResumeEdit from '@/components/pages/ResumeMgmt/ResumeEdit'
import {
  deleteResumeFromStroage,
  getResumeFromStorage,
} from '@/components/pages/ResumeMgmt/ResumeEdit/utils'
import { getResumeList } from '@/service/resumesService'

export const getServerSideProps = async ({ query }) => {
  const { copiedId } = query

  try {
    let newResume = {}

    if (copiedId) {
      const resume = await getResumeList({ id: copiedId })
      const { dataList = [] } = resume || {}

      // ignore key id
      // eslint-disable-next-line no-unused-vars
      const { id, title, ...restProps } = dataList[0] || {}

      newResume = {
        ...restProps,
        title: `Copy from ${title}`,
      }
    }

    return {
      props: {
        initialResume: newResume,
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const ResumeCreate = ({ initialResume }) => {
  return <ResumeEdit initialResume={initialResume} />
}

ResumeCreate.auth = true

export default ResumeCreate
