import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Dashboard from './pages/AdminPages/Dashboard'
import CategoryList from './pages/AdminPages/Category/CategoryList'
import UpdateCategory from "./pages/AdminPages/Category/UpdateCategory";
import CreateCategory from './pages/AdminPages/Category/CreateCategory'
import CreateAuthor from './pages/AdminPages/Author/CreateAuthor'
import ProductList from './pages/AdminPages/Product/ProductList'
import CreateProduct from './pages/AdminPages/Product/CreateProduct'


function App() {

  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin/'>
        <Route index element={<Dashboard />} />
        <Route path='categories' element={<CategoryList />} />
        <Route path='categories/update/:id' element={<UpdateCategory />} />
        <Route path='categories/create' element={<CreateCategory />} />
        <Route path='authors/create' element={<CreateAuthor/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='products/create' element={<CreateProduct/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App