import { Form } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const Select = ({ label, name, asyncOptions, ...restProps }) => {
  const AsyncSelect = dynamic(() => import('react-select/async'), {
    ssr: false,
  })

  const loadOptions = (inputValue, callback) => {
    asyncOptions(inputValue)
      .then((data) => {
        callback(data)
      })
      .catch((e) => {
        console.error(e)
        callback([])
      })
  }

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <AsyncSelect name={name} loadOptions={loadOptions} {...restProps} />
    </Form.Group>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  asyncOptions: PropTypes.func,
}

export default Select
