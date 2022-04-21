import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import DashBoard from '../components/DashBoard'
import { useRouter } from 'next/router'

import Loader from '../components/Loader'
const index = () => {
  const { data: session, status } = useSession()

  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push('/auth/signin')
    }
  }, [])

  if (status === 'loading') {
    return (
      <main className="flex h-screen items-center justify-center bg-black">
        <Loader />
      </main>
    )
  }
  return (
    <>
      <Head>
        <title>spotify Dashboard</title>
      </Head>
      <DashBoard />
    </>
  )
}

export default index
