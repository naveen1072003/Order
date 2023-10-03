import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts_Url } from "../constraints/apiUrl";
import Navbar from "../Navbar";

function Home() {
  const [prodList, setProductList] = useState([]);

  const [headStyle, setheadStyle] = useState({
    head: "all",
  });
  const [category, setCateg] = useState("Pre-Designed");
  // const [lens, setLens] = useState(false);
  // const [uvglass, setUVglass] = useState(true);
  // console.log(categ);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(getAllProducts_Url + category, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
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

  function displayProd(num) {
    if (num === 1) {
      setheadStyle({ head: "all" });
      setCateg("Pre-Designed");
      // setpreDesign(true);
      // setframes(false);
      // setLens(false);
      // setUVglass(false);
    } else if (num === 2) {
      setheadStyle({ head: "frames" });
      setCateg("Frame");
    }
    // setpreDesign(false);
    // setframes(true);
    // setLens(false);
    // setUVglass(false);
    else if (num == 3) {
      setheadStyle({ head: "lens" });
      setCateg("Lens");

      // setpreDesign(false);
      // setframes(false);
      // setLens(true);
      // setUVglass(false);
    } else {
      setheadStyle({ head: "uvglass" });
      setCateg("UV Glass");

      // setpreDesign(false);
      // setframes(false);
      // setLens(false);
      // setUVglass(true);
    }
  }

  return (
    <div className="container">
      <Navbar />
      <div className="prod">
        <div className="heading">
          <p>Products</p>
        </div>
        <div className="sections">
          <p
            className={`all ${headStyle.head === "all" ? "active" : ""}`}
            onClick={() => displayProd(1)}
          >
            Pre-Designed
          </p>
          <p
            className={`frames ${headStyle.head === "frames" ? "active" : ""}`}
            onClick={() => displayProd(2)}
          >
            Frames
          </p>
          <p
            className={`lens ${headStyle.head === "lens" ? "active" : ""}`}
            onClick={() => displayProd(3)}
          >
            Lens
          </p>
          <p
            className={`uvglass ${
              headStyle.head === "uvglass" ? "active" : ""
            }`}
            onClick={() => displayProd(4)}
          >
            UV Glasses
          </p>
        </div>
      </div>
      <div className="products">
        {prodList.map((product) => (
          <div className="product-box">
            <img src={"data:image/png;base64," + product.prod_image} alt="" />
            <div className="product-details">
              <div className="details">
                <label htmlFor="rty">
                  Product Name: <span>{product.prod_name}</span>
                </label>
                <label htmlFor="rty">
                  Price: <span>{product.prod_price}</span>
                </label>
                {/* <div className="input-box-wrapper">
                  <label htmlFor="yrt">Quantity:</label>
                  <input type="number" name="" defaultValue={0} />
                </div> */}
              </div>
              {/* <button type="submit">Add to Cart</button>   */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
