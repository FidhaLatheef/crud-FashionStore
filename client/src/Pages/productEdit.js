import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/userEdit.css';

const ProductEditPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    images: []
  });
  const [previewImages, setPreviewImages] = useState([]);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/productRoute/getProductById/${id}`);
      const data = await response.json();
      setProduct(data);
      setPreviewImages(data.images);
    } catch (err) {
      console.log('error fetching product', err);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: files,
    }));

    const previewImages = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previewImages);
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', product.price);

      for (let i = 0; i < product.images.length; i++) {
        formData.append('images', product.images[i]);
      }

      axios.put(`http://localhost:8000/productRoute/updateProductById/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log('Product updated successfully');
      window.location.href = '/productList';
    } catch (error) {
      console.log('Error updating product:', error);
    }
  };

  return (
    <div>
      <h1 className="heading">Edit Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Images:
          <input
            type="file"
            name="images"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="input"
          />
        </label>
        <br />
        <div className="image-preview">
          {previewImages.map((image) => (
            <img key={image} src={image} alt="Preview" />
          ))}
        </div>
        <br />
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductEditPage;
