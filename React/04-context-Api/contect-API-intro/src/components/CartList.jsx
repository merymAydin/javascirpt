import React, { useContext } from 'react'
import Cart from './Cart'
import { ProductContext } from '../Context/ProductContext'

const CartList = () => {
    // const [products,setProducts] = useState([
    //     {id : 1, name : "Bilgisayar",price : 15000},
    //     {id : 2, name : "Cep Telefonu",price : 12000},
    //     {id : 3, name : "Televizyon",price : 10000},
    //     {id : 4, name : "Klavye",price : 500}
    // ])
    const {products} = useContext(ProductContext)
  return (
    <>
    <section className='card-list'>
        {
         products.map(product => <Cart key={product.id} product={product} />)
        }
    </section>
    </>
  )
}

export default CartList
