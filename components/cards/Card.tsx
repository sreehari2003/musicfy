import React from 'react'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
const Card = () => {
  const img = `https://source.unsplash.com/random/${Math.round(
    Math.random() * 100
  )}`
  return (
    <div className="h-350 w-50 relative flex flex-col rounded-[50px] p-5">
      <Image src={img} height={350} width={250} className=" rounded-[50px]" />
      <span className="absolute left-[7rem] top-[16rem] font-sans text-lg text-white">
        BTS
        <button className=" absolute right-8 bottom-[-.5rem] rounded-full bg-green-600 p-[.8rem]">
          <BsFillPlayFill className="text-xl text-white" />
        </button>
      </span>
    </div>
  )
}

export default Card
