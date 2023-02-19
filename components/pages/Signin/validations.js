import i18n from 'i18next'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().required(i18n.t('required')),
  password: Yup.string().required(i18n.t('required')),
})

export default validationSchema
