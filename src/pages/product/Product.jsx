import React, { useState, useContext, useEffect } from "react";
import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Datacontext } from "../../App";
import { baseUrl, productdetailFunction } from "../../services/App";

function Product() {
  const { id } = useParams();
  const { productdata } = useContext(Datacontext);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImgIndex, setMainImgIndex] = useState(0); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setMainImgIndex(0); 
    
    productdetailFunction(id)
      .then((info) => {
        setProduct(info?.data || info);
      })
      .catch((error) => {
        console.error("Маълумот олишда хатолик юз берди:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px", fontSize: "20px" }}>Маълумотлар юкланмоқда...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: "center", padding: "50px", color: "red" }}>Маҳсулот топилмади!</div>;
  }

  // 100% ХАВФСИЗ РАСМ ТЕКШИРУВЧИ ФУНКЦИЯ
  const getSafeImageUrl = (imagePath) => {
    try {
      let path = imagePath;

      // Агар маълумот объект бўлса, унинг ичидан матнни қидирамиз
      if (typeof path === "object" && path !== null) {
        path = path.image || path.picture || path.url || path.id || "";
      }

      // Агар path ҳали ҳам матн бўлмаса ёки бўш бўлса, стандарт расм берамиз
      if (typeof path !== "string" || path.trim() === "") {
        return "/imgs/Frame 894(1).png";
      }

      // Энди path аниқ матн эканлигига ишончимиз комил
      if (path.startsWith("http")) return path;
      if (path.startsWith("/")) return `${baseUrl}${path}`;
      return `${baseUrl}/${path}`;
      
    } catch (error) {
      console.error("Расмни қайта ишлашда хатолик:", error);
      return "/imgs/Frame 894(1).png";
    }
  };

  const productPictures = product?.pictures || product?.images || [];
  
  const displayImage = 
    productPictures.length > 0 && productPictures[mainImgIndex]
      ? getSafeImageUrl(productPictures[mainImgIndex])
      : product?.image
      ? getSafeImageUrl(product?.image)
      : "/imgs/Frame 894(1).png";

  const handleBuyNow = (e) => {
    e.preventDefault(); 
    if (!product) return;

    const productInfo = {
      ...product,
      quantity,
      name: product?.title || product?.name || "Без названия",
      price: product?.price || 0,
      image: displayImage,
    };

    navigate("/card", { state: productInfo });
  };

  return (
    <div className="productpage">
      <div className="container">
        <div className="product">
          <div className="leftpro">
            <div className="smallings">
              {productPictures.length > 0 ? (
                productPictures.map((pic, index) => {
                  const picUrl = getSafeImageUrl(pic);
                  return (
                    <img
                      key={index}
                      src={picUrl}
                      alt={`thumb-${index}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMainImgIndex(index);
                      }}
                      style={{
                        cursor: "pointer",
                        border: mainImgIndex === index ? "2px solid red" : "1px solid #ddd",
                      }}
                    />
                  );
                })
              ) : product?.image ? (
                <img
                  src={getSafeImageUrl(product.image)}
                  alt="main"
                  style={{ border: "2px solid red", cursor: "pointer" }}
                />
              ) : (
                <p style={{ fontSize: "12px", color: "gray" }}>Rasm yo'q</p>
              )}
            </div>

            <div className="mainimg">
              <img src={displayImage} alt={product?.title || product?.name} />
            </div>
          </div>

          <div className="rightpro">
            <h1>{product?.title || product?.name || "Без названия"}</h1>

            <div className="stars">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <p>({product?.reviews_count || 0} Reviews)</p>
              <span style={{ color: product?.in_stock ? "green" : "red" }}>
                {product?.in_stock === false ? "Out of Stock" : "In Stock"}
              </span>
            </div>

            <h2>${product?.price || 0}</h2>
            <p className="description">
              {product?.description || "Маҳсулот ҳақида маълумот мавжуд эмас."}
            </p>
            <hr />

            <div className="color">
              <h2>Colours:</h2>
              {product?.colors && product.colors.length > 0 ? (
                product.colors.map((c, i) => (
                  <button
                    type="button"
                    key={i}
                    className="color-btn"
                    style={{ backgroundColor: c.hex_code || c }}
                  ></button>
                ))
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="button" className="color-b1" style={{ backgroundColor: "black" }}></button>
                  <button type="button" className="color-b2" style={{ backgroundColor: "red" }}></button>
                </div>
              )}
            </div>

            <div className="count">
              <div className="count1">
                <button type="button" className="minus" onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button type="button" className="plus" onClick={increment}>+</button>

                <button type="button" className="buy" onClick={handleBuyNow}>
                  Buy Now
                </button>
                
                <div className="heart" style={{ display: "flex", gap: "10px" }}>
                  <div 
                    className="icon-box" 
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Лайк босилди!");
                    }}
                  >
                    {product?.is_liked ? (
                      <i className="fa-solid fa-heart" style={{ color: "red", pointerEvents: "none" }}></i>
                    ) : (
                      <i className="fa-regular fa-heart" style={{ pointerEvents: "none" }}></i>
                    )}
                  </div>
                  
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

              </div>
            </div>

            <div className="count2">
              <div className="counts">
                <img src="/imgs/icon-delivery(2).png" alt="delivery" />
                <div className="fr">
                  <h2>Free Delivery</h2>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="counts">
                <img src="/imgs/Icon-return(2).png" alt="return" />
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
  );
}

export default Product;