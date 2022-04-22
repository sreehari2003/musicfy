import React from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import Body from './Body'
import SpotifywebApi from 'spotify-web-api-node'
import { signOut } from 'next-auth/react'

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
        <div className="w-screen bg-black">
          <button className="btn mr-2 px-4" onClick={() => signOut()}>
            LogOut
          </button>
        </div>
      </main>
    </>
  )
}

export default DashBoard
