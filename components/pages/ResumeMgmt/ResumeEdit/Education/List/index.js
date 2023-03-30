import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ACTION } from '../utils'

import Item from './item'

import styles from './styles.module.scss'

const List = ({ education, setState }) => {
  return (
    <div className={styles['education-container']}>
      <DndProvider backend={HTML5Backend}>
        {education.map((edu, index) => {
          return (
            <Item
              education={edu}
              index={index}
              key={index}
              moveItem={(originalIndex, targetIndex) => {
                setState((prev) => {
                  const newList = [...prev.myEducation]
                  const temp = newList[originalIndex]
                  newList[originalIndex] = newList[targetIndex]
                  newList[targetIndex] = temp
                  return {
                    ...prev,
                    myEducation: newList,
                  }
                })
              }}
              onEdit={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    page: ACTION.EDIT,
                    currentIndex: index,
                  }
                })
              }}
              onDelete={() => {
                setState((prev) => {
                  const newList = [...prev.myEducation]
                  newList.splice(index, 1)
                  return {
                    ...prev,
                    myEducation: newList,
                    page: ACTION.LIST,
                    currentIndex: null,
                  }
                })
              }}
            ></Item>
          )
        })}
      </DndProvider>
    </div>
  )
}

export default List
