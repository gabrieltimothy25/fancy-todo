import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

export default function App() {
  return (
    <Router>
      <div>
        <div className="d-flex justify-content-center">
          <p
            style={{
              position: "absolute",
              fontSize: "15px"
            }}
          >
            &copy; Gabriel Timothy | 2020
          </p>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">signin</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
