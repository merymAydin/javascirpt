import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorList = () => {
    const [authorData,setAuthorData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getAuthors();
    },[authorData]);

    const getAuthors = async()=>{
        try {
            const response = await fetch ("http://localhost:5000/api/authors");
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setAuthorData(data);
            }else{
                console.log("authors getirilirken hata oluştu");
            }
        } catch (error) {
            console.log("Sunucu hatası:",error);
        }
    }
     const deleteAuthors= async(authorid)=>{
         try {
             const response = await fetch ("http://localhost:5000/api/authors",{
                 method:"DELETE",
               headers:{
                   "content-type" : "application/json"
                 },
                 body:JSON.stringify({_id:authorid})
             });
            if(response.ok){
                getAuthors();
            }else{
                console.log("yazarlar getirilirken hata oluştu");
             }
         } catch (error) {
             console.log("Sunucu hatası",error);
         }
     }
     const columns=[
        {
            title : "Yazar Adı",
            dataIndex : "firstname",
            key : "firstname",
            width : "50%",
            render : (text)=> (<strong>{text}</strong>)
         },
         {
            title : "Yazar soyadı",
            dataIndex : "lastname",
            key : "lastname",
            width : "50%",
            render : (text)=> (<strong>{text}</strong>)
         },
         {
            title : "İşlemler",
            key : "actions",
            render : (_,record) => (
                <Space size="middle">
                    <Button color='cyan' variant="solid" onClick={() => {navigate(`/admin/authors/update/${record._id}`)}}>Güncelle</Button>
                    <Button color='danger' variant="solid" onClick={deleteAuthors}>Sil</Button>
                </Space>
            )
        }
            

     ]
  return (
    <>
        <h2>Yazarlar</h2>    
        <Table columns={columns} dataSource={authorData} rowKey={(record) => record._id}/>
    </>
  )
}

export default AuthorList
