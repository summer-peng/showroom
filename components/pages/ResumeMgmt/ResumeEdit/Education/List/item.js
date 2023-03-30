import { useRef } from 'react'
import classnames from 'classnames'

import useDragAndDrop from '@/hooks/useDragAndDrop'

import styles from './styles.module.scss'

const Item = ({ onEdit, index, education, moveItem, onDelete }) => {
  const { name, location, degree, major, startDate, endDate } = education

  const ref = useRef(null)

  useDragAndDrop({
    targetRef: ref,
    index,
    moveItem,
  })

  return (
    <div className={styles['education-item']} ref={ref}>
      <div className={styles['index']}>{index + 1}</div>
      <div className={styles['title']}>
        <div className={styles['major']}>{`${degree}-${major}`}</div>
        <div className={styles['name']}>{name}</div>
        <div className={styles['date']}>
          <span>{`${location} ${startDate} - ${endDate}`}</span>
        </div>
      </div>
      <div className={styles['function']}>
        <i
          className={classnames('fa-solid fa-pen-to-square')}
          onClick={(e) => {
            e.stopPropagation()
            onEdit()
          }}
        />
        <i
          className={classnames('fa-solid fa-trash')}
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        />
        <i className={classnames('fa-solid fa-up-down-left-right')} />
      </div>
    </div>
  )
}

export default Item
