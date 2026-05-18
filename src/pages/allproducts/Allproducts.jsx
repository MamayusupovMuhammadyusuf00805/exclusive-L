import React, { useState, useEffect } from 'react';
import Detail from '../../components/Detail'; 
import { baseUrl, productdataFunction } from '../../services/App';

function Allproducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productdataFunction()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Маҳсулотларни юклашда хатолик юз берди:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <h2>Юкланмоқда...</h2>
      </div>
    );
  }

  return (
    <div 
      className="all-products-page" 
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 50px', 
        padding: '40px 20px',
      
     
        backgroundColor: '#fff', 
        position: 'relative', 
        zIndex: 1 
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', color: '#333' }}>
        All Products
      </h2>
      <div 
        className="flexbox" 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '25px', 
          justifyContent: 'center'
        }}
      >
        {products && products.map((item, index) => (
          <Detail
            key={item.id || index}
            product={item}
            baseUrl={baseUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default Allproducts;