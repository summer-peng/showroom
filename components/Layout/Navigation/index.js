import classnames from 'classnames'
import PropTypes from 'prop-types'

import LanguageSelection from './LanguageSelection'

import styles from './styles.module.scss'

export default function Navigation({ setToggle }) {
  return (
    <div className={styles['nav-bar']}>
      <i
        className={classnames('fa-solid fa-bars', styles['menu-bar'])}
        onClick={() => setToggle()}
      ></i>
      <div className={classnames(styles['nav-content'])}>
        <div>Just for Fun</div>
        <LanguageSelection />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  setToggle: PropTypes.func,
}
