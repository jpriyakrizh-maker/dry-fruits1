import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import CartToast from "./components/CartToast";

import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  const [toastInfo, setToastInfo] = useState({
    show: false,
    productName: "",
    weight: "",
  });

  const addToCart = (product, weight = "250g") => {
    setCartCount((count) => count + 1);

    setToastInfo({
      show: true,
      productName: product?.name || "Dry Fruit Pack",
      weight,
    });

    setTimeout(() => {
      setToastInfo((prev) => ({
        ...prev,
        show: false,
      }));
    }, 3500);
  };

  const closeToast = () => {
    setToastInfo((prev) => ({
      ...prev,
      show: false,
    }));
  };

  return (
    <BrowserRouter basename="/dry-fruits1">
      <ScrollToTop />

      <div className="app-container">
        <Navbar cartCount={cartCount} />

        <CartToast
          toastInfo={toastInfo}
          onClose={closeToast}
        />

        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />

          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />

          <Route
            path="/shop"
            element={<Navigate to="/products" replace />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;