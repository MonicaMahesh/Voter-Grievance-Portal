import React, { useState } from "react";
import "./Home.css";
import AuthPopup from "../Authpopup/AuthPopup.jsx";
import RaiseComplaint from "../RaiseComplaint/RaiseComplaint.jsx";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [showComplaintPage, setShowComplaintPage] = useState(false);

  return (
    <div className={`home-wrapper ${showAuth ? "blur-bg" : ""}`}>

      {showAuth && <AuthPopup onClose={() => setShowAuth(false)} />}

      {/* NEW: Raise Complaint Page */}
      {showComplaintPage && (
        <div className="overlay-page">
          <RaiseComplaint />
        </div>
      )}

      {/* HEADER */}
      <header className="header">
        <div className="left-head">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Election_Commission_of_India_Logo.png/120px-Election_Commission_of_India_Logo.png"
            alt="ECI Logo"
            className="eci-logo"
          />
          <div className="eci-text">
            <h4>भारत निर्वाचन आयोग</h4>
            <p>Election Commission of India</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">📞 Toll free - 7098</a>

          <select className="state-select">
            <option>Select state</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>
          </select>

          <a className="link-btn">Raise complaint</a>
          <a className="link-btn">Help</a>

          {/* SIGN IN BUTTON */}
          <button className="sign-btn" onClick={() => setShowAuth(true)}>
            Sign In
          </button>
        </nav>
      </header>

      <hr className="divider" />

      {/* MAIN CONTENT */}
      {!showComplaintPage && (
        <div className="content-area">
          
          {/* LEFT SIDE */}
          <div className="left-panel">
            <div className="welcome-card">
              <h2>
                Welcome to the <span>Voter Grievance Portal</span>
              </h2>
              <p>
                This portal helps citizens raise issues related to voter
                registration, polling stations, or election services.
              </p>

              {/* CLICK → NEW PAGE */}
              <button
                className="complaint-btn"
                onClick={() => setShowComplaintPage(true)}
              >
                Raise a complaint ➜
              </button>
            </div>

            <div className="menu-cards">
              <div className="menu-item">
                <span>Register To Vote</span>
                <button>➜</button>
              </div>

              <div className="menu-item">
                <span>Check Your Application Status</span>
                <button>➜</button>
              </div>

              <div className="menu-item">
                <span>Know Your Polling Booth</span>
                <button>➜</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-panel">
            <div className="officers">
              <div className="officer-box">
                <img src="https://via.placeholder.com/90x110?text=Photo" />
                <p>
                  Shri Gyanesh Kumar
                  <br />
                  <small>Chief Election Commissioner</small>
                </p>
              </div>

              <div className="officer-box">
                <img src="https://via.placeholder.com/90x110?text=Photo" />
                <p>
                  Dr. Sukhbir Singh Sandhu
                  <br />
                  <small>Election Commissioner</small>
                </p>
              </div>
            </div>

            <div className="video-card">
              <img src="https://via.placeholder.com/330x400?text=Campaign+Poster" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
