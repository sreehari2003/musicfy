import React from 'react'
import Image from 'next/image'
import { BsPause, BsFillPlayFill } from 'react-icons/bs'
import { AiFillBackward, AiFillForward } from 'react-icons/ai'

const Player = () => {
  const Playandpause = () => {
    return (
      <>
        <div className="flex w-[280px] items-center justify-center text-[2.2rem] text-white">
          <AiFillBackward className=" hover:cursor-pointer" />
          <div className="center rounded-full bg-[#353839] p-1 hover:cursor-pointer">
            {/* <BsPause /> */}
            <BsFillPlayFill />
          </div>
          <AiFillForward className=" hover:cursor-pointer" />
        </div>
      </>
    )
  }

  return (
    <div className="relative bottom-[18.8rem] z-[100]">
      <div className="fixed flex h-20 w-[100%] bg-[#1a1a1a] p-4">
        <div className="flex w-[160px] items-center justify-between">
          <Image
            src="https://tinyurl.com/2p9689s2"
            height="50"
            width="50"
            className="cursor-pointer rounded-full"
          />
          <div className="flex flex-col justify-center text-white">
            <span className="cursor-pointer">justin bieber</span>
            <span className="cursor-pointer opacity-60">Baby</span>
          </div>
        </div>
        <Playandpause />
      </div>
    </div>
  )
}

export default Player
