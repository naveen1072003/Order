import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import {
  addCategories_Url,
  deleteProduct_Url,
  editProduct_Url,
  getAllCategories_Url,
  getAllProducts_Url,
  getProducts_Url,
} from "../constraints/apiUrl";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    prod_name: "",
    prod_image: null,
    prod_desc: "",
    prod_price: "",
    modelNo: "",
    frameWidth: "125mm",
    frameColor: "Black",
    prod_category: "",
    quantity: "",
  });

  console.log(product);

  const [category, setCategory] = useState({
    categoryName: "",
  });

  const [allCategories, setallCategories] = useState({});

  const [prodList, setProductList] = useState([]);
  const [editDetails, setEditDetails] = useState({});

  const [isDelete, setIsDelete] = useState(false);

  const [isFormVisible, setFormVisibile] = useState(false);
  const [isCatFormVisible, setCatFormVisibile] = useState(false);
  const [isEditForm, setEditForm] = useState(false);
  const [isAddStaff, setStaffFormVisibile] = useState(false);

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  };

  const CategoryChange = (e) => {
    setCategory({
      categoryName: e.target.value,
    });
  };

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

  const getAllProducts = async () => {
    try {
      const response = await axios.get(getProducts_Url, {
        headers,
      });
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(prodList);
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetForm();
    try {
      const formData = new FormData();
      formData.append("file", product.prod_image);
      formData.append("prod_name", product.prod_name);
      formData.append("prod_desc", product.prod_desc);
      formData.append("prod_price", product.prod_price);
      formData.append("modelNo", product.modelNo);
      formData.append("frameColor", product.frameColor);
      formData.append("frameWidth", product.frameWidth);
      formData.append("prod_category", product.prod_category);
      formData.append("quantity", product.quantity);

      console.log("product",product);
      await axios.post(
        "http://localhost:8080/api/v1/products/addProducts",
        formData,
        {
          headers,
        }
      );
      console.log("Product added successfully!");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  // Add Or Edit Product
  const add_EditApi = async (e) => {
    try {
      if (!isEditForm) {
        handleSubmit(e);
      } else {
        const putresponse = await axios.put(
          editProduct_Url,
          {
            ...editDetails,
          },
          { headers }
        );
      }
      setEditForm(false);
      setFormVisibile(false);
    } catch (err) {
      console.log(err);
    }
    setEditDetails({});
  };

  // Delete Product
  const deleteApi = async (id) => {
    try {
      console.log(id);
      await axios.delete(deleteProduct_Url + id, { headers });
      setIsDelete(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Add Category
  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        addCategories_Url,
        { ...category },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  };

  //getAllCategory

  const getAllCategories = async () => {
    try {
      const response = await axios.get(getAllCategories_Url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      });
      console.log(response.data);
      setallCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    // setEditDetails({});
    // setEditForm(false);
    console.log("hi");
    setCatFormVisibile(false);
    setFormVisibile(false);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [isFormVisible, isCatFormVisible, isEditForm]);

  let i = 1;
  return (
    <>
      <div className="product">
        <div className="add-buttons">
          <button type="submit" onClick={() => setFormVisibile(true)}>
            Add Products
          </button>
          <button type="submit" onClick={() => setCatFormVisibile(true)}>
            Add new Category
          </button>
          <button type="submit" onClick={() => setStaffFormVisibile(true)}>
            Add new Staff
          </button>
        </div>
        {isFormVisible && (
          <div className="form-blur">
            <div className="product-form">
              <div className="prod-heading">
                <h2>Add Products</h2>
                <button type="submit" className="btnrst" onClick={resetForm}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="form-inputs">
                <label htmlFor="prod_name">Product Name:</label>
                <input
                  type="text"
                  id="prod_name"
                  name="prod_name"
                  value={product.prod_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="prod_image">Product Image:</label>
                <input
                  type="file"
                  id="prod_image"
                  name="prod_image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="prod_desc">Product Description:</label>
                <input
                  type="text"
                  id="prod_desc"
                  name="prod_desc"
                  value={product.prod_desc}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="prod_price">Product Price:</label>
                <input
                  type="text"
                  id="prod_price"
                  name="prod_price"
                  value={product.prod_price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="modelNo">Model No:</label>
                <input
                  type="text"
                  id="modelNo"
                  name="modelNo"
                  value={product.modelNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="frameColor">Frame Color:</label>
                <select
                  type="text"
                  id="frameColor"
                  name="frameColor"
                  value={product.frameColor}
                  onChange={handleInputChange}
                  defaultValue={"Black"}
                >
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="White">White</option>
                </select>
              </div>
              <div className="form-inputs">
                <label htmlFor="frameWidth">Frame Width:</label>
                <select
                  id="frameWidth"
                  name="frameWidth"
                  value={product.frameWidth}
                  onChange={handleInputChange}
                  defaultValue={"125mm"}
                >

                  <option value="125mm">125mm</option>
                  <option value="126mm">126mm</option>
                  <option value="127mm">127mm</option>
                  <option value="128mm">128mm</option>
                </select>
              </div>
              <div className="form-inputs">
                <label htmlFor="prod_category">Product Category:</label>
                <select
                  name="prod_category"
                  id="prod_category"
                  onChange={handleInputChange}
                  required
                >
                  <option value="-">-</option>
                  {allCategories &&
                    allCategories.map((category) => {
                      return (
                        <option value={category.categoryName}>
                          {category.categoryName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-inputs">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sub-btn">
                <button type="submit" onClick={handleSubmit}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
        {isCatFormVisible && (
          <div className="category-blur">
            <div className="category-form">
              <div className="cat-heading">
                <h3>Add Category</h3>
                <button type="submit" className="btnrst" onClick={resetForm}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="catg-input">
                <label htmlFor="category">Enter the Category:</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  onChange={CategoryChange}
                />
              </div>
              <div className="subt-btn">
                <button type="submit" onClick={handleCategorySubmit}>
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================  */}
        <div className="table-details">
          <table>
            <th>S.No</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Product Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit / Delete</th>
            <tbody>
              {/* {console.log(userList.content,"singam")} */}
              {prodList &&
                prodList.map((product) => {
                  return (
                    <tr>
                      <td>{i++}</td>
                      <td>
                        <img
                          src={"data:image/png;base64," + product.prod_image}
                          alt=""
                          width={50}
                        />
                      </td>
                      <td>{product.prod_name}</td>
                      <td>{product.prod_desc}</td>
                      <td>{product.category.categoryName}</td>
                      <td>{product.prod_price}</td>
                      <td>{product.quantity}</td>
                      <td className="action-buttons">
                        <button className="edit" value={product.id}>
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                            onClick={() => {
                              setEditForm(true);
                              setEditDetails(product);
                              setFormVisibile(true);
                            }}
                          >
                            &#xE254;
                          </i>
                        </button>
                        <button
                          className="delete"
                          onClick={() => {
                            deleteApi(product.id);
                            setIsDelete(true);
                          }}
                          type="submit"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            &#xE872;
                          </i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
