import Navbar from "../Navbar";
import logo from "../../images/Divum_Logo.svg";
import "./Cart.css";
import { useLocation } from "react-router-dom";
function Cart() {
  let location = useLocation();
  return (
    <>
      <Navbar />

      <div className="cart-container">
        <div className="cart-products">
          <div className="product-wrapper">
            <div className="product-lists">
              <div className="product-image">
                <img
                  src={
                    "data:image/png;base64," + location.state.data.prod_image
                  }
                  alt="products"
                />
              </div>
              <div className="prod-details">
                <span>{location.state.data.prod_name} ({location.state.data.prod_desc})</span>
                <span>Size : Medium</span>
                <span className="offer">40% off</span>
                <span>₹ {location.state.data.prod_price}</span>
                
              </div>
            </div>
          </div>
        </div>
        <div className="buy-container">
          <h2>Technical Details</h2>
          <div className="tech-details">
            <div className="prod-id">
              <label htmlFor="prod-id">Product ID: </label>
              <span className="">{location.state.data.id}</span>
            </div>
            <div className="prod-id">
              <label htmlFor="prod-model">Model ID:</label>
              <span className="prod-model">{location.state.data.modelNo}</span>
            </div>
            <div className="prod-id">
              <label htmlFor="frame-color">Frame Color:</label>
              <span className="frame-color">
                {location.state.data.frameColor}
              </span>
            </div>
            <div className="prod-id">
              <label htmlFor="frame-width">Frame Width:</label>
              <span className="frame-width">
                {location.state.data.frameWidth}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
