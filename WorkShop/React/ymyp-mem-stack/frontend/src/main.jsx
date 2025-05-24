import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import { CategoryProvider } from "./contexts/CategoryProvider.jsx";
import { ProductProvider } from "./contexts/ProductProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <AdminLayout>
            <App />
          </AdminLayout>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
