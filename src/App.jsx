import React from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { CartProvider } from "../src/context/CartContext";
import { FilterProvider } from "../src/context/FilterProductContext";
import ProductPage from "./pages/ProductPage";
import { SearchProvider } from "./context/SearchContext";
import FilterItems from "./components/FilterItems";

const App = () => {
  return (
    <FilterProvider>
      <CartProvider>
        <SearchProvider>
          <Navbar />
          <FilterItems />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
          </Routes>
        </SearchProvider>
      </CartProvider>
    </FilterProvider>
  );
};

export default App;
