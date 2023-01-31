import React, { useState } from "react";
import Login from "../../../components/user/LoginSignup/Login";
import Signup from "../../../components/user/LoginSignup/Signup";
// import "../../../components/user/LoginSignup/login.css";
import "../../../components/user/LoginSignup/signupNLogin.css";


function LoginSignup() {
  const [isLogin, setLogin] = useState(false);
  
  return (
    <div class="form">
    
     
        <div class="button-box">
         
          <button type="button"  className={isLogin?"btn active":"btn"} onClick={()=>{setLogin(true)}}>login </button>
          <button type="button" className={isLogin?"btn":"btn active"} onClick={()=>{setLogin(false)}}>Signup</button>
        </div>{
 isLogin?<Login/>:<Signup/>
        }
      
       
    </div>

  );
}

export default LoginSignup;
