import React, { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState<string>(' ')
  return (
    <div>
      <div className="bottom-2 flex max-w-[1150px] items-center  overflow-hidden rounded-full border-black p-1.5 px-5 pr-8">
        <input
          type="text"
          className="border-grey relative mt-7 h-11 w-[1150px] rounded-[20px] border-[0.1px] bg-[#343a40] pl-10 font-sans  text-white outline-none"
          placeholder="Search..."
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setQuery((e.target as HTMLInputElement).value)
          }
        />
        <div className="absolute left-[7.5rem] top-12 bottom-0 z-[100]  mr-12 h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2"></div>
      </div>
    </div>
  )
}

export default Search
