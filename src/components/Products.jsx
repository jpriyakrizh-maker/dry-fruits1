import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { DRY_FRUITS_DATA, CATEGORIES_LIST } from "../data/productsData";
import Footer from "./Footer";
import "./Products.css";

function Products({ addToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedWeights, setSelectedWeights] = useState({});

  const handleCategoryChange = (catId) => {
    if (catId === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleWeightChange = (productId, weight) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };

  const getProductPrice = (basePrice, weight) => {
    if (weight === "500g") return (basePrice * 1.9).toFixed(2);
    if (weight === "1kg" || weight === "1kg Set") {
      return (basePrice * 3.6).toFixed(2);
    }
    if (weight === "2kg Set") return (basePrice * 7.0).toFixed(2);
    return basePrice.toFixed(2);
  };

  const getProductOriginalPrice = (baseOriginalPrice, weight) => {
    if (weight === "500g") return (baseOriginalPrice * 1.9).toFixed(2);
    if (weight === "1kg" || weight === "1kg Set") {
      return (baseOriginalPrice * 3.6).toFixed(2);
    }
    if (weight === "2kg Set") {
      return (baseOriginalPrice * 7.0).toFixed(2);
    }
    return baseOriginalPrice.toFixed(2);
  };

  const filteredProducts = useMemo(() => {
    let result = [...DRY_FRUITS_DATA];

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter(
        (item) =>
          item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();

      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.origin.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popular") {
      result.sort(
        (a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
      );
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="nutridry-products-page">

      {/* Page Header */}
      <section className="products-hero-banner">
        <div className="container text-center">

          <span className="products-banner-tag animate-fade-in">
            <i className="bi bi-patch-check-fill me-1"></i>
            100% Farm Fresh Guarantee
          </span>

          <h1 className="products-banner-title animate-fade-up">
            Premium Dry Fruits & Nuts
          </h1>

          <p className="products-banner-desc animate-fade-up">
            Explore our artisanal collection of handpicked almonds, creamy
            cashews, crisp pistachios, rich walnuts, and organic superfood
            mixes.
          </p>

          <nav className="products-breadcrumb d-flex justify-content-center align-items-center gap-2">
            <span>Home</span>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Products</span>

            {selectedCategory !== "all" && (
              <>
                <i className="bi bi-chevron-right"></i>
                <span className="active-cat-crumb">
                  {selectedCategory}
                </span>
              </>
            )}
          </nav>

        </div>
      </section>

      {/* Products Section */}
      <section className="products-content-section py-5">
        <div className="container">

          {/* Filter Panel */}
          <div className="catalog-control-panel mb-4 p-4 rounded-4 shadow-sm">

            <div className="row g-3 align-items-center">

              {/* Search */}
              <div className="col-12 col-md-6 col-lg-5">
                <div className="search-box-wrapper position-relative">

                  <i className="bi bi-search search-icon"></i>

                  <input
                    type="text"
                    className="form-control catalog-search-input"
                    placeholder="Search almonds, cashews, walnuts, berries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      className="btn-clear-search"
                      onClick={() => setSearchQuery("")}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  )}

                </div>
              </div>

              {/* Product Counter */}
              <div className="col-6 col-md-3 col-lg-3">
                <div className="results-count-badge">
                  <i className="bi bi-boxes me-1"></i>
                  Showing <strong>{filteredProducts.length}</strong> items
                </div>
              </div>

              {/* Sort */}
              <div className="col-6 col-md-3 col-lg-4 d-flex justify-content-end">
                <div className="sort-dropdown-box d-flex align-items-center gap-2">

                  <label
                    htmlFor="sortSelect"
                    className="sort-label d-none d-sm-inline"
                  >
                    Sort:
                  </label>

                  <select
                    id="sortSelect"
                    className="form-select sort-select-input"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">
                      Featured / Best Match
                    </option>
                    <option value="popular">
                      Most Popular
                    </option>
                    <option value="price-low">
                      Price: Low to High
                    </option>
                    <option value="price-high">
                      Price: High to Low
                    </option>
                    <option value="rating">
                      Highest Rated
                    </option>
                  </select>

                </div>
              </div>

            </div>

            {/* Category Pills */}
            <div className="category-pills-row mt-3 pt-3 border-top d-flex flex-wrap gap-2">

              {CATEGORIES_LIST.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill-btn ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <i className={`bi ${cat.icon} me-1`}></i>
                  {cat.name}
                </button>
              ))}

            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (

            <div className="row g-4">

              {filteredProducts.map((product) => {

                const currentWeight =
                  selectedWeights[product.id] ||
                  product.weightOptions[0];

                const activePrice = getProductPrice(
                  product.price,
                  currentWeight
                );

                const activeOriginalPrice =
                  getProductOriginalPrice(
                    product.originalPrice,
                    currentWeight
                  );

                return (
                  <div
                    key={product.id}
                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  >

                    <div className="nutri-product-card h-100">

                      {/* Badges */}
                      <div className="card-top-badges">

                        <span className={`badge-${product.badgeType}`}>
                          {product.badge}
                        </span>

                        <span className="badge-discount">
                          {product.discount}
                        </span>

                      </div>

                      {/* Image */}
                      <div className="product-card-img-box">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-img-main"
                          loading="lazy"
                        />

                        <div className="product-origin-badge">
                          <i className="bi bi-geo-alt-fill text-warning me-1"></i>
                          {product.origin}
                        </div>

                      </div>

                      {/* Card Body */}
                      <div className="product-card-info p-3 d-flex flex-column flex-1">

                        <div className="d-flex justify-content-between align-items-center mb-1">

                          <span className="product-cat-tag">
                            {product.category}
                          </span>

                          <div className="rating-pill d-flex align-items-center gap-1">
                            <i className="bi bi-star-fill text-warning"></i>
                            <strong>{product.rating}</strong>
                            <span className="text-muted">
                              ({product.reviews})
                            </span>
                          </div>

                        </div>

                        <h3 className="product-title-heading">
                          {product.name}
                        </h3>

                        <p className="product-description-text">
                          {product.description}
                        </p>

                        {/* Weight */}
                        <div className="weight-selection-box mb-3">

                          <span className="weight-label">
                            Select Pack:
                          </span>

                          <div className="weight-options d-flex gap-1 mt-1">

                            {product.weightOptions.map((weight) => (
                              <button
                                key={weight}
                                type="button"
                                className={`btn-weight-pill ${
                                  currentWeight === weight ? "active" : ""
                                }`}
                                onClick={() =>
                                  handleWeightChange(
                                    product.id,
                                    weight
                                  )
                                }
                              >
                                {weight}
                              </button>
                            ))}

                          </div>

                        </div>

                        {/* Benefits */}
                        <div className="benefits-tags-box d-flex flex-wrap gap-1 mb-3">

                          {product.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="health-tag"
                            >
                              <i className="bi bi-check2 text-success me-1"></i>
                              {benefit}
                            </span>
                          ))}

                        </div>

                        {/* Price & Cart */}
                        <div className="card-action-footer d-flex align-items-center justify-content-between pt-3 border-top mt-auto">

                          <div className="price-stack">

                            <div className="d-flex align-items-baseline gap-2">

                              <span className="active-price">
                                ${activePrice}
                              </span>

                              <span className="active-old-price">
                                ${activeOriginalPrice}
                              </span>

                            </div>

                            <span className="price-weight-sub">
                              Pack of {currentWeight}
                            </span>

                          </div>

                          <button
                            type="button"
                            className="btn-add-to-cart-action"
                            onClick={() =>
                              addToCart(product, currentWeight)
                            }
                          >
                            <i className="bi bi-cart-plus-fill me-1"></i>
                            Add to Cart
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          ) : (

            /* No Products */
            <div className="no-products-found-card text-center py-5">

              <div className="empty-icon-box mb-3">
                <i className="bi bi-search text-muted"></i>
              </div>

              <h3 className="empty-title">
                No Dry Fruits Found
              </h3>

              <p className="empty-subtitle text-muted">
                We couldn't find any products matching{" "}
                <strong>"{searchQuery}"</strong> in{" "}
                <strong>{selectedCategory}</strong>.
              </p>

              <button
                type="button"
                className="btn-nutri-primary mt-3"
                onClick={() => {
                  setSearchQuery("");
                  searchParams.delete("category");
                  setSearchParams(searchParams);
                }}
              >
                <i className="bi bi-arrow-repeat me-2"></i>
                Reset All Filters
              </button>

            </div>

          )}

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}

export default Products;
