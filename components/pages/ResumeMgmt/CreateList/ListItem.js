import { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDrag, useDrop } from 'react-dnd'
import classnames from 'classnames'
import useDetectOutside from 'hooks/useDetectOutside'

import styles from './styles.module.scss'

const ListItem = ({ index, value, onChange, onDelete, moveItem }) => {
  const [edit, setEdit] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useDetectOutside(ref, () => {
    setEdit(false)
  })

  const [{ handlerId }, drop] = useDrop({
    accept: 'ListItem',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveItem(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'ListItem',
    item: () => {
      return { id: index, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

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
