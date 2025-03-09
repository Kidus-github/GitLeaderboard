import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex place-items-center flex-col mt-12'>
      <div className='headerTexts mb-1'>
        <h1  className='text-[#3fd673] text-2xl uppercase font-[Roboto] font-bold drop-shadow-2xl tracking-wider text-center pb-5'>leaderboard</h1>
        <p className='flex text-center flex-col text-gray-500 text-sm'><span>Code smarter, commit often, and climb the leaderboard, the more you push, the higher you rise!</span> Track your progress and lead the way in your innovation! 🚀</p>
        </div>
      <div className='Ranking pt-18'>
        <div className='stages flex relative scale-60'>
          <div className='perspective-midrange w-[180px] h-[180px]'>
            <div className='relative transform-3d -translate-z-28 w-full h-full  translate-y-16'>

             <div className='absolute w-full h-full border-t-2 border-l-1 border-l-[#3fd67463] border-b-2  border-[#3fd6748b]   -translate-y-[101px] rotate-x-65 translate-z-52  '>
              <div className=' translate-y-[50px] translate-x-[50px]'>
                <div className='bg-red-600 w-[50px] h-[50px]   rotate-x-180'></div></div></div> 
            <div className='absolute  h-full border-l-1   border-[#3fd67464] translate-z-45 -rotate-x-45 w-[216px] -translate-x-[8px]'>
            <div className='flex justify-start pt-8 -rotate-x-2'>
                <p className='text-lg font-semibold  w-[150px] overflow-clip ml-6  capitalize'>[1] biya girma</p>
              </div>

            </div>
      
            </div>
          </div>
          <div className='perspective-midrange w-[200px] h-[200px] z-10'>
            <div className='relative transform-3d -translate-z-28 w-full h-full  '>

             <div className='absolute w-full h-full border-t-4 border-x-2 border-b-4  border-[#3fd673]   -translate-y-[107px] rotate-x-65 translate-z-52  '>
             <div className=' translate-y-[75px] translate-x-[75px]'>
                <div className='bg-red-600 w-[50px] h-[50px]   rotate-x-180'></div></div></div> 
            <div className='absolute  h-full border-x-2 bg-black  border-[#3fd673] translate-z-45 -rotate-x-45 w-[216px] -translate-x-[8px]'>
              <div className='flex justify-center pt-8 -rotate-x-2'>
                <p className='text-lg font-semibold capitalize '>[1] kidus girma</p>
              </div>

            </div>
      
            </div>
          </div>
          <div className='perspective-midrange w-[180px] h-[180px]'>
            <div className='relative transform-3d -translate-z-28 w-full h-full  translate-y-20'>

             <div className='absolute w-full h-full border-t-2 border-r-1 border-r-[#3fd67468] border-b-2  border-[#3fd67462]   -translate-y-[101px] rotate-x-65 translate-z-52  '>
             <div className=' translate-y-[75px] translate-x-[75px]'>
                <div className='bg-red-600 w-[50px] h-[50px]   rotate-x-180'></div></div>
              </div> 
            <div className='absolute  h-full border-r-1   border-[#3fd67463] translate-z-45 -rotate-x-45 w-[216px] -translate-x-[30px]'>
            <div className='absolute right-[20px] pt-8 -rotate-x-2 '>
                <p className='text-lg font-semibold w-[120px] overflow-clip mr-0 capitalize '>[3] Beselam girma</p>
              </div>
            </div>
      
            </div>
          </div>
          
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
