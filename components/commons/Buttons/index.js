import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const Button = ({ titleKey, type, className, ...restProps }) => {
  const { t } = useTranslation()
  return (
    <button
      className={classnames(styles[`${type}-button`], className)}
      {...restProps}
    >
      {t(titleKey)}
    </button>
  )
}
Button.defaultProps = {
  titleKey: 'title',
}

Button.propTypes = {
  titleKey: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'dangerous', 'second-primary']),
  className: PropTypes.string,
}

export const CreateButton = (props) => {
  return <Button titleKey={'create'} type="primary" {...props} />
}

export const DeleteButton = (props) => {
  return <Button titleKey={'delete'} type="dangerous" {...props} />
}

export const SubmitButton = (props) => {
  return <Button titleKey={'submit'} type="primary" {...props} />
}

export const BackButton = (props) => {
  return (
    <Button
      titleKey={'back'}
      type="second-primary"
      onClick={(e) => {
        e.preventDefault()
        history.back()
      }}
      {...props}
    />
  )
}

const buttons = {
  Button,
  CreateButton,
  DeleteButton,
  SubmitButton,
  BackButton,
}

export default buttons
