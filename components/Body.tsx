import React, { useEffect, useState } from 'react'
import Search from './Search'
import Card from './cards/Card'
import Genre from './cards/Genre'
import Tracks from './cards/Tracks'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const Body = ({ spotify }: any) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const { accessToken } = session
  const [query, setQuery] = useState<string>('')
  const [data, setData] = useState<[]>([])
  const [relese, setRelese] = useState<[]>([])

  const getSearchText = (val: string) => {
    setQuery(val)
  }

  useEffect(() => {
    if (!accessToken) return
    spotify.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (query.length < 1) return setData([])
    if (!accessToken) return
    const serach = async () => {
      try {
        const { body } = await spotify.searchTracks(query)
        const tracks = body.tracks.items
        setData(
          tracks.map((el: any) => {
            return {
              id: el.id,
              artist: el.artists[0].name,
              title: el.name,
              albumUrl: el.album.images[0].url,
              popularity: el.popularity,
            }
          })
        )
      } catch (err) {
        console.error(err)
      }
    }
    serach()
  }, [accessToken, query])

  useEffect(() => {
    if (!accessToken) return
    const serach = async () => {
      try {
        const { body } = await spotify.getNewReleases()
        const tracks = body.albums.items
        setRelese(
          tracks.map((el: any) => {
            return {
              id: el.id,
              artist: el.artists[0].name,
              title: el.name,
              albumUrl: el.images[0].url,
              uri: el.uri,
            }
          })
        )
      } catch (err) {
        console.log(err)
      }
    }
    serach()
  }, [accessToken])

  //spliting components create closure

  const CardPrev = () => {
    const demo = relese.slice(0, 4)
    return (
      <>
        {data.length === 0 &&
          demo.map((el) => (
            <>
              <Card {...el} />
            </>
          ))}
      </>
    )
  }

  return (
    <>
      <div className="ml-[5.6rem] min-h-screen w-[1150px] bg-black">
        <Search getSearchText={getSearchText} />
        <div className="m-5 flex h-[55vh] w-[1100px] justify-center  p-5">
          <CardPrev />
        </div>
        <div className="flex  min-h-[350px] w-[1100px] bg-black p-3">
          <Genre />
          <Tracks />
        </div>
      </div>
    </>
  )
}

export default Body
