import API from '@/utils/apiUtils'

export const upsertResume = (resume) => {
  return API.post('/api/resume-mgmt/upsert-resume', resume).then((response) => {
    return response
  })
}

const services = { upsertResume }

export default services
