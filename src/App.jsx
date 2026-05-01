import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Log from "./pages/log/Log";
import Sign from "./pages/sign/Sign";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Mistake from "./pages/mistake/Mistake";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./pages/wishlist/Wishlist";
import Card from "./pages/card/Card";
import { productdetail } from "./services/App";
export const Datacontext = createContext();

function App() {
  const [categorydata, setcategorydata] = useState([]);
  const [productdata,setproductdata]=useState([])
  const [productdetail, setproductdetail] = useState(null);
  useEffect(() => {
    categorydata()?.then((info) => {
      setcategorydata(info);
    });
    fetchproductdata()?.then((product) => {
      setproductdata(product);
    });
    fetchproductdetail()?.then((productid)=>{
        setproductdetail(productid)
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Datacontext.Provider value={{categorydata,productdata,productdetail}}>
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
            <Route path={"/wishlist"} element={<Wishlist />} />
            <Route path={"/card"} element={<Card />} />
            <Route path="/*" element={<Mistake />} />
          </Routes>
          <Footer />
        </Datacontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
