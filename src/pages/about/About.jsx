import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutpage">
      <div className="container">
        <p className="breadcrumb">
          <a
            href="/"
            style={{ textDecoration: "none", color: "inherit", opacity: "0.7" }}
          >
            Home
          </a>
          &nbsp;/&nbsp;
          <span>About</span>
        </p>
        <div className="about">
          <div className="rightabout">
            <h1>Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer electronics to lifestyle.
            </p>
          </div>
          <div className="leftabout">
            <img src="/imgs/Side Image(2).png" alt="Our Story" />
          </div>
        </div>
        <div className="gift-container">
          <div className="gift1">
            <img src="/imgs/Services(7).png" alt="Sellers" />
            <h2>10.5k</h2>
            <p>Sellers active on our site</p>
          </div>
          <div className="gift1">
            <img src="/imgs/Services(7).png" alt="Sales" />
            <h2>33k</h2>
            <p>Monthly Product Sales</p>
          </div>
          <div className="gift1">
            <img src="/imgs/Services(8).png" alt="Customers" />
            <h2>45.5k</h2>
            <p>Active customers on our site</p>
          </div>
          <div className="gift1">
            <img src="/imgs/Services(9).png" alt="Revenue" />
            <h2>25k</h2>
            <p>Annual gross sales on our site</p>
          </div>
        </div>
        <div className="staff-container">
          <div className="staff1">
            <img src="/imgs/Frame 874(1).png" alt="Tom Cruise" />
            <h2>Tom Cruise</h2>
            <p>Founder & Chairman</p>
            <div className="media">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="className-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="staff1">
            <img src="/imgs/Frame 875(1).png" alt="Emma Watson" />
            <h2>Emma Watson</h2>
            <p>Managing Director</p>
            <div className="media">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="staff1">
            <img src="/imgs/Frame 876(1).png" alt="Will Smith" />
            <h2>Will Smith</h2>
            <p>Product Designer</p>
            <div className="media">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="free">
          <div className="free1">
            <img src="public/imgs/Services(10).png" alt="" />
            <h1>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="free1">
            <img src="public/imgs/Services(11).png" alt="" />
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="free1">
            <img src="public/imgs/Services(12).png" alt="" />
            <h1>MONEY BACK GUARANTEE</h1>
            <p>We reеurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
