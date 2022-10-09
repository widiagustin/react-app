import React, { useState } from 'react'

const MultiplyNumbers = () => {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState(0)

  const Calculate = () => {
    setResult(number1 * number2)
  }
  return (
    <div>
      <div className="text-center m-5 max-w-xl mx-auto">
        <h1 className="font-bold text-3xl py-5 text-yellow-500">Multiply Two Numbers</h1>
        <div className="flex flex-col gap-3">
          <input
            type="number"
            placeholder="First Number..."
            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={number1}
            onChange={e => setNumber1(e.target.value)} />
          <input
            type="number"
            placeholder="Second Number..."
            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={number2}
            onChange={e => setNumber2(e.target.value)} />
          <button
            className="bg-blue-500 p-3 rounded-full text-white w-32 mx-auto mb-5"
            onClick={Calculate}
          >
            ADD THEM!</button>
        </div>
        <h2 className="text-2xl bg-yellow-100 p-2 w-32 mx-auto rounded-lg border-gray-300 text-gray-700">Total : <span className="text-blue-500"> {result} </span></h2>
      </div>
    </div>
  )
}

export default MultiplyNumbers