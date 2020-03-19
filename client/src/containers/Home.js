import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div className="justify-content-center align-items-center d-flex home-screens">
      <div className="welcome-container">
        <h1 id="welcome-title">
          TodoScape
          <span id="underscore-title">_</span>
        </h1>
        <p id="welcome-subtitle">
          Never forget a thing. Your personal reminder on a moment's notice.
        </p>
        <button
          type="button"
          className="btn btn-outline-dark join-button"
          onClick={() => history.push("/signup")}
        >
          <h5 id="button-text">Join Now</h5>
        </button>
        <p id="sign-in-text">
          Already have an account?{" "}
          <span id="sign-in-phrase">
            <Link to="/signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
