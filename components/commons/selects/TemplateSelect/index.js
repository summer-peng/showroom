import { getIn, useFormikContext } from 'formik'

import FormField from '@/components/commons/Forms/FormField'
import { TEMPLATE_TYPE } from '@/components/pages/ResumeMgmt/ResumeViewer/const'
const options = Object.keys(TEMPLATE_TYPE).map((key) => {
  return {
    label: key,
    value: key,
  }
})

const TemplateSelect = ({ name, label, ...restProps }) => {
  const { setFieldValue, values } = useFormikContext()
  const value = getIn(values, name, options[0].value)

  const selectedValue = { label: value, value }

  return (
    <FormField
      type="select"
      name={name}
      label={label}
      options={options}
      onChange={(opt) => {
        const { value } = opt
        setFieldValue(name, value)
      }}
      value={selectedValue}
      defaultValue={selectedValue}
      {...restProps}
    />
  )
}

export default TemplateSelect
