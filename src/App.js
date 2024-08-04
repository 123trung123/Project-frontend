import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.css";
import Detail from "./components/product/Detail";
// import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import ProductPage from "./pages/productpage/ProductPage";
import ContactPage from "./pages/ContactPage/ContactPage";
export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<ProductPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/contact/" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
