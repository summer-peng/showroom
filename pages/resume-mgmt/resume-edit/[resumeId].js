import ResumeEdit from '@/components/pages/ResumeMgmt/ResumeEdit'
import { getResumeList } from '@/service/resumesService'

export const getServerSideProps = async ({ params }) => {
  const { resumeId } = params
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'User Query',
      url: '/users/user-query',
    },
    {
      name: 'User edit',
      active: true,
    },
  ]

  try {
    const resume = await getResumeList({ id: resumeId })
    const { dataList = [] } = resume || {}
    if (dataList.length === 0) {
      return { notFound: true }
    }

    return {
      props: {
        breadCrumbItems,
        initialResume: resume.dataList[0],
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const ResumeEditPage = ({ initialResume }) => {
  return <ResumeEdit initialResume={initialResume} />
}

ResumeEditPage.auth = true

export default ResumeEditPage
