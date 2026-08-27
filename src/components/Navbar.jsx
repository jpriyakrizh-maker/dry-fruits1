import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        🧸 <span>Kids</span> Market
      </Link>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          TOYS
        </Link>

        <Link
          to="/shop?category=Baby%20Care"
          onClick={closeMenu}
        >
          BABY CARE
        </Link>

        <Link
          to="/shop?category=Educational"
          onClick={closeMenu}
        >
          EDUCATIONAL
        </Link>

        <Link
          to="/shop?category=Outdoor"
          onClick={closeMenu}
        >
          OUTDOOR
        </Link>

        <Link
          to="/shop?category=Books"
          onClick={closeMenu}
        >
          BOOKS
        </Link>

      </div>

      <div className="nav-icons">
        🔍 &nbsp; ♡ &nbsp;

        <span className="cart-icon">
          🛒

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </span>
      </div>

    </nav>
  );
}

export default Navbar;