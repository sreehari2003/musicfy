import React from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import Body from './Body'
import SpotifywebApi from 'spotify-web-api-node'
import Player from './Player'

const spotify = new SpotifywebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

const DashBoard = () => {
  return (
    <>
      <main className="relative flex">
        <Sidebar />
        <Body spotify={spotify} />
        <Right />
      </main>
      <Player />
    </>
  )
}

export default DashBoard
