import React, { useState } from "react";
import "./AuthPopup.css";

const AuthPopup = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>

      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Tabs */}
        <div className="popup-tabs">
          <button
            className={activeTab === "signin" ? "active" : ""}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        {activeTab === "signin" && (
          <form className="popup-form">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />

            <label>Password</label>
            <input type="password" placeholder="Enter password" />

            <span className="forgot">Forgot Password?</span>

            <button className="submit-btn">Sign In</button>

            <p className="footer-text">
              Don’t have an account?{" "}
              <span onClick={() => setActiveTab("signup")}>Sign up here</span>
            </p>
          </form>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <form className="popup-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />

            <label>Password</label>
            <input type="password" placeholder="Enter password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />

            <button className="submit-btn">Register</button>

            <p className="footer-text">
              Already have an account?{" "}
              <span onClick={() => setActiveTab("signin")}>Sign in here</span>
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthPopup;
