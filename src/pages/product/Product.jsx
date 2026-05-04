import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='productpage'>
        <div className="container">
            <div className="product">
                <div className="leftpro">
                    <div className="smallings">
                        <img src="/imgs/Frame 895.png" alt="" />
                        <img src="/imgs/Frame 896.png" alt="" />
                        <img src="/imgs/Frame 897.png" alt="" />
                        <img src="/imgs/Frame 919.png" alt="" />
                    </div>
                    <div className="mainimg">
                        <img src="/imgs/Frame 894(1).png" alt="" />
                    </div>
                </div>
                <div className="rightpro">
                    <h1>Havic HV G-92 Gamepad</h1>
                    <div className="stars">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      <p>(150 Reviews)</p>
                      <span>In Stock</span>
                    </div>
                    <h2>$192.00</h2>
                    <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <hr />
                    <div className="color">
                        <h2>Colours:</h2>
                        <button className="color-b1"></button>
                        <button className="color-b2"></button>
                    </div>
                    <div className="count">
                        <div className="count1">
                            <button className="minus">-</button>
                            <span>1</span>
                            <button className="plus">+</button>
                            <button className="buy">Buy Now</button>
                            <button className="wish"><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="count2">
                      <div className="counts">
                        <img src="/imgs/icon-delivery(2).png" alt="" />
                        <div className="fr">
                            <h2>Free Delivery</h2>
                            <p>Enter your postal code for Delivery Availability</p>
                        </div>
                      </div>
                      <div className="counts">
                        <img src="/imgs/Icon-return(2).png" alt="" />
                        <div className="fr">
                            <h2>Return Delivery</h2>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product