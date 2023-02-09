import { useRef, useState } from 'react'
import classnames from 'classnames'
import useDetectOutside from 'hooks/useDetectOutside'
import PropTypes from 'prop-types'

import OptionList from './OptionList'

import styles from './styles.module.scss'

const MyAutocomplete = ({
  name,
  defaultValue,
  asyncOptions,
  onSelected,
  components,
  ...restProps
}) => {
  const [value, setValue] = useState(defaultValue)
  const [options, setOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [loading, setLoading] = useState(false)
  const autocompleteRef = useRef(null)

  const onInputChange = (e) => {
    const inputValue = e.target.value
    setValue(inputValue)
    setLoading(true)
    asyncOptions(inputValue)
      .then((opts) => {
        setOptions(opts)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useDetectOutside(autocompleteRef, () => {
    setShowOptions(false)
  })

  const onOptionClick = (option) => {
    const { label } = option
    setShowOptions(false)
    setValue(label)
    onSelected(option)
  }

  return (
    <div ref={autocompleteRef} className={styles['my-autocomplete']}>
      <input
        className={classnames(showOptions ? styles['input-on-focus'] : null)}
        type="text"
        name={name}
        placeholder="Please typing..."
        {...restProps}
        value={value}
        onChange={onInputChange}
        onFocus={() => setShowOptions(true)}
      />
      {showOptions && (
        <div
          className={classnames(
            styles['options-container'],
            showOptions ? styles['show-options'] : null,
          )}
        >
          <OptionList
            loading={loading}
            options={options}
            onOptionClick={onOptionClick}
            components={components}
          />
        </div>
      )}
    </div>
  )
}

MyAutocomplete.defaultProps = {
  defaultValue: '',
  onSelected: () => null,
  components: {},
}
MyAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  asyncOptions: PropTypes.func.isRequired,
  components: PropTypes.object,
  onSelected: PropTypes.func,
}

export default MyAutocomplete
