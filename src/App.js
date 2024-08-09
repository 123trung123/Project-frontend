import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.css";
import ProductPage from "./pages/productpage/ProductPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import CartPage from "./pages/CartPage/CartPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import SearchResults from "./components/SearchResult";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <BreadcrumbsComponent /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/products/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/payment" element={<PaymentPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
