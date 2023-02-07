import { useState } from "react";
import "./App.css";
import Header from "./layout/header";
import CustomersPage from "./pages/customers";
import OrdersPage from "./pages/orders";
import ProductsPage from "./pages/products";
import SuppliersPage from "./pages/suppliers";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suppliers-page" element={<SuppliersPage />} />
        <Route path="/orders-page" element={<OrdersPage />} />
        <Route path="/customers-page" element={<CustomersPage />} />
        <Route path="/products-page" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
