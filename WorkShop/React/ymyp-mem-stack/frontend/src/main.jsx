import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminLayout from './Layouts/AdminLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AdminLayout>
    <App />
    </AdminLayout>
    </BrowserRouter>
  </StrictMode>,
)