import React, { useContext } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import Detail from "../../components/Detail";
import { Datacontext } from "../../App";
import Log from "../log/Log";

function Home() {
    const {categorydata}=useContext(Datacontext)
    console.log(categorydata);
    
    const {productdata}=useContext(Datacontext)
    const{productdetail}=useContext(Datacontext)
  return (
    <div className="homepage">
      <div className="container">
        <div className="hero">
          <div className="lefthero">
            <p>
              Woman’s Fashion <i className="fa-solid fa-angle-right"></i>
            </p>
            <p>
              Men’s Fashion <i className="fa-solid fa-angle-right"></i>
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>

          <div className="righthero">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/imgs/Frame 560(2).png" alt="Slide 1" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/imgs/Frame 560(2).png" alt="Slide 2" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/imgs/Frame 560(2).png" alt="Slide 3" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/imgs/Frame 560(2).png" alt="Slide 4" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/imgs/Frame 560(2).png" alt="Slide 5" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flash-sales">
          <div className="head">
            <div className="label">
              <div className="rect"></div>
              <p>Today's</p>
            </div>
            <div className="row">
              <h1>Flash Sales</h1>
              <div className="timer">
                <div className="unit">
                  <p>Days</p>
                  <span>03</span>
                </div>
                <span className="dots">:</span>
                <div className="unit">
                  <p>Hours</p>
                  <span>23</span>
                </div>
                <span className="dots">:</span>
                <div className="unit">
                  <p>Minutes</p>
                  <span>19</span>
                </div>
                <span className="dots">:</span>
                <div className="unit">
                  <p>Seconds</p>
                  <span>56</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flexbox">
          <Detail />
          <Detail />
          <Detail />
          <Detail />
        </div>
      </div>
      <div className="container">
      <div className="head">
        <div className="red-tag">
          <div className="box"></div>
          <span>Categories</span>
        </div>
        <div className="row">
          <h2>Browse By Category</h2>
          <div className="btns">
            <button className="btn">←</button>
            <button className="btn">→</button>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="item">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <span>Phones</span>
        </div>
        <div className="item">
          <i className="fa-solid fa-desktop"></i>
          <span>Computers</span>
        </div>
        <div className="item">
          <i className="fa-solid fa-clock"></i>
          <span>SmartWatch</span>
        </div>
        <div className="item active">
          <i className="fa-solid fa-camera"></i>
          <span>Camera</span>
        </div>
        <div className="item">
          <i className="fa-solid fa-headphones"></i>
          <span>HeadPhones</span>
        </div>
        <div className="item">
          <i className="fa-solid fa-gamepad"></i>
          <span>Gaming</span>
        </div>
      </div>

    </div>
    <div className="section">
      <div className="top-label">
        <div className="red-box"></div>
        <span>This Month</span>
      </div>
      <div className="header-row">
        <h2>Best Selling Products</h2>
        <button className="view-all">View All</button>
      </div>
        <div className="flexbox">
          <Detail />
          <Detail />
          <Detail />
          <Detail />
        </div>
    </div>
    <div className="container">
        <div className="music">
            <img src="public/imgs/Frame 600(1).png" alt="" />
        </div>
    </div>
    <div className="section">
      <div className="top-tag">
        <div className="red-box"></div>
        <span>Our Products</span>
      </div>
      <div className="main-row">
        <h2>Explore Our Products</h2>
        <div className="arrows-group">
          <button className="arrow">←</button>
          <button className="arrow">→</button>
        </div>
      </div>
        <div className="flexboxs">
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
        </div>
    </div>
    <div className="arrival-container">
      <div className="tag">
        <div className="red-box"></div>
        <span>Featured</span>
      </div>
      <h2 className="arrival-title">New Arrival</h2>
      <div className="grid-layout">
        <div className="grid-item ps5">
          <img src="public/imgs/Frame 684.png" alt="PS5" />
        </div>
        <div className="grid-item womens">
          <img src="public/imgs/Frame 685.png" alt="Women" />
        </div>
        <div className="grid-item speakers">
          <img src="public/imgs/Frame 686.png" alt="Speakers" />
        </div>
        <div className="grid-item perfume">
          <img src="public/imgs/Frame 687.png" alt="Perfume" />
        </div>
      </div>
    </div>
    <div className="services">
      <div className="serv-item">
        <div className="icon-circle">
          <div className="black-circle">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
        </div>
        <div className="serv-text">
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="serv-item">
        <div className="icon-circle">
          <div className="black-circle">
            <i className="fa-solid fa-headset"></i>
          </div>
        </div>
        <div className="serv-text">
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className="serv-item">
        <div className="icon-circle">
          <div className="black-circle">
            <i class="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div className="serv-text">
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
