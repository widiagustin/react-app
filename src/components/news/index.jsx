import axios from 'axios'
import React, { Component } from 'react'
import CardNews from './CardNews'

export default class NewsPortal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
      input: ''
    }
  }

  componentDidMount () {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=92a40510b84745af9b7c3eac932b54a8'
    axios.get(`${baseUrl}&q=${this.state.input}`)
      .then(res => {
        this.setState({
          post: res.data.articles
        })
      })
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSearch = () => {
    const input = this.state.input
    const filtered = this.state.post.filter(post => {
      return post.title.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({
      input: this.state.input,
      post: filtered
    })
  }

  render () {
    return (
      <div>
        <div className='w-full h-52 bg-blue-500'>
          <div className='text-center pt-14'>
            <h1 className='text-5xl font-bold text-white'>News Portal</h1>
            <div className='max-w-sm top-[8.5rem] absolute mx-auto left-0 right-0 flex gap-2'>
              <input
                type="text"
                placeholder="Search News..."
                value={this.state.input}
                onChange={this.handleInput}
                // onChange={e => this.state.input.setState(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-red-500 focus:ring-red-500 w-full p-2.5' />
              <button
                onClick={this.handleSearch}
                className='p-2 bg-orange-400 rounded-lg hover:bg-orange-500 text-white'>
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mx-auto max-w-5xl justify-center mt-32">
            {
              this.state.post.map((news, i) => (
                <div key={i}>
                  <CardNews
                    img={news.urlToImage}
                    title={news.title}
                    date={news.publishedAt}
                    description={news.description}
                    url={news.url}
                  />
                </div>
              ))
            }
          </div>

        </div>
      </div>
    )
  }
}