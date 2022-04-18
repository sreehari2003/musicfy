import React from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import Body from './Body'

const DashBoard = () => {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Body />
        <div className="w-screen bg-black"></div>
      </main>
    </>
  )
}

export default DashBoard
