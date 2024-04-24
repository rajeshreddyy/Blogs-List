// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTheBlogDetails()
  }

  getTheBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    const blogItemDetails = {
      id: blogData.id,
      title: blogData.title,
      imageUrl: blogData.image_url,
      avatarUrl: blogData.avatar_url,
      author: blogData.author,
      content: blogData.content,
    }
    this.setState({blogItemDetails: {...blogItemDetails}, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogItemDetails
    console.log(blogItemDetails)

    return (
      <div className="blog-item-deatils-container">
        <h1 className="title-heading">{title}</h1>
        <div className="avatar-author-container">
          <img src={avatarUrl} className="avatar-img" />
          <p className="author-name"> {author} </p>
        </div>
        <img src={imageUrl} className="topic-image" />
        <p className="topic-content"> {content} </p>
      </div>
    )
  }
}

export default BlogItemDetails
