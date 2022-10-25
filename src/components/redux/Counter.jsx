import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWithCheckingAction, increment } from '../../app/features/Counter/actions'

const Counter = () => {
  let { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='max-w-2xl mx-auto flex flex-col gap-8 justify-center h-screen '>
        <div>
          <h1 className='font-bold text-3xl text-blue-500 text-center'>Simple Counter App</h1>
        </div>
        <div className='text-center py-8 px-20 border-2 border-gray-400 flex items-center gap-6 mx-auto'>
          <button onClick={() => dispatch(decrementWithCheckingAction(1))}
            className='py-2 px-4 bg-blue-500 border text-white font-bold'>-</button>
          <p className='text-3xl'>{count}</p>
          <button onClick={() => dispatch(increment(1))}
            className='py-2 px-4 bg-blue-500 border text-white font-bold'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter