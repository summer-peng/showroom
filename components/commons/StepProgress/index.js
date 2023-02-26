import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const StepProgress = ({ steps }) => {
  const lastActiveIndex = steps.map((step) => step.active).lastIndexOf(true)
  return (
    <div className={styles['step-container']}>
      {steps.map(({ title, active }, index) => {
        return (
          <div
            key={index}
            className={classnames(
              styles['step'],
              active ? styles['active'] : null,
              lastActiveIndex === index ? styles['last-active'] : null,
            )}
          >
            {title}
          </div>
        )
      })}
    </div>
  )
}

StepProgress.propTypes = {
  steps: PropTypes.array,
}
export default StepProgress
