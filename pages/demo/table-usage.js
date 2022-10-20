import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import DataTable from '@/components/DataTable'
import { getUserList } from '@/service/usersService'
import API from '@/utils/apiUtils'

import { tableConfig } from './configs'

export const getServerSideProps = async () => {
  const users = await getUserList({ page: 1, rows: 10 })
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Table Usage',
      url: '/first-post',
      active: true,
    },
  ]
  return {
    props: {
      users,
      breadCrumbItems,
    },
  }
}

export default function TableUsage({ users: initialUsers }) {
  const { t } = useTranslation()
  const [users, setUsers] = useState(initialUsers)
  const query = (params) => {
    return API.post('/api/get-users', params).then((data) => {
      setUsers(data)
    })
  }

  const pageQuery = (page) => {
    return query({ page, rows: 10 })
  }

  return (
    <div>
      <h1>Table Usage {t('title')}</h1>
      <DataTable
        /* other props */
        style={{ 'pointer-events': '' }}
        tableConfig={tableConfig}
        {...users}
        onPageChange={pageQuery}
      />
    </div>
  )
}
