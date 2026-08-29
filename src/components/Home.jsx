
import React from "react";
import { Link } from "react-router-dom";
import {
  DRY_FRUITS_DATA,
  TESTIMONIALS_DATA,
} from "../data/productsData";
import Footer from "./Footer";
import SplitText from "./SplitText";
import "./Home.css";

function Home({ addToCart }) {
  const popularDryFruits = DRY_FRUITS_DATA.filter(
    (item) =>
      ["Almonds", "Cashews", "Pistachios", "Walnuts"].includes(
        item.category
      ) && item.isPopular
  ).slice(0, 4);

  const features = [
    {
      icon: "bi-flower1",
      title: "100% Natural",
      text: "Pure dry fruits with no unnecessary additives.",
    },
    {
      icon: "bi-shield-check",
      title: "Premium Quality",
      text: "Carefully selected and packed for freshness.",
    },
    {
      icon: "bi-heart-pulse-fill",
      title: "Healthy Choice",
      text: "Naturally rich in essential nutrients.",
    },
    {
      icon: "bi-truck",
      title: "Fast Delivery",
      text: "Fresh products delivered safely to your doorstep.",
    },
  ];

  return (
    <main className="nutridry-home">

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6 hero-text-col">
              <span className="hero-tag-badge">
                <i className="bi bi-stars"></i>
                Premium • Fresh • Healthy
              </span>

              <SplitText
                text="Healthy Goodness, Naturally Delicious"
                className="hero-main-title"
                delay={45}
                duration={1}
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />

              <p className="hero-description">
                Discover premium dry fruits, crunchy nuts and healthy
                snack mixes selected with care for your everyday
                nutrition.
              </p>

              <div className="hero-cta-group">
                <Link
                  to="/products"
                  className="btn-nutri-primary hero-btn-main"
                >
                  Shop Now
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>

                <a
                  href="#popular"
                  className="btn-nutri-secondary hero-btn-sub"
                >
                  Explore Products
                  <i className="bi bi-chevron-down"></i>
                </a>
              </div>

              <div className="hero-stats-strip">
                <div>
                  <strong>100%</strong>
                  <span>Natural</span>
                </div>

                <div>
                  <strong>25+</strong>
                  <span>Products</span>
                </div>

                <div>
                  <strong>50K+</strong>
                  <span>Customers</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 hero-visual-col">
              <div className="hero-image-wrapper">

                <div className="hero-main-card">
                  <img
                    src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=1000&q=85"
                    alt="Premium Dry Fruits"
                    className="hero-img"
                  />

                  <div className="hero-card-overlay">
                    <span>
                      <i className="bi bi-check-circle-fill"></i>
                      Freshly Packed
                    </span>

                    <h3>Premium Dry Fruits</h3>

                    <p>
                      Almonds • Cashews • Pistachios • Walnuts
                    </p>
                  </div>
                </div>

                <div className="floating-badge badge-top-left">
                  <div className="badge-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <strong>Quality Assured</strong>
                    <small>Premium Grade</small>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-right">
                  <div className="badge-icon">
                    <i className="bi bi-heart-fill"></i>
                  </div>

                  <div>
                    <strong>Healthy Choice</strong>
                    <small>Rich in nutrients</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={index}
              >
                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section
        className="popular-section"
        id="popular"
      >
        <div className="container">

          <div className="section-header">
            <span className="section-tag">
              <i className="bi bi-fire"></i>
              Customer Favorites
            </span>

            <h2 className="section-title">
              Popular Dry Fruits
            </h2>

            <p className="section-subtitle">
              Our most loved dry fruits, carefully selected for
              freshness, taste and quality.
            </p>
          </div>

          <div className="row g-4">
            {popularDryFruits.map((product) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={product.id}
              >
                <div className="product-card-popular">

                  <div className="product-img-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-main-img"
                    />

                    {product.badge && (
                      <span className="product-badge">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="product-card-body">

                    <span className="product-category-text">
                      {product.category}
                    </span>

                    <h3 className="product-name-title">
                      {product.name}
                    </h3>

                    <div className="product-rating-box">
                      <span className="stars">
                        ★★★★★
                      </span>

                      <span>
                        {product.rating}
                      </span>

                      <small>
                        ({product.reviews})
                      </small>
                    </div>

                    <p className="product-short-desc">
                      {product.description}
                    </p>

                    <div className="card-price-action">
                      <div className="price-container">
                        <strong>
                          ${product.price.toFixed(2)}
                        </strong>

                        {product.originalPrice && (
                          <del>
                            ${product.originalPrice.toFixed(2)}
                          </del>
                        )}

                        <small>/ 250g</small>
                      </div>

                      <button
                        type="button"
                        className="btn-add-cart"
                        onClick={() =>
                          addToCart(product, "250g")
                        }
                      >
                        <i className="bi bi-cart-plus-fill"></i>
                        Add
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/products"
              className="btn-nutri-secondary btn-view-all"
            >
              View All Products
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* PROMO */}
      <section className="promo-banner-section">
        <div className="container">
          <div className="promo-banner-card">

            <div className="row align-items-center g-4">

              <div className="col-lg-7">
                <span className="promo-deal-tag">
                  <i className="bi bi-gift-fill"></i>
                  Special Combo
                </span>

                <h2 className="promo-banner-title">
                  Make Every Snack Healthy & Delicious
                </h2>

                <p className="promo-banner-desc">
                  Enjoy a tasty combination of premium almonds,
                  cashews, pistachios and walnuts. Perfect for
                  everyday snacking and gifting.
                </p>

                <Link
                  to="/products"
                  className="btn-nutri-primary"
                >
                  Shop Combo
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              <div className="col-lg-5">
                <div className="promo-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=85"
                    alt="Dry Fruit Gift Pack"
                    className="promo-banner-img"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about-section"
        id="about"
      >
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85"
                  alt="Premium Dry Fruits"
                  className="about-main-image"
                />

                <div className="about-floating-card">
                  <i className="bi bi-award-fill"></i>

                  <div>
                    <strong>Trusted Quality</strong>
                    <span>Fresh & carefully packed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-tag">
                <i className="bi bi-info-circle-fill"></i>
                About NutriDry
              </span>

              <h2 className="section-title">
                Naturally Good. Simply Healthy.
              </h2>

              <p className="about-lead">
                We bring you premium dry fruits that combine
                delicious taste with everyday nutrition.
              </p>

              <div className="about-points-list">

                <div className="about-point">
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <h4>Carefully Selected</h4>
                    <p>
                      Every product is selected for quality,
                      freshness and natural taste.
                    </p>
                  </div>
                </div>

                <div className="about-point">
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <h4>Fresh Packaging</h4>
                    <p>
                      Products are packed carefully to preserve
                      their natural crunch and flavor.
                    </p>
                  </div>
                </div>

                <div className="about-point">
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <h4>Healthy Snacking</h4>
                    <p>
                      A simple and tasty choice for your daily
                      snack routine.
                    </p>
                  </div>
                </div>

              </div>

              <Link
                to="/products"
                className="btn-nutri-primary"
              >
                Explore Products
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">
              <i className="bi bi-chat-heart-fill"></i>
              Customer Reviews
            </span>

            <h2 className="section-title">
              What Our Customers Say
            </h2>

            <p className="section-subtitle">
              Fresh products, great taste and happy customers.
            </p>
          </div>

          <div className="row g-4">
            {TESTIMONIALS_DATA.slice(0, 3).map((testimonial) => (
              <div
                className="col-12 col-md-4"
                key={testimonial.id}
              >
                <div className="testimonial-card">

                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>

                  <div className="stars mb-3">
                    {"★★★★★"}
                  </div>

                  <p className="testimonial-comment">
                    "{testimonial.comment}"
                  </p>

                  <div className="testimonial-author">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />

                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}

export default Home;
