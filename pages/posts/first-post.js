import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
  const samples = await prisma.table_sample.findMany()
  const users = await prisma.users.findMany()
  return {
    props: {
      initialSamples: samples,
      users,
    },
  }
}

export default function FirstPost({ initialSamples, users }) {
  return (
    <>
      <h1>First Post</h1>
      <div>
        {initialSamples.map(({ timestamp, description }, index) => {
          return <div key={index}>{description}</div>
        })}
      </div>
      <div>
        {users.map(({ first_name, last_name }, index) => {
          return <div key={index}>{`${first_name} ${last_name}`}</div>
        })}
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}
