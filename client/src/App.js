import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';
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
      <Header>
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
      </Header>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
}

const Header = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -193px;
  padding-left: 80px;
  padding-right: 50px;

  a {
    color: #59c2fe;
    text-decoration: none;

    &:hover {
      color: #c2fe59;
    }
  }

  button {
    font-family: 'Press Start 2P';
    width: 15%;
    padding: 1%;
    margin: 1%;
    background-color: #59c2fe;
    border: 1px solid #59c2fe;
    border-radius: 2px;

    &:hover {
      background-color: #39ff14;
      border: 1px solid #39ff14;
      color: #282c34;
    }
  }
`;

export default withRouter(App);
