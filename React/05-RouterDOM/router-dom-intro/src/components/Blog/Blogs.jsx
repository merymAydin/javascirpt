import React from 'react'
import BlogImage from './blogImage'
import BlogTitle from './BlogTitle'
const Blogs = () => {
  return (
    <>
      <div className="blog d-flex p-3">
          <BlogImage image={`https://picsum.photos/id/${Math.ceil(Math.random()*250)}/900/600`} />
          <BlogTitle/>
        </div>
    </>
  )
}

export default Blogs
