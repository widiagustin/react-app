import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardNews from './CardNews'
import searchIcon from '../../assets/search.svg'
import clearIcon from '../../assets/x.png'

const NewsPortal = () => {
  const [post, setPost] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=92a40510b84745af9b7c3eac932b54a8'
    axios.get(`${baseUrl}&q=${input}`)
      .then(res => {
        setPost(res.data.articles)
      })
  }, [input])


  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div className='w-full h-52 bg-blue-500'>
        <div className='text-center pt-14'>
          <h1 className='text-5xl font-bold text-white'>News Portal</h1>
          <div className='max-w-sm top-[8.5rem] absolute mx-auto left-0 right-0 flex gap-2'>
            <input
              type="text"
              name="search"
              placeholder='search news...'
              value={input}
              onChange={handleInput}
              className='relative pl-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-red-500 focus:ring-red-500 w-full p-2.5' />
            {input ?
              <img src={clearIcon} alt="" srcSet="" className='absolute w-5 h-5 top-3 left-2 cursor-pointer' onClick={() => setInput('')} />
              :
              <img src={searchIcon} alt="" srcSet="" className='absolute w-5 h-5 top-3 left-2' />
            }
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mx-auto max-w-5xl justify-center mt-32">
          {
            post.map((el, i) => {
              return <div key={i}>
                <CardNews
                  img={el.urlToImage}
                  title={el.title}
                  date={el.publishedAt}
                  description={el.description}
                  url={el.url}
                />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NewsPortal