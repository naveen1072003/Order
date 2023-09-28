import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({
    prod_name: "",
    prod_image: null,
    prod_desc: "",
    prod_price: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({
      ...product,
      prod_image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
    //   formData.append("file", product.prod_image);

      // Convert the product object to JSON and append it as a form field
    //   formData.append("productDetails", product);

      await axios.post(
        "http://localhost:8080/api/v1/products/addProducts",
          product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Clear the form or perform other actions upon successful submission
      console.log("Product added successfully!");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="prod_name">Product Name:</label>
        <input
          type="text"
          id="prod_name"
          name="prod_name"
          value={product.prod_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="prod_image">Product Image:</label>
        <input
          type="file"
          id="prod_image"
          name="prod_image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="prod_desc">Product Description:</label>
        <input
          type="text"
          id="prod_desc"
          name="prod_desc"
          value={product.prod_desc}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="prod_price">Product Price:</label>
        <input
          type="text"
          id="prod_price"
          name="prod_price"
          value={product.prod_price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
