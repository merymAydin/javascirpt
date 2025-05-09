import React, { useRef } from 'react'





const Card = (props) => {
  
  const pElement = useRef();
  //const bodyElement = useRef();

  console.log(pElement);
  
  return (
    <>
      <div className={`card ${props.classes}`} style={{ width: "18rem" }}>
      <img src="https://picsum.photos/id/237/300/200" class="img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-text" ref={pElement}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {
            pElement.current.innerHTM
            }
          </div>
        </div>
    </>
  )
}

export default Card
