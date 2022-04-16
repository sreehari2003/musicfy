import React from 'react'
import Head from 'next/head'
import DashBoard from '../components/DashBoard'
const index = () => {
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
