import Link from 'next/link'

export const tableConfig = [
  {
    dataKey: 'id',
    label: 'ID',
    width: 50,
    cellRenderer: ({ cellData }) => {
      return (
        <div className="text-primary text-center">
          <Link href={`/users/userEdit/${cellData}`}>{cellData}</Link>
        </div>
      )
    },
  },
  {
    dataKey: 'first_name',
    label: 'First name',
    width: 100,
  },
  {
    dataKey: 'last_name',
    label: 'Last name',
    width: 100,
  },
]

const configs = {
  tableConfig,
}

export default configs
