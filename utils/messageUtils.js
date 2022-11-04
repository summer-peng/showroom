import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const messageUtils = {
  success: (props = {}) => {
    const { title = 'Success', text, ...restProps } = props
    return MySwal.fire({
      icon: 'success',
      title: title,
      text: text,
      ...restProps,
    })
  },
  error: (props = {}) => {
    const { title = 'Error', text, ...restProps } = props
    return MySwal.fire({
      icon: 'error',
      title: title,
      text: text,
      ...restProps,
    })
  },
  question: (props) => {
    const { title = 'Question', text, ...restProps } = props
    return MySwal.fire({
      icon: 'question',
      title: title,
      text: text,
      ...restProps,
    })
  },
  warning: (props) => {
    const { title = 'Warning', text, ...restProps } = props
    return MySwal.fire({
      icon: 'warning',
      title: title,
      text: text,
      ...restProps,
    })
  },
}

export default messageUtils
