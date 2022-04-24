import React from 'react'
import Recents from './cards/Recents'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
const Right = () => {
  const router = useRouter()
  const logOut = () => {
    router.push('/auth/signin')
    signOut()
  }
  return (
    <div className="fixed ml-[1240px] h-screen w-[100%] bg-black">
      <button className="btn  mt-8 ml-12 px-2 py-2" onClick={logOut}>
        LogOut
      </button>
      <Recents />
    </div>
  )
}

export default Right
