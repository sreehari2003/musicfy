import React from 'react'
import Image from 'next/image'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'
import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from '@heroicons/react/solid'
const Sidebar = () => {
  return (
    <section className="fixed top-0 z-40 flex h-screen w-[90px] flex-col items-center space-y-8 bg-black p-4">
      <Image
        src={`https://rb.gy/xkacau`}
        width={56}
        height={56}
        objectFit="contain"
      />
      <nav className="flex flex-col space-y-9">
        <HomeIcon className="sidebarIcon text-white opacity-[0.85]  delay-150 hover:text-white" />
        <RiCompassFill className="sidebarIcon  text-2xl  delay-150 hover:text-white" />
        <FaMicrophoneAlt className="sidebarIcon ml-1 delay-150 hover:text-white" />
        <ChartBarIcon className="sidebarIcon  delay-150 hover:text-white" />
        <ClockIcon className="sidebarIcon  delay-150 hover:text-white" />
        <DotsHorizontalIcon className="sidebarIcon  delay-150 hover:text-white" />
      </nav>
    </section>
  )
}

export default Sidebar
