import React from 'react';

const BlogImage = ({ image }) => {
  return (
    <>
      <figure className="figure w-100">
         <img src={image} className="figure-img img-fluid rounded" alt="Blog" />
         <figcaption className="figure-caption text-end">
           A caption for the above image.
         </figcaption>
       </figure>
    </>
  );
};

export default BlogImage;
