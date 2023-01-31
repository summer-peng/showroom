import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Modal = ({
  toggle,
  setToggle,
  content,
  contentStyles,
  defaultCloseBtn,
  onMaskDbClick,
}) => {
  if (!toggle) {
    return null
  }

  return (
    <div className={styles['modal']} onDoubleClickCapture={onMaskDbClick}>
      <div className={classnames(styles['content'], contentStyles)}>
        {defaultCloseBtn && (
          <i
            onClick={() => setToggle(false)}
            className={classnames(
              'fa-regular fa-circle-xmark',
              styles['close-btn'],
            )}
          ></i>
        )}
        <div>{content}</div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  toggle: false,
  setToggle: () => null,
  defaultCloseBtn: true,
  content: '',
  onMaskDbClick: () => null,
  contentStyles: '',
}

Modal.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  contentStyles: PropTypes.string,
  defaultCloseBtn: PropTypes.bool,
  onMaskDbClick: PropTypes.func,
}

export default Modal
