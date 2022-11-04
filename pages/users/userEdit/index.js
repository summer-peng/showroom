import UserEdit from '@/components/pages/Users/UserEdit'

export const getServerSideProps = () => {
  const breadCrumbItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'User Query',
      url: '/users/userQuery',
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
    first_name: '',
    last_name: '',
  }

  return <UserEdit initialValues={initialValues} />
}

export default UserCreatePage
