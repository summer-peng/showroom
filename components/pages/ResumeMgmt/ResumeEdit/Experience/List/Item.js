import { useRef } from 'react'
import classnames from 'classnames'

import useDragAndDrop from '@/hooks/useDragAndDrop'

import styles from './styles.module.scss'

const Item = ({ onEdit, index, experience, moveItem }) => {
  const ref = useRef(null)
  const { jobTitle, companyName, city, province, startDate, endDate, detail } =
    experience

  useDragAndDrop({
    targetRef: ref,
    index,
    moveItem,
  })

  return (
    <div
      ref={ref}
      className={styles['experience-item']}
      key={index}
      onClick={onEdit}
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
          onClick={onEdit}
        />
        <i className={classnames('fa-solid fa-trash')} />
        <i className={classnames('fa-solid fa-up-down-left-right')} />
      </div>
    </div>
  )
}

export default Item
