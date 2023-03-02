import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import TextAddingInput from '@/components/commons/Forms/TextAddingInput'

import ListItem from './ListItem'

import styles from './styles.module.scss'

const CreateList = ({ label, valueList, setValueList, placeholder }) => {
  return (
    <div>
      <TextAddingInput
        label={label}
        placeholder={placeholder}
        onAdd={(val) => {
          const newValueList = [...valueList, val]
          setValueList(newValueList)
        }}
      />
      <DndProvider backend={HTML5Backend}>
        <div className={styles['wrapper']}>
          {valueList.map((val, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                value={val}
                onChange={(value) => {
                  const newList = [...valueList]
                  newList[index] = value
                  setValueList(newList)
                }}
                onDelete={() => {
                  const newValueList = [...valueList]
                  newValueList.splice(index, 1)
                  setValueList(newValueList)
                }}
                moveItem={(originalIndex, targetIndex) => {
                  const newList = [...valueList]
                  const temp = newList[originalIndex]
                  newList[originalIndex] = newList[targetIndex]
                  newList[targetIndex] = temp
                  setValueList(newList)
                }}
              />
            )
          })}
        </div>
      </DndProvider>
    </div>
  )
}

export default CreateList
