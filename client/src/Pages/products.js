import React, { useState, useEffect } from 'react';
import '../Styles/products.css';
import Footer from '../Components/Footer';



function Products() {
    const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    try {
      const response = await fetch('http://localhost:8000/products'); 
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  };

    return (
        <div className='products'>
            <div className='product-top'>
                <h4>Products</h4>
            </div>
            <div className='product-bottom'>
                <div className='product-grid'>
                    {productsData.map((product) => (
                        <div key={product.id} className='product-card'>
                            <img src={`http://localhost:8000${product.image}`}  alt={product.description} />
                            <h5>{product.description}</h5>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Products;
