import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>
        <Switch>
          <Route path="/dashboard">
            <h1>This is dashboard</h1>
          </Route>
          <Route path="/signin">
            <h1>This is signin</h1>
          </Route>
          <Route path="/signup">
            <h1>This is signup</h1>
          </Route>
          <Route path="/">
            <h1>This is Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
