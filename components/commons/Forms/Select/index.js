import { Form } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const Select = ({ label, name, options, defaultValue, ...restProps }) => {
  const ReactSelect = dynamic(() => import('react-select'), {
    ssr: false,
  })

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <ReactSelect
        name={name}
        options={options}
        defaultValue={defaultValue}
        {...restProps}
      />
    </Form.Group>
  )
}

Select.defaultProps = {
  label: '',
  options: [],
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.object,
  options: PropTypes.array,
}

export default Select
