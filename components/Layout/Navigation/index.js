import classnames from 'classnames'

import LanguageSelection from './LanguageSelection'

import styles from './styles.module.scss'

export default function Navigation() {
  return (
    <div className={styles['nav-bar']}>
      <i className={classnames('fa-solid fa-bars', styles['menu-bar'])}></i>
      <div className={classnames(styles['nav-content'])}>
        <div>Just for Fun</div>
        <LanguageSelection />
      </div>
    </div>
  )
}
