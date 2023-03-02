import { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import classnames from 'classnames'

import useDetectOutside from '@/hooks/useDetectOutside'
import useDragAndDrop from '@/hooks/useDragAndDrop'

import styles from './styles.module.scss'

const ListItem = ({ index, value, onChange, onDelete, moveItem }) => {
  const [edit, setEdit] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useDetectOutside(ref, () => {
    setEdit(false)
  })

  const { handlerId, isDragging } = useDragAndDrop({
    targetRef: ref,
    index,
    moveItem,
  })

  const opacity = isDragging ? 0 : 1

  return (
    <div
      className={styles['item-container']}
      key={index}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <div className={styles['list-symbol']}>{index + 1}</div>
      {edit ? (
        <Form.Control
          style={{ height: height }}
          as="textarea"
          className={styles['item']}
          onChange={(e) => {
            e.target.style.height = 'auto'
            e.target.style.height = `${e.target.scrollHeight}px`
            onChange(e.target.value)
          }}
          value={value}
        />
      ) : (
        <div
          className={styles['item']}
          onClick={(e) => {
            setHeight(e.target.scrollHeight)
            setEdit(true)
          }}
        >
          {value}
        </div>
      )}
      <i
        className={classnames('fa-solid fa-xmark', styles['remove'])}
        onClick={onDelete}
      />
    </div>
  )
}

export default ListItem
