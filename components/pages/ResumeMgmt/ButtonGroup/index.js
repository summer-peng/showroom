import PropTypes from 'prop-types'

import { BackButton, Button } from '@/components/commons/Buttons'

import styles from './styles.module.scss'

const ButtonGroup = ({ onBack, onNext, onCreate, nextTitle }) => {
  return (
    <div className={styles['container']}>
      {onCreate && (
        <Button type="primary" titleKey="Create" onClick={(e) => onCreate(e)} />
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
}

ButtonGroup.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  nextTitle: PropTypes.string,
}

export default ButtonGroup
