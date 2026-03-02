import { useState, useRef, useEffect } from "react";
import "./Auth.css";
import bgVideo from "../assets/waterfall.mp4";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [animateText, setAnimateText] = useState(false);

  const cardRef = useRef(null);
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  // Set fixed height once (max of both forms)
useEffect(() => {
  if (loginRef.current && signupRef.current && cardRef.current) {
    const loginHeight = loginRef.current.offsetHeight;
    const signupHeight = signupRef.current.offsetHeight;

    const maxHeight = Math.max(loginHeight, signupHeight);

    cardRef.current.style.height = maxHeight + "px";
  }
}, []);

// Switch handler (no height change here)
const handleSwitch = (toLogin) => {
  setAnimateText(false);

  setTimeout(() => {
    setIsLogin(toLogin);
    setAnimateText(true);
  }, 50);
};
  return (
    <div className="auth-page">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="auth-container">
        {/* CARD */}
        <div className="auth-card-wrapper">
          <div ref={cardRef} className={`auth-card ${isLogin ? "" : "flip"}`}>
            <div className="auth-card-inner">
          {/* LOGIN */}
              <div ref={loginRef} className="form front">
            <h2>Login to Your Account</h2>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="auth-btn">LOGIN</button>

                <p className="switch-text" onClick={() => handleSwitch(false)}>
              Don’t have an account? <span>Signup</span>
            </p>
          </div>

          {/* SIGNUP */}
              <div ref={signupRef} className="form back">
            <h2>Create Your Account</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
            </div>

            <button className="auth-btn">SIGN UP</button>

                <p className="switch-text" onClick={() => handleSwitch(true)}>
              Already have an account? <span>Login</span>
            </p>
          </div>
            </div>
          </div>
        </div>

        {/* HERO TEXT */}
        <div className={`auth-hero-text ${animateText ? "animate" : ""}`}>
          {isLogin ? (
            <h1>
              ADVENTURE AWAITS —
              <br />
              UNLOCK YOUR NEXT
              <br />
              EPIC TRIP!
            </h1>
          ) : (
            <h1>
              START YOUR JOURNEY —
              <br />
              DISCOVER THE WORLD
              <br />
              WITH US!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
