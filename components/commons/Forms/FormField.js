import { useMemo } from 'react'
import { Field } from 'formik'

import AsyncSelect from './AsyncSelect'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

const FormField = ({ name, type, ...restProps }) => {
  const FieldInput = useMemo(() => {
    switch (type) {
      case 'text': {
        return TextInput
      }
      case 'password': {
        return PasswordInput
      }
      case 'async-select': {
        return AsyncSelect
      }
      default:
        return TextInput
    }
  }, [type])
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className="mb-2">
          <FieldInput {...field} {...restProps} />
          {meta.touched && meta.error && (
            <div className="error text-danger">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  )
}

export default FormField
