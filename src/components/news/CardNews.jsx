import React from 'react'

const CardNews = (props) => {
  return (
    <div>
      <div>
        <div>
          <div className='bg-white p-2 w-56 border border-gray-300 rounded-md shadow-sm hover:shadow-lg'>
            <div>
              <img
                src={props.img}
                alt=""
                className="w-52 h-32 object-cover rounded-md" />
            </div>
            <div className='mt-2'>
              <h1 className='text-lg font-bold'>{props.title}</h1>
              <p className='text-xs text-gray-500'>Published at : {props.date}</p>
              <p className='text-sm mt-1'>{props.description}</p>
              <div className='flex justify-end'>
                <a href={props.url}
                  target="_blank"
                  className="mt-4 mb-3 bg-blue-500 hover:bg-blue-600 p-1.5 px-6 rounded-lg text-white"
                  rel="noreferrer">
                  Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNews