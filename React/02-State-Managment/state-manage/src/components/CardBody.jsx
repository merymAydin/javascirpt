import React from "react";
import Title from "./Title";
import CardText from "./CardText";

function CardBody({x,description}) {
    
  return (
    <>
      <div className="card-body">
        <Title baslik={x}/>
        <CardText aciklama={description}/>
        <a href="#" className="btn btn-primary" >
          Go somewhere
        </a>
      </div>
    </>
  );
}

export default CardBody;