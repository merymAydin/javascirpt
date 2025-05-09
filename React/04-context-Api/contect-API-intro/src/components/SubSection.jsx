 import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
 
 function SubSection() {
    const {productInfo} = useContext(ProductContext);
   return (
     <div>
       <h1>{productInfo}</h1>
     </div>
   )
 }
 
 export default SubSection
 