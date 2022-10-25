import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWithCheckingAction, increment } from '../../app/features/Counter/actions'

const Counter = () => {
  let { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrementWithCheckingAction(1))}
        className='py-2 px-4 bg-blue-500 border text-white font-bold'>-</button>
      {' '} <span>{count}</span> {' '}
      <button onClick={() => dispatch(increment(1))}
        className='py-2 px-4 bg-blue-500 border text-white font-bold'>+</button>
    </div>
  )
}

export default Counter