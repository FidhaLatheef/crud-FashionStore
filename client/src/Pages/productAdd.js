import axios from 'axios';
import React, { useState } from 'react';
import '../Styles/productAdd.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    axios
      .post('http://localhost:8000/productRoute/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response.data.message);
        window.location.href = '/productList';
      })
      .catch(function (error) {
        console.log(error);
      });

    // Clear the form fields after submitting
    setName('');
    setPrice('');
    setDescription('');
    setImages([]);
    setPreviewImages([]);
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setImages(selectedFiles);

    const selectedImagesPreview = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages(selectedImagesPreview);
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="image-preview">
            <p>Image Preview</p>
            {previewImages.map((previewImage, index) => (
              <img key={index} src={previewImage} alt="Preview" />
            ))}
          </div>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
