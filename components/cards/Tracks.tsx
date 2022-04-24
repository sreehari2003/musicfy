import React from 'react'
import Image from 'next/image'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { data } from './Card'

interface res {
  datas: data[]
}

const Tracks = ({ datas }: res) => {
  return (
    <>
      <section className="flex flex-col">
        <h3 className="mb-6 text-xl text-white">Tracks of week</h3>
        <div className=" h-[350px] w-[750px] overflow-y-scroll rounded-lg border-[.01px] border-[#EEEEEE] bg-black p-1 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-blue-100">
          {datas.map((el) => (
            <>
              <div
                className="rounded-1   my-2 flex h-[80px] items-center justify-between bg-black"
                key={el.id}
              >
                <div className="flex">
                  <div className="rounded-full p-3">
                    <Image
                      src={el.albumUrl}
                      height="60"
                      width="60"
                      className="cursor-pointer rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-white">
                    <span className="cursor-pointer">{el.artist}</span>
                    <span className="cursor-pointer opacity-60">
                      {el.title}
                    </span>
                  </div>
                </div>
                <div className="mr-9">
                  <button className="right-8   rounded-full bg-green-600  p-4 hover:bg-green-700">
                    <BsFillPlayFill className="text-xl text-white" />
                    {/* <BsPauseFill className="text-xl text-white" /> */}
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default Tracks
