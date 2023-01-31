import React from "react";
import styles from "./Login.module.css";
// import "./signup.css";
function Login() {
  return (
   // <form className={styles.Form}>
    //   <div>
    //     <div>
    //       <label htmlFor="">Email</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Password</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //   </div>
    //   <input type="submit" value="LOGIN" />
    // </form>
   

         
        <form id="login" class="input-group">
          <input type="email" id="email" class="input" name="email" placeholder="Email" required /><br />
          <input type="password" id="pwd" name="pwd" class="input" placeholder="Password" required /><br />
          <input type="checkbox" class="check" /><span>Remember Password</span><br/>
            <button type="submit" class="submit-btn">Login</button>
        </form>
     
  );
}

export default Login;
