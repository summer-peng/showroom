import API from '@/utils/apiUtils'

export const checkEmailExisted = (email) => {
  return API.post('/api/users/check-email-exist', { email })
}

export const upsertUser = (values) => {
  return API.post('/api/users/upsertUser', values)
}
