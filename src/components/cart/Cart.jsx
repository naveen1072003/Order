import Navbar from "../Navbar";
import logo from "../../images/Divum_Logo.svg";
import "./Cart.css";
function Cart() {
  return (
    <>
     <Navbar/>

      <div className="cart-container">
        <div className="cart-products">
          <div className="product-wrapper">
            <div className="product-lists">
              <div className="prouct-image">
                <img src={logo} alt="products" />
              </div>
              <div className="prod-details">
                <p>Cricket Bat(Pine Wood Bat)</p>
                <p>$ 149.99</p>
                <div className="input-box-wrapper">
                  <label htmlFor="yrt">Quantity:</label>
                  <input type="number" name="" defaultValue={0} />
                  <a href="">Delete</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="buy-container"></div>
      </div>
    </>
  );
}

export default Cart;
