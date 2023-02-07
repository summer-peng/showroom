import AsyncSelect from '@/components/commons/Forms/AsyncSelect'
import MyAutocomplete from '@/components/commons/MyAutocomplete'
import API from '@/utils/apiUtils'

const queryUsers = (inputValue) => {
  return API.post('/api/users/getUsers', { name: inputValue }).then(
    (response) => {
      const { dataList } = response
      return dataList.map(({ first_name, last_name, id }) => ({
        label: `${first_name} ${last_name}`,
        value: id,
      }))
    },
  )
}

export default function AutoComplete() {
  return (
    <div>
      <h3>Test AutoComplete</h3>
      <div>
        <AsyncSelect
          label="Implement autocomplete by react-seect"
          asyncOptions={queryUsers}
        />
      </div>
      <div className="mt-10">
        <div>Implement autocomplete</div>
        <MyAutocomplete asyncOptions={queryUsers} />
      </div>
    </div>
  )
}
