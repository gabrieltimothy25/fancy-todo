import React from "react";

export default function Home() {
  return (
    <div
      id="home-screen"
      className="justify-content-center align-items-center d-flex"
    >
      <div className="welcome-container">
        <h1 id="welcome-title">
          TodoScape
          <span id="underscore-title">_</span>
        </h1>
        <p id="welcome-subtitle">
          Never forget a thing. Your personal reminder on a moment's notice.
        </p>
        <button type="button" class="btn btn-outline-dark join-button">
          <h5 id="button-text">Join Now</h5>
        </button>
        <p id="sign-in-text">
          Already have an account? <span id="sign-in-phrase">Sign In</span>
        </p>
      </div>
    </div>
  );
}
