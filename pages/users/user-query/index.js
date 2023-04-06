import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'

import { CreateButton } from '@/components/commons/Buttons'
import DataTable from '@/components/commons/DataTable'
import { tableConfig } from '@/components/pages/Users/configs'
import { getUserList } from '@/service/usersService'
import API from '@/utils/apiUtils'

import styles from './styles.module.scss'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  const user = session?.user || {}
  if (user.email !== 'zjone.peng@gmail.com') {
    return { notFound: true }
  }

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
    return query({ page, rows: 10 })
  }

  const createNewUser = () => {
    router.push('/users/user-edit')
  }

  return (
    <div>
      <div className={styles['title-sction']}>
        <h1>User list</h1>
        <CreateButton
          className={styles['create-btn']}
          onClick={createNewUser}
        />
      </div>
      <DataTable
        tableConfig={tableConfig}
        onPageChange={pageQuery}
        {...users}
      />
    </div>
  )
}
