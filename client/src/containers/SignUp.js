import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function UserEntry() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: process.env.REACT_APP_URL + "/users/signup",
      data: {
        username,
        password
      }
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(console.log);
  };

  return (
    <div className="home-screens d-flex justify-content-center align-items-center">
      <div className="user-entry-container">
        <h1
          style={{
            fontSize: "53px",
            textAlign: "center",
            marginBottom: "2rem"
          }}
        >
          Welcome.
        </h1>
        <p style={{ marginBottom: "2rem", textAlign: "center" }}>
          Already have an account?{" "}
          <span id="sign-in-phrase">
            <Link to="/signin">Sign In</Link>
          </span>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              placeholder="Enter username..."
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter password..."
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            <small
              className="form-text text-muted"
              style={{ marginTop: "0.8rem" }}
            >
              Password should at least be 8 characters long.
            </small>
          </div>
          <hr />
          <button
            onClick={e => handleFormSubmit(e)}
            className="btn btn-primary submit-btn"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
