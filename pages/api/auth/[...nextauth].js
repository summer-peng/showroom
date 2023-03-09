import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getUserByEmail } from '@/service/usersService'
import { getHashBySha256 } from '@/service/utils/hashUtil'

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.userId
        token.firstName = user.firstName
        token.lastName = user.lastName
      }
      return token
    },
    async session({ session, token }) {
      session.user.userId = token.uid
      session.user.firstName = token.firstName
      session.user.lastName = token.lastName
      return session
    },
  },
  pages: {
    signIn: '/signin',
  },
}
export default NextAuth(authOptions)
