import React, { useState } from "react";

const SignInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <main>
      <div className="signin--input">
        <h1>Sign In</h1>
        <form>
          <div className="input--wrapper">
            <input
              type="email"
              placeholder="Email or Phone Number"
              id="email"
            />
            <small className="alert">Please enter a valid email address.</small>
          </div>
          <div className="input--wrapper password--wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <span onClick={() => setShowPassword((prevState) => !prevState)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="button--wrapper">
            <button onClick={(e) => e.preventDefault()} type="submit">
              Sign In
            </button>
            <div className="remember--container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <span>Need help?</span>
            </div>
          </div>
        </form>
        <div className="additional--links">
          <div className="home--link">
            <p>New to Netflix?</p>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sign up now
            </a>
          </div>
          <div className="additional--info">
            <p>
              This is page is protected by Google reCAPTCHA to ensure you're not
              a bot{" "}
              <span onClick={() => setShowInfo((prevState) => !prevState)}>
                {showInfo ? "Show Less" : "Learn More"}
              </span>
            </p>
            <p style={{ display: showInfo ? "block" : "none" }}>
              The information collected by Google reCAPTCHA is subject to the
              Google <span>Privacy Policy</span> and
              <span> Terms of Service</span>, and is used for providing,
              maintaining, and improving the reCAPTCHA service and for general
              security purposes (it is not used for personalised advertising by
              Google).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInput;
