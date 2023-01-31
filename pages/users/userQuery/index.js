import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

import DataTable from '@/components/commons/DataTable'
import { tableConfig } from '@/components/pages/Users/configs'
import { getUserList } from '@/service/usersService'
import API from '@/utils/apiUtils'

import styles from './styles.module.scss'

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

export default function UserQuery({ users: initialUsers }) {
  const router = useRouter()
  const [users, setUsers] = useState(initialUsers)
  const query = (params) => {
    return API.post('/api/users/getUsers', params)
      .then((data) => {
        setUsers(data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const pageQuery = (page) => {
    console.log('page', page)
    return query({ page, rows: 10 })
  }

  const createNewUser = () => {
    router.push('/users/userEdit')
  }

  return (
    <div>
      <div className={styles['title-sction']}>
        <h1>User list</h1>
        <Button
          className={styles['create-btn']}
          variant="primary"
          onClick={createNewUser}
        >
          Create
        </Button>
      </div>
      <DataTable
        tableConfig={tableConfig}
        onPageChange={pageQuery}
        {...users}
      />
    </div>
  )
}
