import React from "react";
// import styles from "./Login.module.css";
// import "./signup.css"
function Signup() {
  return (
    // <form className={styles.Form}>
    //   <div>
    //     <div>
    //       <label htmlFor="">USERNAME</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Email</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Passowrd</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Confirm Password</label>
    //       <input type="text" name="" id="" />
    //     </div>
    //   </div>
    //   <input type="submit" value="SIGN UP" />
    // </form>
   

        <form id="signup" class="input-group">
          <input type="email" id="email" class="input" name="email" placeholder="Email" required /><br />
          <input type="password" id="pwd" name="pwd" class="input" placeholder="Password" required /><br />
          <input type="checkbox" class="check" /><span>I agree to the terms and Conditions</span><br />
          <button type="submit" class="submit-btn">Signup</button>
        </form>
      
    
  );
}

export default Signup;
