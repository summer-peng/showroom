import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getUserByEmail } from '@/service/usersService'
import { getHashBySha256 } from '@/service/utils/hashUtil'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const { email, password } = credentials
        const user = await getUserByEmail(email)
        const hash = getHashBySha256(password)
        const isValid = hash === user.password

        if (!isValid) {
          throw new Error('Wrong credentials. Try again.')
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
}
export default NextAuth(authOptions)
