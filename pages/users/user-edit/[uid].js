import UserEdit from '@/components/pages/Users/UserEdit'
import { getUserList } from '@/service/usersService'

export const getServerSideProps = async ({ params }) => {
  const { uid } = params

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
      name: 'User edit',
      active: true,
    },
  ]

  try {
    const user = await getUserList({ id: uid })
    const { dataList = [] } = user || {}
    if (dataList.length === 0) {
      return { notFound: true }
    }

    return {
      props: {
        breadCrumbItems,
        user: user.dataList[0],
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export default function UserEditPage({ user }) {
  return <UserEdit initialValues={user} />
}
