import React from "react";
import "./RaiseComplaint.css";

const RaiseComplaint = ({ onClose }) => {
  return (
    <div className="complaint-full-wrapper">

      {/* -------- SAME HEADER FROM Home.jsx -------- */}
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

          <a href="#" className="link-btn">Raise complaint</a>
          <a href="#" className="link-btn">Help</a>

          {/* CLOSE BUTTON → returns to home */}
          <button className="sign-btn" onClick={onClose}>Close</button>
        </nav>
      </header>

      <hr className="divider" />

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="complaint-wrapper">
        <div className="left-box">
          <div className="option">
            <div>
              <h3>Register Complaint</h3>
              <p>You can register your complaints here</p>
            </div>
            <button>➜</button>
          </div>

          <div className="divider-line"></div>

          <div className="option">
            <div>
              <h3>Track Status</h3>
              <p>You can track your complaints here</p>
            </div>
            <button>➜</button>
          </div>

          <div className="divider-line"></div>

          <div className="option">
            <div>
              <h3>Share Suggestion</h3>
              <p>You can share your suggestions here</p>
            </div>
            <button>➜</button>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently asked questions?</h2>

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="faq-card" key={i}>
              <div className="faq-question">
                <span>What is the Voter Grievance Portal?</span>
                <span>⌄</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RaiseComplaint;
