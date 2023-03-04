import ResumeViewer from '@/components/pages/ResumeMgmt/ResumeViewer'
import { getResumeList } from '@/service/resumesService'

export const getServerSideProps = async ({ params }) => {
  const { resumeId } = params

  let resume = {}
  if (resumeId) {
    const result = (await getResumeList({ id: resumeId })) || []
    resume = result.dataList[0]
  }

  return {
    props: {
      breadCrumbItems: [],
      resume,
    },
  }
}

const ResumePageViewer = ({ resume }) => {
  return <ResumeViewer resume={resume} />
}

ResumePageViewer.customizedPage = true

export default ResumePageViewer
