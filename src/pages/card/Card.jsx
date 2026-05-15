import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Card.css";

function Card() {
  const navigate = useNavigate();
  const location = useLocation();
  const productInfo = location.state;

  const [quantity, setQuantity] = useState(1);
  const handleCheckout = () => {
    const orderDetails = {
      ...productInfo,
      selectedQuantity: quantity,
      finalPrice: subtotal,
    };

    navigate("/checkout", { state: orderDetails });
  };

  if (!productInfo) {
    return (
      <div className="empty-cart">
        <h2>Savatda mahsulot yo'q</h2>
        <button className="btn-outline" onClick={() => navigate("/")}>
          Return To Shop
        </button>
      </div>
    );
  }

  const subtotal = productInfo.price * quantity;

  return (
    <div className="cart-container">
      <nav className="breadcrumb">
        <span>Home</span> / <span className="current">Cart</span>
      </nav>

      <div className="cart-table-wrapper">
        {/* Header */}
        <div className="cart-header">
          <div className="col-product">Product</div>
          <div className="col-price">Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-subtotal">Subtotal</div>
        </div>

        <div className="cart-row">
          <div className="col-product item-info">
            <div className="img-wrapper">
              {/* Rasmdagi kabi qizil x tugmasi */}
              <button className="remove-btn" onClick={() => navigate(-1)}>
                &times;
              </button>
              <img src={productInfo.image} alt={productInfo.name} />
            </div>
            <span className="product-name">{productInfo.name}</span>
          </div>

          <div className="col-price">${productInfo.price}</div>

          <div className="col-quantity">
            <input
              type="number"
              min="1"
              value={quantity < 10 ? `0${quantity}` : quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />
          </div>

          <div className="col-subtotal">${subtotal}</div>
        </div>
      </div>

      <div className="cart-actions">
        <button className="btn-outline" onClick={() => navigate("/")}>
          Return To Shop
        </button>
        <button className="btn-outline">Update Cart</button>
      </div>
      <div className="cart-bottom">
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Coupon Code"
            className="coupon-input"
          />
          <button className="btn-red">Apply Coupon</button>
        </div>
        <div className="cart-total-box">
          <h3>Cart Total</h3>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <hr />
          <div className="total-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="total-row final-total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <div className="checkout-btn-wrapper">
            <button className="btn-red process-btn" onClick={handleCheckout}>
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
