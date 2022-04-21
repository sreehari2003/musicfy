import React, { useEffect } from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getProviders, useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'

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
  const router = useRouter()
  const { data: session, status } = useSession()
  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session])

  const Result = () => {
    if (status === 'loading') {
      return <Loader />
    } else {
      return (
        <>
          {Object.values(elm).map((el, index) => {
            return (
              <button key={index} onClick={() => signIn(el.id)} className="btn">
                Signin with {el?.name}
              </button>
            )
          })}
        </>
      )
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex h-[600px] w-[800px] flex-col place-content-around items-center justify-center ">
        <Image
          src={`https://rb.gy/y9mwtb`}
          width={600}
          height={300}
          className="my-4 animate-pulse"
        />
        <Result />
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
