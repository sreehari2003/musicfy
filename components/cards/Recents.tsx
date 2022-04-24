import React from 'react'
import Image from 'next/image'

const RecentCard = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-full p-3">
          <Image
            src="https://tinyurl.com/2p9689s2"
            height="60"
            width="60"
            className="cursor-pointer rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center text-white">
          <span className="cursor-pointer">justin bieber</span>
          <span className="cursor-pointer opacity-60">Baby</span>
        </div>
      </div>
    </>
  )
}

const Recents = () => {
  return (
    <div className="ml-8 h-[600px] w-[220px] overflow-y-scroll rounded-md border-2 border-white scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-blue-100">
      <h4 className="text-md ml-4 mt-2 text-left font-sans text-white">
        Recently Played
      </h4>
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
    </div>
  )
}

export default Recents
