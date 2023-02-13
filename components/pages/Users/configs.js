import Link from 'next/link'

export const tableConfig = [
  {
    dataKey: 'id',
    label: 'ID',
    width: 50,
    cellRenderer: ({ cellData, rowData }) => {
      const { userId } = rowData
      return (
        <div className="text-primary text-center">
          <Link href={`/users/user-edit/${cellData}`}>{userId}</Link>
        </div>
      )
    },
  },
  {
    dataKey: 'firstName',
    label: 'First name',
    width: 100,
  },
  {
    dataKey: 'lastName',
    label: 'Last name',
    width: 100,
  },
]

const configs = {
  tableConfig,
}

export default configs
