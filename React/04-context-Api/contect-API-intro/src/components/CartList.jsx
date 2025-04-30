import React, { useState } from 'react'
import Cart from './Cart'

const CartList = () => {
    const [products,setProducts] = useState([
        {id : 1, name : "Bilgisayar",price : 15000},
        {id : 2, name : "Cep Telefonu",price : 12000},
        {id : 3, name : "Televizyon",price : 10000},
        {id : 4, name : "Klavye",price : 500}
 
    ])
  return (
    <>
    <section className='card-list'>
        {
         products.map(product => <Cart key={product.id} product={product} setProducts={setProducts}/>)
        }
    </section>
    </>
  )
}

export default CartList
