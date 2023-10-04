
import {  useNavigate,Link } from "react-router-dom";
import './Navbar.css'
import logo from "../images/Divum_Logo.svg";


function Navbar(){
    const navigate = useNavigate();

    const setLogout = () => {
      navigate("/login", { replace: true });
      localStorage.removeItem("jwtToken");
      };

    return(
    <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <Link className="cart-nav" to="/Home">Home</Link>

        </li>
        {/* <li>
          <Link className="cart-nav" to="/cart">Cart</Link>
        </li> */}
        <li>About</li>
        <li>Contact Us</li>
        <li>
          <button className="logout" type="submit" onClick={setLogout}>
            Log out
          </button>
        </li>
      </ul>
    </div>
  </div>
    );
}

export default Navbar;