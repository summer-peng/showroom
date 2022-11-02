export const tableConfig = [
  {
    dataKey: 'id',
    label: 'ID',
    width: 50,
    cellRenderer: ({ cellData }) => {
      return <div className="text-primary text-center">{cellData}</div>
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
