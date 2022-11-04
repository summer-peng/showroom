import * as Yup from 'yup'

const validationSchema = Yup.object({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
})

export default validationSchema
