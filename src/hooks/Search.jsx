import React from 'react'

function Search() {
  return (
    <div className="search my-[20px] px-[200px] w-full">
      <div className='flex justify-end  gap-2 mb-8'>
          <input type="text" placeholder='Add UserName' className='border-2 p-4 border-gray-700'/>
          <button className='py-4 px-6 border-2 font-semibold text-lg border-gray-700'>Join leader board</button>
        </div>
        
        <div className='flex w-full gap-2'>
          <input type="text" placeholder='Search' className='border-2 p-4 grow border-gray-700'/>
          <button className='py-4 px-6 border-2 font-bold text-xl border-gray-700'>Search</button>
        </div>
      </div>
  )
}

export default Search