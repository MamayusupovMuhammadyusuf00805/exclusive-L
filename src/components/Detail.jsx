import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";

import { baseUrl, addtoLike } from "../services/App"; 

function Detail({ product }) {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(product?.is_liked);


  useEffect(() => {
    setIsLiked(product?.is_liked);
  }, [product]);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    console.log("Товар добавлен в корзину, ID:", product.id);

    navigate(`/product/${product?.id}`);
  };

  if (!product) return null;

  // Расмни хавфсиз олиш
  let firstPic = product?.pictures?.[0] || product?.image;
  if (typeof firstPic === "object" && firstPic !== null) {
    firstPic = firstPic.image || firstPic.picture || firstPic.url || firstPic.id;
  }
  
  const imgSrc = firstPic 
    ? (firstPic.startsWith("http") ? firstPic : (firstPic.startsWith("/") ? `${baseUrl}${firstPic}` : `${baseUrl}/${firstPic}`)) 
    : "fallback.jpg";

  return (
    <div className="card">
      <div className="card-top">
        {product.discount && (
          <span className="badge">-{product.discount_price}%</span>
        )}
        
        <div className="heart">
          
        
          <div 
            className="icon-box"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
        
              addtoLike(product?.id)
                .then((info) => {
                  console.log(info);
           
                  if (info.message === "Mahsulot istaklar ro'yxatiga muvaffaqqiyatli qo'shildi.") {
                     setIsLiked(true); 
                  } else {
                     setIsLiked(false);
                  }
                })
                .catch((err) => console.error("Лайк босишда хатолик:", err));
            }}
          >
      
      
            {isLiked ? (
              <i className="fa-solid fa-heart" style={{ color: "red", pointerEvents: "none" }}></i> 
            ) : (
              <i className="fa-regular fa-heart" style={{ pointerEvents: "none" }}></i>
            )}
          </div>

          {/* Кўриш (Eye) тугмаси */}
          <div 
            className="icon-box"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <i className="fa-regular fa-eye" style={{ pointerEvents: "none" }}></i>
          </div>

        </div>

        <img
          src={imgSrc}
          alt={product?.title || "Изображение"}
        />
        
        <button type="button" className="add-btn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      
      <div className="card-info">
        <h3>
          {product?.title?.length > 27
            ? `${product.title.slice(0, 27)}...`
            : product?.title}
        </h3>
        <p>
          <span className="price">${product.price}</span>
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Detail;