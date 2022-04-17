import React from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getProviders, useSession, signIn } from 'next-auth/react'

interface auth {
  callbackUrl: string
  id: string
  name: string
  signinUrl: string
  type: string
}

const Signin = (props: any) => {
  let elm: auth
  elm = props.provider
  const { data: session, status } = useSession()
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex h-[600px] w-[800px] flex-col place-content-around items-center justify-center ">
        <Image
          src={`https://rb.gy/y9mwtb`}
          width={600}
          height={300}
          className="my-4 animate-pulse"
        />
        {Object.values(elm).map((el, index) => (
          <button
            key={index}
            onClick={() => signIn(el.callbackUrl)}
            className="m-5 rounded-[50px]  bg-green-600  px-12 py-3 text-center text-xl text-white hover:scale-105"
          >
            Signin with {el?.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Signin

export const getServerSideProps = async ({}: GetServerSideProps) => {
  const provider = await getProviders()
  return {
    props: { provider },
  }
}
