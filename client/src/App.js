import React from "react";
import { Route, withRouter } from "react-router-dom";
import styled from 'styled-components';

import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";
import Header from "./components/Header"; 
// Testing rooms 
import Rooms from "./components/Rooms"; 
import Map from "./components/Map";
import PrivateRoute from './components/PrivateRoute';


function App(props) {
  
  return (
    <>
  <Header />
    <AppContainer >
    <div className="App">
      
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map" component={Map} />  
      {/* <PrivateRoute exact path='/gameplay' component={Game} /> */}
    </div>
    </AppContainer>
    </>
  );
}

// Basic styling for the overall App 
const AppContainer = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Press Start 2P', cursive;
`;


export default withRouter(App);
