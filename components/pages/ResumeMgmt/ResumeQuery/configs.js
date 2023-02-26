import Link from 'next/link'

export const tableConfig = [
  {
    dataKey: 'id',
    label: 'ID',
    width: 50,
    cellRenderer: ({ cellData }) => {
      return (
        <div className="text-primary text-center">
          <Link href={`/resume-mgmt/resume-edit/${cellData}`}>{cellData}</Link>
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
  {
    dataKey: 'email',
    label: 'Email',
    width: 200,
  },
]

const configs = {
  tableConfig,
}

export default configs
