import React from 'react'

interface text {
  text: string
}

const Name = ({ text }: text) => {
  return (
    <span className="m-3 mt-3 cursor-pointer rounded-full border-2 bg-[#353535] py-2 px-5 text-white outline-white">
      {text}
    </span>
  )
}

const Genre = () => {
  return (
    <div className="m-4 mt-1 min-h-[200px] w-[300px]">
      <h4 className="mt-3 ml-8 mb-4 font-sans text-[23px] text-white">
        Genres
      </h4>
      <div className="flex flex-wrap">
        <Name text="clasic" />
        <Name text="pop" />
        <Name text="melody" />
        <Name text="love" />
        <Name text="pop" />
        <Name text="melody" />
      </div>
      <div className="mr-[85px] mt-2 flex items-center justify-center">
        <button className="rounded-full border-2 border-white bg-[#0c1821] px-4 py-3 text-center text-white">
          All Generes
        </button>
      </div>
    </div>
  )
}

export default Genre
