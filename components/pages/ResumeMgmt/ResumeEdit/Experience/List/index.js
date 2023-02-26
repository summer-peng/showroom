import classnames from 'classnames'

import { ACTION } from '../utils'

import styles from './styles.module.scss'

const List = ({ experience, setState }) => {
  return (
    <div className={styles['experience-container']}>
      {experience.map(
        (
          { jobTitle, companyName, city, province, startDate, endDate, detail },
          index,
        ) => {
          return (
            <div
              className={styles['experience-item']}
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
                <div className={styles['job-title']}>{jobTitle}</div>
                <div className={styles['company-name']}>{companyName}</div>
                <div className={styles['footer']}>
                  <span className={styles['location']}>
                    {city} {province}
                  </span>
                  <span>|</span>
                  <span>
                    {startDate} - {endDate}
                  </span>
                </div>
              </div>
              <div className={styles['detail']}>
                <ul>
                  {detail.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
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
