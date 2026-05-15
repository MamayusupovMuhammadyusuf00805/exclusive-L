import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state;


  if (!orderData) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>Buyurtma ma'lumotlari topilmadi</h2>
        <button className="red-btn" onClick={() => navigate("/card")}>
          Savatga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="container">
        <p className="path">
          <a href="/account" className="path-link">Account</a> /
          <a href="/my-account" className="path-link">My Account</a> /
          <a href="/products" className="path-link">Product</a> /
          <a href="/card" className="path-link">View Cart</a> /
          <span>CheckOut</span>
        </p>

        <h1 className="title">Billing Details</h1>

        <div className="main">
          <div className="leftp">
            <div className="items">
              <label>First Name<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="items">
              <label>Company Name</label>
              <input type="text" />
            </div>
            <div className="items">
              <label>Street Address<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="items">
              <label>Apartment, floor, etc. (optional)</label>
              <input type="text" />
            </div>
            <div className="items">
              <label>Town/City<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="items">
              <label>Phone Number<span>*</span></label>
              <input type="tel" required />
            </div>
            <div className="items">
              <label>Email Address<span>*</span></label>
              <input type="email" required />
            </div>

            <div className="check">
              <input type="checkbox" id="save" />
              <label htmlFor="save">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="right">
            <div className="products">
              <div className="lines">
                <div className="info">
                  <img src={orderData.image} alt={orderData.name} style={{width: "50px", height: "50px", objectFit: "contain"}} />
                  <p>{orderData.name}</p>
                </div>
                <p>${orderData.price} x {orderData.selectedQuantity}</p>
              </div>
            </div>
            <div className="total">
              <div className="line">
                <p>Subtotal:</p>
                <p>${orderData.finalPrice}</p>
              </div>
              <hr />
              <div className="line">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="line bold">
                <p>Total:</p>
                <p>${orderData.finalPrice}</p>
              </div>
            </div>

            <div className="pay">
              <div className="pay-option">
                <div className="radio">
                  <input type="radio" name="payment" id="bank" />
                  <label htmlFor="bank">Bank</label>
                </div>
                <img
                  src="public/imgs/Frame 834.png"
                  alt="Cards"
                  className="bank-imgs"
                />
              </div>
              <div className="radio">
                <input type="radio" name="payment" id="cash" defaultChecked />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>

            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button className="red-btn">Apply Coupon</button>
            </div>

            <button className="red-btn order">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;