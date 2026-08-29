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
  );

  const keyFeatures = [
    {
      icon: "bi-flower1",
      title: "100% Natural & Organic",
      desc: "Directly sourced from certified organic orchards with zero chemical additives or preservatives.",
    },
    {
      icon: "bi-shield-check",
      title: "Handpicked Premium Grade",
      desc: "Each nut is carefully graded, sorted, and vacuum-sealed to preserve natural aroma and crunch.",
    },
    {
      icon: "bi-heart-pulse-fill",
      title: "Nutrient Rich Powerhouses",
      desc: "Packed with plant proteins, heart-healthy antioxidants, essential dietary fibers, and minerals.",
    },
    {
      icon: "bi-truck",
      title: "Express Air Delivery",
      desc: "Fresh harvests delivered to your doorstep within 48-72 hours in moisture-lock packaging.",
    },
  ];

  const nutritionHighlights = [
    {
      number: "100%",
      label: "Pure & Organic",
      icon: "bi-patch-check",
    },
    {
      number: "0g",
      label: "Added Sugar",
      icon: "bi-droplet-half",
    },
    {
      number: "25+",
      label: "Essential Nutrients",
      icon: "bi-stars",
    },
    {
      number: "50k+",
      label: "Happy Snacker Families",
      icon: "bi-emoji-smile",
    },
  ];

  return (
    <main className="nutridry-home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-shape-bg"></div>

        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 hero-text-col animate-fade-up">

              <div className="hero-tag-badge">
                <i className="bi bi-stars"></i>{" "}
                Handpicked Harvest • 100% Raw & Roasted
              </div>

              {/* React Bits Style SplitText */}
              <SplitText
                text="Healthy Goodness, Naturally Delicious"
                className="hero-main-title"
                delay={45}
                duration={1.1}
                from={{ opacity: 0, y: 45 }}
                to={{ opacity: 1, y: 0 }}
              />

              <p className="hero-description">
                Elevate your daily snacking with nature’s finest dry fruits,
                crunchiest nuts, and gourmet seed mixes. Hand-selected for
                unmatched freshness, superior crunch, and pure holistic
                wellness.
              </p>

              <div className="hero-cta-group d-flex flex-wrap align-items-center gap-3">

                <Link
                  to="/products"
                  className="btn-nutri-primary hero-btn-main"
                >
                  <span>Shop Now</span>
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>

                <a
                  href="#popular"
                  className="btn-nutri-secondary hero-btn-sub"
                >
                  <span>Explore Bestsellers</span>
                  <i className="bi bi-chevron-down"></i>
                </a>

              </div>

              {/* QUICK STATS */}
              <div className="hero-stats-strip row g-3 mt-4 pt-3 border-top">

                {nutritionHighlights.slice(0, 3).map((stat, idx) => (
                  <div key={idx} className="col-4">
                    <div className="stat-box">
                      <h4 className="stat-number">{stat.number}</h4>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT HERO IMAGE */}
            <div className="col-lg-6 hero-visual-col">

              <div className="hero-image-wrapper animate-fade-in">

                <div className="hero-main-card">

                  <img
                    src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80"
                    alt="NutriDry Premium Assorted Dry Fruits"
                    className="hero-img img-fluid"
                  />

                  <div className="hero-card-overlay">

                    <span className="overlay-badge">
                      <i className="bi bi-check2-circle me-1"></i>
                      Harvest 2026 Fresh
                    </span>

                    <h3 className="overlay-title">
                      Artisan Nut Assortment
                    </h3>

                    <p className="overlay-sub">
                      Almonds • Cashews • Pistachios • Walnuts
                    </p>

                  </div>
                </div>

                {/* FLOATING BADGE 1 */}
                <div className="floating-badge badge-top-left animate-float">

                  <div className="badge-icon green-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <span className="badge-title">
                      100% Organic
                    </span>

                    <span className="badge-subtitle">
                      Zero Preservatives
                    </span>
                  </div>

                </div>

                {/* FLOATING BADGE 2 */}
                <div
                  className="floating-badge badge-bottom-right animate-float"
                  style={{ animationDelay: "1.5s" }}
                >

                  <div className="badge-icon amber-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>

                  <div>
                    <span className="badge-title">
                      High Energy
                    </span>

                    <span className="badge-subtitle">
                      Plant Protein & Omega-3
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="features-section py-5">

        <div className="container">

          <div className="row g-4">

            {keyFeatures.map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-lg-3"
              >

                <div className="feature-card h-100">

                  <div className="feature-icon-wrapper">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h4 className="feature-title">
                    {item.title}
                  </h4>

                  <p className="feature-desc">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* POPULAR DRY FRUITS */}
      <section
        className="popular-section py-5"
        id="popular"
      >

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              <i className="bi bi-fire"></i>{" "}
              Most Loved Superfoods
            </span>

            <h2 className="section-title">
              Popular Dry Fruits
            </h2>

            <p className="section-subtitle">
              Indulge in our classic, customer-favorite nuts packed
              with essential nutrients, buttery crunch, and wholesome
              natural taste.
            </p>

          </div>

          <div className="row g-4">

            {popularDryFruits.map((product) => (

              <div
                key={product.id}
                className="col-12 col-sm-6 col-lg-3"
              >

                <div className="product-card-popular h-100">

                  <div className="card-top-badges">

                    <span className={`badge-${product.badgeType}`}>
                      {product.badge}
                    </span>

                    <span className="badge-discount">
                      {product.discount}
                    </span>

                  </div>

                  <div className="product-img-container">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-main-img"
                      loading="lazy"
                    />

                    <span className="product-origin-tag">
                      <i className="bi bi-geo-alt"></i>{" "}
                      {product.origin}
                    </span>

                  </div>

                  <div className="product-card-body">

                    <span className="product-category-text">
                      {product.category}
                    </span>

                    <h3 className="product-name-title">
                      {product.name}
                    </h3>

                    <div className="product-rating-box">

                      <div className="stars text-warning">

                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>

                      </div>

                      <span className="rating-num">
                        {product.rating}
                      </span>

                      <span className="reviews-num">
                        ({product.reviews})
                      </span>

                    </div>

                    <p className="product-short-desc">
                      {product.description}
                    </p>

                    <div className="product-benefits-pills">

                      {product.benefits
                        .slice(0, 2)
                        .map((benefit, i) => (

                          <span
                            key={i}
                            className="benefit-pill"
                          >
                            <i className="bi bi-check2"></i>{" "}
                            {benefit}
                          </span>

                        ))}

                    </div>

                    <div className="card-price-action d-flex align-items-center justify-content-between pt-3 border-top mt-3">

                      <div className="price-container">

                        <span className="current-price">
                          ${product.price.toFixed(2)}
                        </span>

                        <span className="old-price">
                          ${product.originalPrice.toFixed(2)}
                        </span>

                        <span className="price-unit">
                          / 250g
                        </span>

                      </div>

                      <button
                        type="button"
                        className="btn-add-cart"
                        onClick={() =>
                          addToCart(product, "250g")
                        }
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus-fill me-1"></i>
                        <span>Add</span>
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
              <span>
                Explore All {DRY_FRUITS_DATA.length}+ Dry Fruits
              </span>

              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="promo-banner-section my-5">

        <div className="container">

          <div className="promo-banner-card">

            <div className="row align-items-center g-4">

              <div className="col-lg-7">

                <span className="promo-deal-tag">
                  <i className="bi bi-gift-fill me-1"></i>
                  Festive & Wellness Special
                </span>

                <h2 className="promo-banner-title">
                  Boost Your Family’s Immunity With Our 7-in-1
                  Daily Vitality Pack
                </h2>

                <p className="promo-banner-desc">
                  Carefully balanced ratio of Almonds, Cashews,
                  Kashmiri Walnuts, Roasted Pistachios, Blueberries
                  & Seeds. Free gift box packaging on all combo orders!
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3 mt-4">

                  <Link
                    to="/products?category=Berries%20%26%20Mixes"
                    className="btn-nutri-amber"
                  >
                    <i className="bi bi-bag-check-fill me-1"></i>
                    Get Combo Deal — 20% Off
                  </Link>

                  <Link
                    to="/products"
                    className="btn-nutri-secondary btn-white-glass"
                  >
                    View Gift Hampers
                  </Link>

                </div>

              </div>

              <div className="col-lg-5 text-center">

                <div className="promo-img-wrapper">

                  <img
                    src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=700&q=80"
                    alt="NutriDry Gift Box"
                    className="promo-banner-img img-fluid"
                  />

                  <div className="promo-circle-badge animate-pulse">
                    <span>SAVE</span>
                    <strong>20%</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        className="about-section py-5"
        id="about"
      >

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-image-mosaic">

                <div className="mosaic-main">

                  <img
                    src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=700&q=80"
                    alt="NutriDry Almond Orchards"
                    className="img-fluid rounded-4 shadow-md"
                  />

                </div>

                <div className="mosaic-floating-card animate-float">

                  <i className="bi bi-award-fill text-warning"></i>

                  <div>

                    <strong>
                      100% Purity Certified
                    </strong>

                    <span>
                      Non-GMO • Gluten-Free
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="col-lg-6">

              <span className="section-tag">
                <i className="bi bi-info-circle-fill"></i>{" "}
                Our Story & Promise
              </span>

              <h2 className="section-title">
                Nourishing Lives With Pure, Sun-Drenched Nature
              </h2>

              <p className="about-lead">
                At <strong>NutriDry</strong>, we believe snacking
                should be both deeply satisfying and powerfully
                wholesome. We work directly with certified family
                orchards across Kashmir, California, and the
                Mediterranean.
              </p>

              <div className="about-points-list my-4">

                <div className="about-point d-flex gap-3 mb-3">

                  <div className="point-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>

                  <div>

                    <h5>Direct From Source</h5>

                    <p className="mb-0 text-muted">
                      Eliminating middlemen to guarantee farmers
                      fair prices and you get the freshest
                      current-season harvest.
                    </p>

                  </div>

                </div>

                <div className="about-point d-flex gap-3 mb-3">

                  <div className="point-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>

                  <div>

                    <h5>
                      Multi-Stage Nitrogen Flushing
                    </h5>

                    <p className="mb-0 text-muted">
                      Our airtight zip pouches and glass jars
                      lock in natural oils, aroma, and crispiness
                      without artificial gases.
                    </p>

                  </div>

                </div>

                <div className="about-point d-flex gap-3">

                  <div className="point-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>

                  <div>

                    <h5>
                      Eco-Friendly Packaging
                    </h5>

                    <p className="mb-0 text-muted">
                      100% recyclable containers and biodegradable
                      paper shipping cartons for a healthier planet.
                    </p>

                  </div>

                </div>

              </div>

              <Link
                to="/products"
                className="btn-nutri-primary mt-2"
              >
                <span>
                  Explore Our Full Catalog
                </span>

                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section py-5">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              <i className="bi bi-chat-heart-fill"></i>{" "}
              Verified Customer Love
            </span>

            <h2 className="section-title">
              What Our Snacking Family Says
            </h2>

            <p className="section-subtitle">
              Join thousands of health enthusiasts, chefs, and
              families who trust NutriDry for their daily nutrition.
            </p>

          </div>

          <div className="row g-4">

            {TESTIMONIALS_DATA.map((t) => (

              <div
                key={t.id}
                className="col-12 col-md-4"
              >

                <div className="testimonial-card h-100">

                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>

                  <div className="stars text-warning mb-3">

                    {[...Array(t.rating)].map((_, i) => (

                      <i
                        key={i}
                        className="bi bi-star-fill me-1"
                      ></i>

                    ))}

                  </div>

                  <p className="testimonial-comment">
                    "{t.comment}"
                  </p>

                  <div className="testimonial-author d-flex align-items-center gap-3 mt-4 pt-3 border-top">

                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="author-avatar"
                    />

                    <div>

                      <h4 className="author-name mb-0">
                        {t.name}
                      </h4>

                      <span className="author-role">
                        {t.role}
                      </span>

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