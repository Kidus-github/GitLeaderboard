import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex place-items-center flex-col mt-12'>
      <div className='headerTexts'>
        <h1  className='text-[#3fd673] text-4xl uppercase font-[Roboto] font-bold drop-shadow-2xl tracking-wider text-center pb-5'>leaderboard</h1>
        <p className='flex text-center flex-col text-gray-500'><span>Code smarter, commit often, and climb the leaderboard, the more you push, the higher you rise!</span> Track your progress and lead the way in your innovation! 🚀</p>
        </div>
      <div className='Ranking mt-20'>
        <div className='stages flex'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
