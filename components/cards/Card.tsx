import React from 'react'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'

interface data {
  albumUrl: string
  artist: string
  id: string
  title: string
  uri: string
}

const Card: React.FC<data> = (props) => {
  return (
    <div className="h-350 w-50 relative flex flex-col rounded-[50px] p-5">
      <Image
        src={props.albumUrl}
        height={350}
        width={250}
        className=" rounded-[50px]"
      />
      <div className="absolute left-[2rem] top-[16rem] w-[150px] pl-8">
        <span className="  font-sans text-lg text-white">{props.artist}</span>
      </div>
      <button className=" absolute right-8  top-[16rem]  rounded-full bg-green-600 p-[.8rem] hover:bg-green-700">
        <BsFillPlayFill className="text-xl text-white" />
      </button>
    </div>
  )
}

export default Card
