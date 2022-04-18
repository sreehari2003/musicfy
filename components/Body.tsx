import React from 'react'
import Search from './Search'
import Card from './cards/Card'
import Genre from './cards/Genre'
const Body = () => {
  return (
    <>
      <div className="ml-[5.6rem] min-h-screen w-[1150px] bg-black">
        <Search />
        <div className="m-5 flex h-[55vh] w-[1100px] justify-center  p-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex  min-h-[350px] w-[1100px] bg-black p-3">
          <Genre />
        </div>
      </div>
    </>
  )
}

export default Body
