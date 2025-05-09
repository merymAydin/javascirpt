import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'

function header() {
  const {productInfo} = useContext(ProductContext);
  return (
    <header className='header'>
      <div className='header'>LOGO => {productInfo}</div>
      <div className="menu">MENU</div>
    </header>
  )
}

export default header
