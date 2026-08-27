import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const location = useLocation();

  const products = [
    {
      icon: "🧸",
      name: "Cute Teddy Bear",
      category: "Soft Toys",
      price: "$18.00",
      old: "$24.00",
    },
    {
      icon: "🚗",
      name: "Remote Control Car",
      category: "Outdoor",
      price: "$25.00",
      old: "$32.00",
    },
    {
      icon: "🧩",
      name: "Learning Puzzle",
      category: "Educational",
      price: "$14.00",
      old: "$19.00",
    },
    {
      icon: "🦁",
      name: "Musical Lion",
      category: "Baby Care",
      price: "$16.00",
      old: "$20.00",
    },
    {
      icon: "🎨",
      name: "Color Drawing Set",
      category: "Educational",
      price: "$12.00",
      old: "$16.00",
    },
    {
      icon: "🏀",
      name: "Kids Basketball",
      category: "Outdoor",
      price: "$20.00",
      old: "$27.00",
    },
    {
      icon: "🚂",
      name: "Toy Train",
      category: "Kids Toys",
      price: "$22.00",
      old: "$29.00",
    },
    {
      icon: "📚",
      name: "Kids Story Book",
      category: "Books",
      price: "$10.00",
      old: "$14.00",
    },
  ];

  const [sort, setSort] = useState("default");

  const categoryName = new URLSearchParams(location.search).get("category");

  let filteredProducts = categoryName
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === categoryName.toLowerCase()
      )
    : products;

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
    );
  }

  return (
    <main className="shop-page">

      {/* HEADER */}
      <section className="shop-header">
        <p>DISCOVER OUR COLLECTION</p>

        <h1>
          {categoryName ? categoryName : "Shop All Toys"}
        </h1>

        <span>
          Fun, safe and exciting toys for little ones
        </span>
      </section>

      {/* SHOP CONTENT */}
      <section className="shop-content">

        <div className="shop-top">
          <h2>
            {categoryName ? `${categoryName} Toys` : "All Toys"}
          </h2>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="shop-products">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="shop-product-card"
                key={product.name}
              >

                <span className="shop-sale">
                  SALE
                </span>

                <div className="shop-product-img">
                  {product.icon}
                </div>

                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="shop-rating">
                  ★★★★★ <span>(4.5)</span>
                </div>

                <div className="shop-price">
                  <del>{product.old}</del>
                  <strong>{product.price}</strong>
                </div>

                <button>
                  Add to Cart
                </button>

              </div>
            ))
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try another category.</p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Shop;