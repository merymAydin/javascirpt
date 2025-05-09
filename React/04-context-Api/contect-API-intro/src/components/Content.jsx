import React from 'react'
import CartList from './CartList'

function Content({productInfo, setProductInfo}) {
  return (
    <>
     <main className="main">
        <CartList productInfo={productInfo} setProductInfo={setProductInfo}/>
     </main>
    </>
  )
}

export default Content
