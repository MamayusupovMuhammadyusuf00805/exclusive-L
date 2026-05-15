import React, { useContext } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Detail from "../../components/Detail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

import { Datacontext } from "../../App";
import Log from "../log/Log";
import { baseUrl } from "../../services/App";
import { Link } from "react-router-dom";


function Home() {
  const { categorydata } = useContext(Datacontext);
  console.log(categorydata);
  const { productdata } = useContext(Datacontext);
  

  const {datacategory}=useContext(Datacontext)
  
  return (
    <div className="homepage">
      <div className="container">
        <div className="hero">
          <div className="lefthero">
            {categorydata.map((item, index) => (
              <div className="menu-item" key={index}>
                <img src={item.image} alt={item.picture} />
                <Link to={`/category/${item.id}`}>
                          <p>{item.title}</p>
                </Link>
          
              </div>
            ))}
          </div>

          <div className="righthero">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="public/imgs/Gemini_Generated_Image_q4ndgcq4ndgcq4nd.png" alt="Slide 1" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="public/imgs/asdf.jpg" alt="Slide 2" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="public/imgs/Gemini_Generated_Image_q4ndgcq4ndgcq4nd.png" alt="Slide 3" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="public/imgs/asdf.jpg" alt="Slide 4" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="public/imgs/Gemini_Generated_Image_q4ndgcq4ndgcq4nd.png" alt="Slide 5" />
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
          {productdata &&
            productdata
              .slice(12, 16)
              .map((item, index) => (
                <Detail
                  key={item.id || index}
                  product={item}
                  baseUrl={baseUrl}
                />
              ))}
        </div>
        <div className="views">
          <button className="view">View All Products</button>
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
            <img src="/imgs/Category-CellPhone(1).png" alt="" />
            <span>Phones</span>
          </div>
          <div className="item">
            <img src="/imgs/Category-Computer(1).png" alt="" />
            <span>Computers</span>
          </div>
          <div className="item">
            <img src="/imgs/Category-SmartWatch(1).png" alt="" />
            <span>SmartWatch</span>
          </div>
          <div className="item active">
            <img src="/imgs/Category-Camera(1).png" alt="" />
            <span>Camera</span>
          </div>
          <div className="item">
            <img src="/imgs/Category-CellPhone(1).png" alt="" />
            <span>HeadPhones</span>
          </div>
          <div className="item">
            <img src="/imgs/Category-Gamepad(1).png" alt="" />
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
          {productdata &&
            productdata
              .slice(8, 12)
              .map((item, index) => (
                <Detail
                  key={item.id || index}
                  product={item}
                  baseUrl={baseUrl}
                />
              ))}
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
          {productdata &&
            productdata
              .slice(0, 8)
              .map((item, index) => (
                <Detail
                  key={item.id || index}
                  product={item}
                  baseUrl={baseUrl}
                />
              ))}
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
              <img src="public/imgs/Services(13).png" alt="" />
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
              <img src="public/imgs/Services(14).png" alt="" />
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
              <img src="public/imgs/Services(15).png" alt="" />
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
