import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ACTION } from '../utils'

import Item from './Item'

import styles from './styles.module.scss'

const List = ({ experience, setState }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles['experience-container']}>
        {experience.map((exp, index) => {
          return (
            <Item
              key={index}
              index={index}
              experience={exp}
              moveItem={(originalIndex, targetIndex) => {
                const newList = [...experience]
                const temp = newList[originalIndex]
                newList[originalIndex] = newList[targetIndex]
                newList[targetIndex] = temp
                setState((prev) => {
                  return {
                    ...prev,
                    myExperience: newList,
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
                  const newList = [...prev.myExperience]
                  newList.splice(index, 1)
                  return {
                    ...prev,
                    myExperience: newList,
                    page: ACTION.LIST,
                    currentIndex: null,
                  }
                })
              }}
            />
          )
        })}
      </div>
    </DndProvider>
  )
}

export default List
