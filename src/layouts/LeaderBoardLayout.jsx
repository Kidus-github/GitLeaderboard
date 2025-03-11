import React from 'react'
import Table from '../components/Table'
import Search from '../components/Search'
import Ranking from '../components/Ranking'
import Header from '../components/Header'

function LeaderBoardLayout() {
  return (
    <div className='flex place-items-center flex-col mt-12'>
      <Header/>
      <Ranking/>
      <Search/>
     <Table/>

    </div>
  )
}

export default LeaderBoardLayout