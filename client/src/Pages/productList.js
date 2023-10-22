import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/userList.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // New state for delete confirmation

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let response = await fetch('http://localhost:8000/productRoute/getProductList');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      // Set the delete confirmation to show the dropdown
      setDeleteConfirmation(id);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/productRoute/deleteProductById/${id}`, {
        method: 'DELETE',
      });
      console.log('product deleted');
      fetchProducts();
      setDeleteConfirmation(null); // Reset the delete confirmation state
    } catch (err) {
      console.log(err);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null); // Reset the delete confirmation state
  };

  return (
    <div>
      <h1>Product Listing Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>
                {product.images && product.images.length > 0 ? (
                  <img
                    src={`http://localhost:8000/${product.images[0]}`}
                    alt=""
                    style={{ height: '200px', width: '200px' }}
                  />
                ) : (
                  <span>No image available</span>
                )}
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/productEdit/${product._id}`} className='edit-link'>Edit</Link>
                {deleteConfirmation === product._id ? (
                  <div>
                    <p>Do you want to delete this item?</p>
                    <button onClick={() => confirmDelete(product._id)} className='delete-link'>Confirm</button>
                    <button onClick={cancelDelete} className='delete-link'>Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => deleteProduct(product._id)} className='delete-link'>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListingPage;
