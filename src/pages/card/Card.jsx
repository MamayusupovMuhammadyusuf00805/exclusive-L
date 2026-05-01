import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="cart-container">
      <nav className="breadcrumb">
        Home / <span className="current-page">Cart</span>
      </nav>
      <div className="cart-table">
        <div className="cart-header">
          <div className="col-product">Product</div>
          <div className="col-price">Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-subtotal">Subtotal</div>
        </div>
        <div className="cart-item">
          <div className="col-product item-info">
            <div className="remove-icon">×</div>
            <img
              src="public/imgs/Monitor-Cart-Small(1).png"
              alt="LCD Monitor"
              className="item-img"
            />
            <span>LCD Monitor</span>
          </div>
          <div className="col-price">$650</div>
          <div className="col-quantity">
            <div className="quantity-input">
              <span>01</span>
              <div className="arrows">
                <div className="arrow-up"></div>
                <div className="arrow-down"></div>
              </div>
            </div>
          </div>
          <div className="col-subtotal">$650</div>
        </div>
        <div className="cart-item">
          <div className="col-product item-info">
            <div className="remove-icon">×</div>
            <img
              src="public/imgs/Gamepad-Cart-Small(1).png"
              alt="H1 Gamepad"
              className="item-img"
            />
            <span>H1 Gamepad</span>
          </div>
          <div className="col-price">$550</div>
          <div className="col-quantity">
            <div className="quantity-input">
              <span>02</span>
              <div className="arrows">
                <div className="arrow-up"></div>
                <div className="arrow-down"></div>
              </div>
            </div>
          </div>
          <div className="col-subtotal">$1100</div>
        </div>
      </div>
      <div className="action-buttons">
        <button className="btn-secondary">Return To Shop</button>
        <button className="btn-secondary">Update Cart</button>
      </div>
      <div className="cart-footer">
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Coupon Code"
            className="coupon-input"
          />
          <button className="btn-primary">Apply Coupon</button>
        </div>

        <div className="total-card">
          <h3>Cart Total</h3>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="total-row final-total">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="btn-primary full-width">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
