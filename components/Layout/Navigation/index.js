import classnames from 'classnames'
import { signIn, signOut, useSession } from 'next-auth/react'
import PropTypes from 'prop-types'

import LanguageSelection from './LanguageSelection'

import styles from './styles.module.scss'

export default function Navigation({ setToggle }) {
  const { data: session } = useSession()
  const { user = {} } = session || {}
  return (
    <div className={styles['nav-bar']}>
      <i
        className={classnames('fa-solid fa-bars', styles['menu-bar'])}
        onClick={() => setToggle()}
      ></i>
      <div className={classnames(styles['nav-content'])}>
        <div>Just for Fun</div>
        <div className={styles['sign-in-section']}>
          <LanguageSelection />
          {session ? (
            <span>
              <span
                className={styles['name']}
              >{`| ${user?.firstName} ${user?.lastName}`}</span>
              <i
                title="Sign out"
                onClick={() => signOut()}
                className={classnames(
                  'fa-solid fa-arrow-right-from-bracket',
                  styles['sign-out-btn'],
                )}
              />
            </span>
          ) : (
            <i
              title="Sign in"
              className={classnames(
                'fa-regular fa-user',
                styles['sign-in-btn'],
              )}
              onClick={() => signIn()}
            />
          )}
        </div>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  setToggle: PropTypes.func,
}
