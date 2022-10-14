import React from 'react'
import { PrismaClient } from '@prisma/client'

import DataTable from '@/components/DataTable'

import { tableConfig } from './configs'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
  const samples = await prisma.table_sample.findMany()
  const users = await prisma.users.findMany()
  const count = await prisma.users.count()
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
      initialSamples: samples,
      users: {
        page: 1,
        rows: 10,
        totalRecords: count,
        dataList: [
          ...users,
          ...users,
          ...users,
          ...users,
          ...users,
          ...users,
          ...users,
          ...users,
          ...users,
        ],
      },
      breadCrumbItems,
    },
  }
}

export default function TableUsage({ users }) {
  console.log('users', users)
  return (
    <div>
      <h1>Table Usage</h1>
      <DataTable
        /* other props */
        style={{ 'pointer-events': '' }}
        tableConfig={tableConfig}
        {...users}
      />
    </div>
  )
}
