import React from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import Body from './Body'
import SpotifywebApi from 'spotify-web-api-node'

const spotify = new SpotifywebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

const DashBoard = () => {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Body spotify={spotify} />
        <div className="w-screen bg-black"></div>
      </main>
    </>
  )
}

export default DashBoard
