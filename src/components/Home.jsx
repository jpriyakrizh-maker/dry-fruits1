import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    { icon: "🍼", title: "Baby Care", text: "Love & Care", className: "blue" },
    { icon: "🧩", title: "Educational", text: "Learn & Grow", className: "yellow" },
    { icon: "🏀", title: "Outdoor", text: "Play & Explore", className: "pink" },
    { icon: "📚", title: "Books", text: "Read & Imagine", className: "green" },
  ];

  const products = [
    { image: "🦁", name: "Musical Toy", price: "$16.00", old: "$20.00" },
    { image: "🧸", name: "Cute Teddy Bear", price: "$18.00", old: "$24.00" },
    { image: "🚗", name: "Remote Car", price: "$25.00", old: "$32.00" },
    { image: "🧩", name: "Learning Puzzle", price: "$14.00", old: "$19.00" },
  ];

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p>THE BEST</p>
          <h1>
            TOYS FOR YOUR
            <br />
            LITTLE ONES
          </h1>
          <span>Fun • Safe • Educational</span>

          <Link to="/shop" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">

        {categories.map((category) => (
          <Link
            to="/shop"
            className={`category-card ${category.className}`}
            key={category.title}
          >
            <div className="category-icon">{category.icon}</div>

            <div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </div>
          </Link>
        ))}

      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div className="section-title">
          <h2>New Arrivals</h2>

          <Link to="/shop">
            View All →
          </Link>
        </div>

        <div className="products">

          {products.map((product) => (
            <div className="product-card" key={product.name}>

              <span className="sale">SALE</span>

              <div className="product-img">
                {product.image}
              </div>

              <h3>{product.name}</h3>

              <div className="rating">
                ★★★★★ <span>(4.5)</span>
              </div>

              <div className="price">
                <del>{product.old}</del>
                <strong>{product.price}</strong>
              </div>

              <button>
                Add to Cart
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* OFFER BANNERS */}
      <section className="offers">

        <div className="offer soft-toys">
          <div>
            <p>Exclusive Offer</p>
            <h2>SOFT TOYS</h2>
            <span>Up to 40% Off</span>

            <Link to="/shop">
              Shop Now
            </Link>
          </div>

          <div className="offer-icon">🧸</div>
        </div>

        <div className="offer learning">
          <div>
            <p>Make Learning</p>
            <h2>FUN & EASY</h2>
            <span>Smart Toys for Smart Kids</span>

            <Link to="/shop">
              Shop Now
            </Link>
          </div>

          <div className="offer-icon">🧩</div>
        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div>
          <h3>✉️ Subscribe to Our Newsletter</h3>
          <p>Get updates about new toys and special offers.</p>
        </div>

        <div className="subscribe">
          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Subscribe
          </button>
        </div>
      </section>

    </main>
  );
}

export default Home;