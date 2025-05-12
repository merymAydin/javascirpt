import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DashBoard from './pages/AdminPages/DashBoard'
import CategoryList from './pages/AdminPages/Category/CategoryList'
import AdminLayout from './Layouts/AdminLayout'

function App() {
  //localhost::5173/admin/categories
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/admin/'>
          <Route index element={<DashBoard/>} />
          <Route path='categories' element={<CategoryList/>} /> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
