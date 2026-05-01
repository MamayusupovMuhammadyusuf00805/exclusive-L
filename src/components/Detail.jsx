import React from "react";
import "./Detail.css";

function Detail() {
  return (
    <div className="card">
      <div className="card-top">
        <span className="badge">-35%</span>
        <div className="heart">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-eye"></i>
        </div>
        <img src="public/imgs/Frame 608(4).png" alt="keyboard" />
        <button className="add-btn">Add To Cart</button>
      </div>
      <div className="card-info">
        <h3>AK-900 Wired Keyboard</h3>
        <p>
          <span className="price">$960</span>
          <span className="old-price">$1160</span>
        </p>
      </div>
    </div>
  );
}

export default Detail;
