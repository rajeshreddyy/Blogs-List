// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemData} = props
  const {id, imageUrl, avatarUrl, topic, title, author} = blogItemData

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img className="topic-img" alt="topicImg" src={imageUrl} />
        <div className="blog-details-text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar-img" alt="avatar" src={avatarUrl} />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
