import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { authUser_Url } from "../constraints/apiUrl";
import { useNavigate } from "react-router-dom";

function Login() {

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try{
    const response = await axios.post(authUser_Url, {
      ...loginDetails
    });
    if(response.status === 200){
      localStorage.setItem("jwtToken", response.data);
      navigate("/Home", { replace: true })
    }
  }
  catch(e){
    window.alert("You have entered wrong password!!!")
    navigate("/login", { replace: true })
     console.log(e);
  }
    
  };

  function OnchangeCall(e) {
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [e.target.name]: e.target.value
    }));
  }
  console.log(loginDetails);
  return (
    <div className="form-container">
      <div className="inner-container">
        <div className="form-data">
          <p>Sign in</p>
          <input
            type="email"
            name="email"
            id="email"
            onChange={OnchangeCall}
          />
          <input
            type="text"
            name="password"
            id="password"
            onChange={OnchangeCall}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <div className="newUser">
          <a href="http://">New User ?</a>
          <a href="http://"> | Forgot Password</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
