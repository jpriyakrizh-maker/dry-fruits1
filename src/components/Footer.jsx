
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-top-wave"></div>

      <div className="container footer-content py-5">
        <div className="row g-4 mb-5">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-brand">

              <Link
                to="/"
                className="d-flex align-items-center gap-2 mb-3 text-decoration-none"
              >
                <div className="logo-icon-wrapper-footer">
                  <i className="bi bi-tree-fill"></i>
                </div>

                <div className="brand-text-block">
                  <span className="footer-brand-name">
                    Nutri<span>Dry</span>
                  </span>

                  <span className="footer-brand-tag">
                    Pure & Wholesome
                  </span>
                </div>
              </Link>

              <p className="footer-desc">
                NutriDry is your trusted source for 100% natural,
                farm-fresh, and handpicked premium dry fruits, nuts,
                berries, and healthy snack packs.
              </p>

              <div className="trust-badges d-flex align-items-center gap-2 mt-3 flex-wrap">
                <span className="trust-pill">
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  100% Natural
                </span>

                <span className="trust-pill">
                  <i className="bi bi-shield-lock-fill text-warning me-1"></i>
                  Secure Checkout
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Quick Links</h5>

            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <i className="bi bi-chevron-right"></i> Home
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <i className="bi bi-chevron-right"></i> All Products
                </Link>
              </li>

              <li>
                <Link to="/products?category=Almonds">
                  <i className="bi bi-chevron-right"></i> Almonds
                </Link>
              </li>

              <li>
                <Link to="/products?category=Cashews">
                  <i className="bi bi-chevron-right"></i> Cashews
                </Link>
              </li>

              <li>
                <Link to="/products?category=Pistachios">
                  <i className="bi bi-chevron-right"></i> Pistachios
                </Link>
              </li>

              <li>
                <Link to="/products?category=Walnuts">
                  <i className="bi bi-chevron-right"></i> Walnuts
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Info */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Help & Info</h5>

            <ul className="footer-links-list">
              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i> About Us
                </a>
              </li>

              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i> Contact Us
                </a>
              </li>

              <li>
                <Link to="/products">
                  <i className="bi bi-chevron-right"></i> Shipping
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <i className="bi bi-chevron-right"></i> Quality Guarantee
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <i className="bi bi-chevron-right"></i> FAQs
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <i className="bi bi-chevron-right"></i> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="col-12 col-md-12 col-lg-4" id="contact">

            <h5 className="footer-heading">
              Stay Healthy & Save 15%
            </h5>

            <p className="footer-newsletter-text">
              Subscribe to get fresh harvest updates, nutrition tips,
              healthy snack ideas, and special discounts.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="newsletter-form-footer mb-4"
            >
              <div className="input-group">

                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  className="btn btn-newsletter-submit"
                  type="submit"
                >
                  <i className="bi bi-send-fill me-1"></i>
                  Subscribe
                </button>

              </div>

              {subscribed && (
                <div className="subscribe-success-msg mt-2">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  Thank you! Your 15% discount is ready.
                </div>
              )}
            </form>

            {/* Indian Contact Details */}
            <div className="footer-contact-details">

              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  24, Green Garden Road, Coimbatore,
                  Tamil Nadu - 641001, India
                </span>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>
                  care@nutridry.in
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom pt-4 border-top border-secondary-subtle d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

          <p className="copyright-text mb-0">
            © {new Date().getFullYear()}{" "}
            <strong>NutriDry India.</strong>{" "}
            All rights reserved. Healthy Goodness, Naturally Delicious.
          </p>

          {/* Social Icons */}
          <div className="social-icons-wrapper d-flex align-items-center gap-2">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

