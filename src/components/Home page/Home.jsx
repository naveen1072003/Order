import "./Home.css";
import logo from "../../images/Divum_Logo.svg";
import prod from "../../images/ps5.jpeg";
function Home() {
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
          </ul>
        </div>
      </div>
      <div className="prod">
        <p>Products</p>
      </div>
      <div className="products">
        <div className="product-box">
          <img src={prod} alt="" />
          <div className="product-details">
            <div className="details">
              <label htmlFor="">
                Product Name: <span>PlayStation 5</span>
              </label>
              <label htmlFor="">
                Price: <span>10,000</span>
              </label>
              <div className="input-box-wrapper">
                <label htmlFor="">Quantity:</label>
                <input type="number" name="" defaultValue={0} />
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
        </div>
        {/* ==== */}

        <div className="product-box">
          <img src={prod} alt="" />
          <div className="product-details">
            <div className="details">
              <label htmlFor="">
                Product Name: <span>PlayStation 5</span>
              </label>
              <label htmlFor="">
                Price: <span>10,000</span>
              </label>
              <div className="input-box-wrapper">
                <label htmlFor="">Quantity:</label>
                <input type="number" name="" defaultValue={0} />
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
        </div>

        {/* ==== */}

        <div className="product-box">
          <img src={prod} alt="" />
          <div className="product-details">
            <div className="details">
              <label htmlFor="">
                Product Name: <span>PlayStation 5</span>
              </label>
              <label htmlFor="">
                Price: <span>10,000</span>
              </label>
              <div className="input-box-wrapper">
                <label htmlFor="">Quantity:</label>
                <input type="number" name="" defaultValue={0} />
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
