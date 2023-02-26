import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { CreateButton } from '@/components/commons/Buttons'
import DataTable from '@/components/commons/DataTable'
import API from '@/utils/apiUtils'

import { tableConfig } from './configs'

import styles from './styles.module.scss'

export default function ResumeQuery({ resumes: initialResumes }) {
  const router = useRouter()
  const [resumes, setResumes] = useState(initialResumes)
  const query = (params) => {
    return API.post('/api/resume-mgmt/get-resumes', params)
      .then((data) => {
        setResumes(data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const pageQuery = (page) => {
    return query({ page, rows: 10 })
  }

  const createResume = () => {
    router.push('/resume-mgmt/resume-edit')
  }

  return (
    <div>
      <div className={styles['title-sction']}>
        <h1>Resume List</h1>
        <CreateButton className={styles['create-btn']} onClick={createResume} />
      </div>
      <DataTable
        tableConfig={tableConfig}
        onPageChange={pageQuery}
        {...resumes}
      />
    </div>
  )
}
