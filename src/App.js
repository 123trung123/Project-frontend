import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.css";
import ProductPage from "./pages/productpage/ProductPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import CartPage from "./pages/CartPage/CartPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import SearchResults from "./components/SearchResult";
import AboutUsPage from "./pages/AboutUsPages/AboutUsPage";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/products/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/reviews" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
