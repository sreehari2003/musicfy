import React from 'react'
import Image from 'next/image'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayer } from '../../store/Player'

interface data {
  albumUrl: string
  artist: string
  id: string
  title: string
  uri: string
}

interface res {
  data: data
  playBtn: boolean
}

const Card = ({ data, playBtn }: res) => {
  const dispatch = useDispatch()

  return (
    <div className="h-350 w-50 relative flex flex-col rounded-[50px] p-5 delay-100 hover:scale-110">
      <Image
        src={data.albumUrl}
        height={350}
        width={250}
        className=" rounded-[50px]"
      />
      <div className="absolute left-[2rem] top-[16rem] w-[150px] pl-8">
        <span className="  font-sans text-lg text-white">{data.artist}</span>
      </div>
      <button
        onClick={() => dispatch(setPlayer())}
        className=" absolute right-8  top-[16rem]  rounded-full bg-green-600 p-[.8rem] hover:bg-green-700"
      >
        {!playBtn && <BsFillPlayFill className="text-xl text-white" />}
        {playBtn && <BsPauseFill className="text-xl text-white" />}
      </button>
    </div>
  )
}

export default Card
