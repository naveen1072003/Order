import { defer } from "react-router-dom";
import logo from "../../images/Divum_Logo.svg";
import './Cart.css'
function Cart() {

    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li><button className="logout" type="submit">Log out</button></li>
                    </ul>
                </div>
            </div>

            <div className="cart-container">
                <div className="cart-products">
                    <div className="product-lists">
                        <div className="prouct-image">
                            <img src={logo} alt="products" />
                        </div>
                        <div className="prod-details">
                            <p>Cricket Bat(Pine Wood Bat)</p>
                            <p>$ 149.99</p>
                        </div>
                    </div>
                </div>
                <div className="buy-container">

                </div>

            </div>
        </>
    );
}

export default Cart;