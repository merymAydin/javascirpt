import { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
    const [categoryData,setCategoryData] = useState([]);

    useEffect(() => {
        getCategories();
    },[categoryData])

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setCategoryData(data);
            }else{
                console.log("Kategori getirilirken hata oluştu...");
            }

        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }
    const columns = [
        {
            title : "Görsel",
            dataIndex : "image",
            key : "image",
            width : "25%",
            render : (img,record) => (
                <img src={`${record.image}`} style={{width:"50%"}} alt='Kategori görseli' />
            )
        },
        {
            title : "Kategori Adı",
            dataIndex : "name",
            key : "name",
            width : "50%",
            render : (text) => (<strong>{text}</strong>)
        }
    ]
  return (
    <div>
        <h2>Kategoriler</h2>
        <Table columns={columns} dataSource={categoryData} rowKey={(record) => record._id}/>
    </div>
  )
}

export default CategoryList