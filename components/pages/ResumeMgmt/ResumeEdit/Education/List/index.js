import classnames from 'classnames'

import { ACTION } from '../utils'

import styles from './styles.module.scss'

const List = ({ education, setState }) => {
  return (
    <div className={styles['education-container']}>
      {education.map(
        ({ name, location, degree, major, graduatedDate }, index) => {
          return (
            <div
              className={styles['education-item']}
              key={index}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  page: ACTION.EDIT,
                  currentIndex: index,
                }))
              }
            >
              <div className={styles['index']}>{index + 1}</div>
              <div className={styles['title']}>
                <div className={styles['major']}>{`${degree}-${major}`}</div>
                <div className={styles['name']}>{name}</div>
                <div className={styles['date']}>
                  <span>{`${location} ${graduatedDate}`}</span>
                </div>
              </div>
              <div className={styles['function']}>
                <i
                  className={classnames('fa-solid fa-pen-to-square')}
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      page: ACTION.EDIT,
                      currentIndex: index,
                    }))
                  }
                />
                <i className={classnames('fa-solid fa-trash')} />
                <i className={classnames('fa-solid fa-up-down-left-right')} />
              </div>
            </div>
          )
        },
      )}
    </div>
  )
}

export default List
