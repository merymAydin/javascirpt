import React, { useContext } from 'react'
import { Button, Space, Table } from 'antd'
import { ProductContext } from '../../../contexts/ProductProvider'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const {products,deleteProduct} = useContext(ProductContext);
    const navigate = useNavigate();
    




    const columns = [
        {
            title : "Ürün Görseli",
            dataIndex : "image",
            key : "image",
            render : (img,record) => (<img src={`${record.images[0]}`} alt='Product image' style={{width:"50%"}} />)
        },
        {
            title : "Ürün Adı",
            dataIndex : "name",
            key:"name"
        },
        {
            title : "Fiyatı",
            dataIndex : "price",
            key : "price"
        },
        {
            title : "Ürün Açıklaması",
            dataIndex : "description",
            key : "description"
        },
        {
            title : "Ürün Renkleri",
            dataIndex : "colors",
            key : "colors",
            render : (colors) => (
                <div style={{display:"flex", flexWrap:"wrap", width : "100px"}}>
                    {
                        colors.map((item,index) => (
                            <div key={index} 
                            style={{
                                width:"20px",
                                height : "20px",
                                borderRadius : "50%",
                                backgroundColor : item,
                                marginRight : "5px",
                                border : "1px solid silver",
                                marginBottom : "5px"
                            }}></div>
                        ))
                    }
                </div>
            )
        },
        {
            title : "Stok Miktarı",
            dataIndex : "stock",
            key : "stock"
        },
        {
            title : "İşlemler",
            key : "action",
            render : (_,record) => (
                <Space size="middle">
                    <Button color='cyan' variant="solid" onClick={() => navigate(`/admin/products/update/${record._id}`)}>Güncelle</Button>
                    <Button color='danger' variant="solid" onClick={() => deleteProduct(record._id)}>Sil</Button>
                </Space>
            )
        }

    ]
  return (
    <div>
        <h2>Ürünler</h2>
        <Table 
        columns={columns} 
        dataSource={products} 
        rowKey={(record) => record._id} 
        pagination={{ pageSize: 10 }}
        scroll={{ y: 600 }}/>
    </div>
  )
}

export default ProductList