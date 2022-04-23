import React from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import Body from './Body'
import SpotifywebApi from 'spotify-web-api-node'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

const spotify = new SpotifywebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

const DashBoard = () => {
  const router = useRouter()
  const logOut = () => {
    router.push('/auth/signin')
    signOut()
  }
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Body spotify={spotify} />
        <div className="w-screen bg-black">
          <button className="btn  mt-8 ml-12 px-2 py-2" onClick={logOut}>
            LogOut
          </button>
        </div>
      </main>
    </>
  )
}

export default DashBoard
