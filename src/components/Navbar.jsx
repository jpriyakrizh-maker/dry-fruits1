import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="navbar-wrapper">
      {/* Top announcement bar */}
      <div className="top-promo-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="promo-text">
            <span>🌿 100% Natural & Chemical-Free</span>
            <span className="d-none d-md-inline ms-3">🚚 Free Express Delivery on orders over $35</span>
          </div>
          <div className="promo-links d-none d-sm-flex align-items-center gap-3">
            <span><i className="bi bi-shield-check me-1"></i> FSSAI & USDA Organic</span>
            <span><i className="bi bi-telephone-fill me-1"></i> +1 (800) 555-NUTS</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand-logo" onClick={closeMenu}>
            <div className="logo-icon-wrapper">
              <i className="bi bi-tree-fill"></i>
            </div>
            <div className="brand-text-block">
              <span className="brand-name">Nutri<span>Dry</span></span>
              <span className="brand-tagline">Pure & Wholesome</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className={`nav-menu-links ${menuOpen ? "open" : ""}`}>
            <Link
              to="/"
              className={`nav-link-item ${location.pathname === "/" && !location.hash ? "active" : ""}`}
              onClick={closeMenu}
            >
              <i className="bi bi-house-door d-lg-none me-2"></i>
              Home
            </Link>

            <Link
              to="/products"
              className={`nav-link-item ${location.pathname === "/products" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <i className="bi bi-grid d-lg-none me-2"></i>
              Products
              <span className="nav-pill-badge">Fresh</span>
            </Link>

            <a
              href="#about"
              className={`nav-link-item ${location.hash === "#about" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("about");
              }}
            >
              <i className="bi bi-info-circle d-lg-none me-2"></i>
              About
            </a>

            <a
              href="#contact"
              className={`nav-link-item ${location.hash === "#contact" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("contact");
              }}
            >
              <i className="bi bi-envelope d-lg-none me-2"></i>
              Contact
            </a>

            {/* Mobile-only CTA */}
            <div className="d-lg-none mt-3 pt-3 border-top w-100 text-center">
              <Link to="/products" className="btn-nutri-primary w-100" onClick={closeMenu}>
                <i className="bi bi-bag-check-fill me-2"></i>
                Shop All Nuts
              </Link>
            </div>
          </div>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="navbar-actions d-flex align-items-center gap-3">
            <Link to="/products" className="nav-action-btn d-none d-sm-inline-flex" title="Search Dry Fruits">
              <i className="bi bi-search"></i>
            </Link>

            <Link to="/products" className="cart-action-btn" title="View Cart">
              <i className="bi bi-bag-heart-fill"></i>
              <span className="cart-badge-count animate-pulse">
                {cartCount}
              </span>
            </Link>

            <Link to="/products" className="btn-nutri-primary nav-shop-cta d-none d-lg-inline-flex">
              <span>Shop Now</span>
              <i className="bi bi-arrow-right"></i>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={`navbar-toggler-custom d-lg-none ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;