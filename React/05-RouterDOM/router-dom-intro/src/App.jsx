import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogsPage from './pages/BlogsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Products' element={<ProductsPage />} />
        <Route path='/Blogs' element={<BlogsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
