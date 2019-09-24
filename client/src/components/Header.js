// Creating a Header component, because we want it to look identical on every page it's used: Home, Login, Register, and beyond 

// Importing depdencies 
import React from 'react'; 
import styled from 'styled-components'; 

// Importing NavLinks
import {NavLink} from 'react-router-dom'; 

const Header = (props) => {

    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem("key");
        props.history.push("/");
      };

    return (
        <div>
        <HeaderStyle >
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
        </HeaderStyle>
        </div>
        
    )
}

// Styled components 
const HeaderStyle = styled.section`
  width: 0 auto;
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
`

export default Header; 