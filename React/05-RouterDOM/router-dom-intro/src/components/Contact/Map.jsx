import React from 'react'

const Map = () => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24087.289389882375!2d28.845103950000006!3d41.00531735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1746515256776!5m2!1str!2str" 
      height={600} 
      style={{border: 0, width:"100%" , marginTop:"5px"}} 
      allowFullScreen loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}

export default Map
