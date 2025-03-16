import React from 'react'
import Table from '../hooks/Table'
import Ranking from '../hooks/Ranking'
import Header from '../hooks/Header'

function LeaderBoardLayout() {
  return (
    <div className='flex place-items-center flex-col mt-12'>
        <Header/>
        <Ranking/>
        <Table/>
    </div>
  )
}

export default LeaderBoardLayout