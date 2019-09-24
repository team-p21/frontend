import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";

function App(props) {
  const logOut = e => {
    e.preventDefault();
    localStorage.removeItem("key");
    props.history.push("/");
  };
  return (
    <div className="App">
      <header className="App-header">
        {!localStorage.getItem("key") && (
          <>
            <NavLink to="/login">Login</NavLink>    

          <NavLink to="/register">Register</NavLink>
        </>
        
        )}
        <NavLink to="protected">New Game</NavLink>
        <button
          className={
            localStorage.getItem("key") ? "loginOutBtn" : "displayNone"
          }
          onClick={logOut}
        >
          Logout
        </button>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default withRouter(App);
