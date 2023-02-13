import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
})

export default validationSchema
