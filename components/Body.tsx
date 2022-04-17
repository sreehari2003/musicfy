import React from 'react'
import Search from './Search'
import Card from './cards/Card'
const Body = () => {
  return (
    <>
      <div className="ml-[5.6rem] h-screen bg-black">
        <Search />
        <div className="m-5 flex h-[55vh] w-[1100px] justify-center  p-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Body
