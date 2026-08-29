import React from "react";
import "./CartToast.css";

function CartToast({ toastInfo, onClose }) {
  if (!toastInfo.show) return null;

  return (
    <div className="cart-toast-container animate-fade-in" role="alert">
      <div className="cart-toast-card">
        <div className="cart-toast-icon">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <div className="cart-toast-body">
          <p className="cart-toast-title">Added to Cart!</p>
          <p className="cart-toast-name">
            <strong>{toastInfo.productName || "Item"}</strong> ({toastInfo.weight || "250g"})
          </p>
        </div>
        <button
          type="button"
          className="cart-toast-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    </div>
  );
}

export default CartToast;
