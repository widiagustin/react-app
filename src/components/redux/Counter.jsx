import React from 'react'

const Counter = () => {
  return (
    <div>
      <button className='py-2 px-4 bg-blue-500 border text-white font-bold'>-</button>
      {' '} <span>0</span> {' '}
      <button className='py-2 px-4 bg-blue-500 border text-white font-bold'>+</button>
    </div>
  )
}

export default Counter