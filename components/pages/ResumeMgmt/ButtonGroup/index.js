import PropTypes from 'prop-types'

import { BackButton, Button } from '@/components/commons/Buttons'

import styles from './styles.module.scss'

const ButtonGroup = ({ onBack, onNext, onCreate, nextTitle, createTipMsg }) => {
  return (
    <div className={styles['container']}>
      {onCreate && (
        <div className={styles['create-container']}>
          {createTipMsg && (
            <div className={styles['create-tips']}>{createTipMsg}</div>
          )}
          <Button
            type="primary"
            titleKey="Create"
            onClick={(e) => onCreate(e)}
          />
        </div>
      )}
      {onBack && <BackButton onClick={(e) => onBack(e)} />}
      {onNext && (
        <Button
          type="primary"
          titleKey={nextTitle}
          onClick={(e) => onNext(e)}
        />
      )}
    </div>
  )
}

ButtonGroup.defaultProps = {
  nextTitle: 'Next',
  createTipMsg: '',
}

ButtonGroup.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  nextTitle: PropTypes.string,
  createTipMsg: PropTypes.string,
}

export default ButtonGroup
