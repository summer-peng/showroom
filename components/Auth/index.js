import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Auth = ({ children }) => {
  const { status } = useSession()
  const router = useRouter()

  // client redirect
  useEffect(() => {
    if (status === 'unauthenticated') {
      const current = encodeURIComponent(window.location.href)
      router.push(`/signin?redirectUrl=${current}`)
    }
  }, [router, status])

  if (status === 'unauthenticated' || status === 'loading') {
    return null
  }

  return children
}

export default Auth
