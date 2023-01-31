import { Form } from 'react-bootstrap'

const TextInput = ({ label, name, ...restProps }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" name={name} {...restProps} />
    </Form.Group>
  )
}

export default TextInput
