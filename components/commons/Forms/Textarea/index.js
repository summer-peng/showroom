import { Form } from 'react-bootstrap'

const TextArea = ({ label, name, ...restProps }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" name={name} row={5} {...restProps} />
    </Form.Group>
  )
}

export default TextArea
