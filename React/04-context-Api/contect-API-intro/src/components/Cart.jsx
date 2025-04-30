import React from "react";

const Cart = ({product}) => {
  return (
    <div className="card-wrapper">
      <div className='card'>
        <ul className='list-group'>
            <li className="list-group-item">Ürün Bilgileri</li>
            <li className="list-group-item">Id : {product.id}</li>
            <li className="list-group-item">Name : {product.name}</li>
            <li className="list-group-item">Price : {product.price}</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
