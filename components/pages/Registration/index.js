import { useRouter } from 'next/router'

import UserEdit from '@/components/pages/Users/UserEdit'

import styles from './styles.module.scss'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const Registration = () => {
  const router = useRouter()
  return (
    <div className={styles['registration-container']}>
      <div className={styles['registration-form']}>
        <UserEdit
          title="Registration"
          initialValues={initialValues}
          afterSubmit={() => {
            router.push('/login')
          }}
        />
      </div>
    </div>
  )
}

export default Registration
