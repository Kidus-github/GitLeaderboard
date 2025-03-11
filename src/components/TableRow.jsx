import React from 'react'

function TableRow({name, image,favlang, rate, score, detaillink, rank, emoji}) {
  return (
    <tr className='border-2  border-gray-700 '>
        
        <td className='text-center border-2 p-4 border-gray-700'>{rank}</td>
        <td className='flex justify-center items-center p-4 border-2  border-gray-700'><img src={image} alt={name} className='w-[40px] h-[40px] rounded-full' /></td>
        <td className='text-center border-2 p-4 border-gray-700'>{emoji}</td>
        <td className='text-center border-2 p-4 border-gray-700'>{name}</td>
        <td className='text-center border-2 p-4 border-gray-700' >{favlang}</td>
        <td className='text-center border-2 p-4 border-gray-700' >{rate}</td>
        <td className='text-center border-2 p-4 border-gray-700'>{score}</td>
        <td className='text-center border-2 p-4 border-gray-700'  ><a href={detaillink} >View Details</a></td>
      </tr>
  )
}

export default TableRow