import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setProducts(data);
            }else{
                console.log("Ürünler getirilemedi...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProducts = async(productid) => {
        try {
            const response = await fetch("http://localhost:5000/api/categories",{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({_id:productid})
            });
            if(response.ok){
                getProducts();
            }else{
                console.log("Kategori silinirken hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }

    

    useEffect(() => {
        getProducts();
    },[navigate])

    const values = {
        products,
        getProducts,
        deleteProducts
        
    }

  return (
    <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext}