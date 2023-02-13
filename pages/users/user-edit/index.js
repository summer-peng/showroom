import UserEdit from '@/components/pages/Users/UserEdit'

export const getServerSideProps = () => {
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'User Query',
      url: '/users/user-query',
    },
    {
      name: 'User Create',
      active: true,
    },
  ]
  return {
    props: {
      breadCrumbItems,
    },
  }
}

const UserCreatePage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  }

  return <UserEdit initialValues={initialValues} />
}

export default UserCreatePage
