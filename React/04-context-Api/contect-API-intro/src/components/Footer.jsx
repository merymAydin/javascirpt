import React, { useContext } from 'react'
import Cart from './Cart'
import { ProductContext } from '../Context/ProductContext'

const Footer = () => {
  const{productInfo} = useContext(ProductContext)
  return (
    <>
    <footer className="footer">
        <h3>Footer</h3>
        <p>Product Name: {productInfo} </p>
    </footer>
    </>
  )
}

export default Footer
