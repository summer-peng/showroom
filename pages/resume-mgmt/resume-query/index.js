import { getServerSession } from 'next-auth/next'

import ResumeQuery from '@/components/pages/ResumeMgmt/ResumeQuery'
import { getResumeList } from '@/service/resumesService'

import { authOptions } from '/pages/api/auth/[...nextauth]'

export const getServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)
  const { user } = session || {}
  const { userId = -1 } = user || {}
  const resumes = await getResumeList({ page: 1, rows: 10, userId })
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Resume Query',
      url: '',
      active: true,
    },
  ]
  return {
    props: {
      resumes,
      breadCrumbItems,
    },
  }
}

ResumeQuery.auth = true

export default ResumeQuery
