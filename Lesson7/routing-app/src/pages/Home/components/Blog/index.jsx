import React from 'react'
import { Link } from 'react-router-dom'

 const Blog = ({id,title,description, createdAt, author}) => {
  return (
    <>
    
    <div class="post-preview">
        <Link to={`/posts/${id}`}>  
        <h2 class="post-title"> {title}</h2>
        <h3 class="post-subtitle"> {description}</h3>
        </Link>
    <p class="post-meta">
        Posted by
        <a href="#!">{author}</a>
        on {createdAt}
    </p>
</div>
<hr className='my-4' />
  </>
  )
}
export default Blog