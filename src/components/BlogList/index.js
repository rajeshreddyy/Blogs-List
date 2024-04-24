// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem/index'

import './index.css'

const blogData = [
  {
    id: 1,
    title: 'React v16.9.0 and the Roadmap Update',
    imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
    avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
    author: 'Dan Abramov,',
    topic: 'React.js',
  },
]

class BlogList extends Component {
  state = {blogsData: [blogData], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const upadtedData = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogsData: upadtedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem key={`blogItem${eachBlog.id}`} blogItemData={eachBlog} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
