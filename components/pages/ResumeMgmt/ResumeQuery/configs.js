import classnames from 'classnames'
import Link from 'next/link'

import styles from './styles.module.scss'

export const tableConfig = [
  {
    dataKey: 'function',
    label: '',
    cellRenderer: ({ rowData }) => {
      const { id } = rowData
      return (
        <div className={styles['function-section']}>
          <a
            target="_blank"
            href={`/resume-mgmt/resume-viewer/${id}`}
            rel="noreferrer"
          >
            <i
              className={classnames(
                'fa-regular fa-address-card',
                styles['icon-style'],
              )}
              title="Go to resume page"
            />
          </a>
          <a href={`/resume-mgmt/resume-edit?copiedId=${id}`}>
            <i
              className={classnames('fa-regular fa-copy', styles['icon-style'])}
              title="Copy resume"
            />
          </a>
        </div>
      )
    },
  },
  {
    dataKey: 'title',
    label: 'Title',
    width: 200,
    cellRenderer: ({ cellData, rowData }) => {
      const { id } = rowData
      return (
        <div>
          <Link href={`/resume-mgmt/resume-edit/${id}`}>{cellData || id}</Link>
        </div>
      )
    },
  },
  {
    dataKey: 'remark',
    label: 'Remark',
    width: 200,
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
  {
    dataKey: 'createDate',
    label: 'Create Date',
  },
  {
    dataKey: 'updateDate',
    label: 'Update Date',
  },
]

const configs = {
  tableConfig,
}

export default configs
