import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Йўлини текшириб олинг
import Footer from "./components/Footer"; 
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Log from "./pages/log/Log";
import Sign from "./pages/sign/Sign";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Product from "./pages/product/Product";
import Account from "./pages/account/Account";
import Wishlist from "./pages/wishlist/Wishlist";
import Card from "./pages/card/Card";
import Mistake from "./pages/mistake/Mistake";
// Компонентлар ва саҳифалар импорти...
import { categorydataFetch, productdataFunction, userInfoFetch } from "./services/App";
import Category from './pages/category/Category';
import Allproducts from './pages/allproducts/Allproducts';

export const Datacontext = createContext();

function App() {
  const [categorydata, setcategorydata] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [userInfo, setUserInfo] = useState(null); 

  useEffect(() => {
    categorydataFetch().then(setcategorydata);
    productdataFunction().then(setproductdata);

    const token = window.localStorage.getItem("token");
    if (token) {
      userInfoFetch() 
        .then(user => setUserInfo(user))
        .catch(err => console.log("User load error:", err));
    }
  }, []);

  return (
    <BrowserRouter>
      <Datacontext.Provider
        value={{
          categorydata,
          productdata,
          userInfo, 
          setUserInfo, 
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/log" element={<Log />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/card" element={<Card />} />
           <Route path="/category/:id" element={<Category />} />
           <Route path='/allproducts' element={<Allproducts/>}/>
          <Route path="*" element={<Mistake />} />
        </Routes>
        <Footer />
      </Datacontext.Provider>
    </BrowserRouter>
  );
}

export default App;