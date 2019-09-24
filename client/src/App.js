import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';

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
    <AppContainer >
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
    </AppContainer>
  );
}

// Basic styling for the overall App 
const AppContainer = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Press Start 2P', cursive;
  `


const Header = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -230px;
  margin-bottom: 2%;
  padding-left: 80px;
  padding-right: 50px;
  padding-bottom: 1%;
  border-bottom: 2px dashed #f9f9f9;

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
