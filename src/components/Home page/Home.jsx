import "./Home.css";
import logo from "../../images/Divum_Logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts_Url } from "../constraints/apiUrl";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const [prodList, setProductList] = useState([]);

  const getAllProducts = async () => {
     try {
      const response = await axios.get(getAllProducts_Url,
        {
          headers:{
            Authorization: "Bearer " + localStorage.getItem("jwtToken")
          }
        })
        setProductList(response.data)
     } catch (error) {
      console.log(error);
     }
  }
console.log(prodList);
  useEffect(() => {
    getAllProducts()
  },[]);

  const setLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/", { replace: true})
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>Contact Us</li>
            <li><button className="logout" type="submit" onClick={setLogout}>Log out</button></li>
          </ul>
        </div>
      </div>
      <div className="prod">
        <p>Products</p>
      </div>
        <div className="products">
      {prodList.map((product) => (

          <div className="product-box">
            <img src={"data:image/png;base64,"+product.prod_image} alt="" />
            <div className="product-details">
              <div className="details">
                <label htmlFor="rty">
                  Product Name: <span>{product.prod_name}</span>
                </label>
                <label htmlFor="rty">
                  Price: <span>{product.prod_price}</span>
                </label>
                <div className="input-box-wrapper">
                  <label htmlFor="yrt">Quantity:</label>
                  <input type="number" name="" defaultValue={0} />
                </div>
              </div>
              <button type="submit">Add to Cart</button>
            </div>
          </div>
      ))}
        </div>
    </div>
  );
}

export default Home;
