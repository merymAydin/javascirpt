import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  DashboardOutlined,
  FormOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Sider,Header,Footer,Content } = Layout

const AdminLayout = ({children}) => {

    const navigate = useNavigate();
    const items = [
        { key: '1', icon: <DashboardOutlined />, label: 'Dashboard', onClick : () => navigate("/admin")},
        { key: '2', icon: <AppstoreOutlined />, label: 'Kategori', children : [
            {key : "2-1", label: "Kategorileri listele", onClick : () => navigate("/admin/categories")},
            {key : "2-2", label: "Kategorileri ekle", onClick : () => navigate("/admin/categories/create")}
        ] },
        { key: '3', icon: <ShopOutlined />, label: 'Ürün', children : [
            {key : "3-1", label: "ürünleri listele" , onClick: () => navigate("/admin/products") },
            {key : "3-2", label: "ürün ekle"}
        ]},
        { key: '4', icon: <UserOutlined />, label: 'Kullanıcı' ,children :[
          {key : "4-1", label: "Kullanıcıları listele"},
          {key : "4-2" , label: "kullanıcı ekle"}
        ] },
        {key : "5",icon:<FormOutlined/>, label:"yazar",children:[
          {key : "4-1", label: "yazarları listele",onclick:()=> navigate("/admin/authors")},
          {key : "4-2" , label: "yazar ekle",onclick:()=> navigate("/admin/authors/create")}
        ]}
    ]

  return (
    <div className="admin-layout">
      <Layout style={{ height: "100vh" }}>
        <Sider width="20%" style={{ color: "#fff" }}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            items={items}
            style={{fontSize:"1.5rem"}}
          />
        </Sider>
        <Layout>
          <Header style={{ color: "#fff" }}>YMYP MERN STACK APP</Header>
          <Content style={{height:"80vh"}}>{children}</Content>
          <Footer style={{ backgroundColor: "#001529", color: "#fff" }}>
            Tüm hakları saklıdır
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
