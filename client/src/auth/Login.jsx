import React, {useState} from "react"

import axios from "axios"

import styled from "styled-components";

const InputContainer = styled.section`
  width: 100%; 
  margin-top: 0%; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 

  input {
    border: 2px solid #59c2fe; 
    font-family: "Roboto", sans-serif;
    font-size: 80%; 
    width: 100%; 
    padding: 2%; 
    margin: 2%; 
  }

  button {
    font-family: 'Press Start 2P';
    width: 100%;
    padding: 5%;
    margin: 50px 5%;;
    background-color: #39ff14;
    border: 1px solid #39ff14;
    border-radius: 2px;

    &:hover {
      background-color: #59c2fe;
      border: 1px solid #59c2fe;
      color: #282c34;
    }
  }
`

function Login(props) {
    const [creds, setCreds] = useState({});
  
    const handleChange = e => {
      setCreds({
        ...creds,
        [e.target.name]: e.target.value
      });
    };
  
    const handleLogin = e => {
      e.preventDefault();
      axios
        .post(`https://teampheroku.herokuapp.com/api/login/`, creds)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          props.history.push("/gameplay");
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  
    return (
      <div className="Login-Page">
        <form className="login-form" onSubmit={handleLogin}>
          <InputContainer>
          <h1 className="Login-Title">Login</h1>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
          <button className="loginBtn">Login</button>
          </InputContainer>
        </form>
      </div>
    );
  }
  
  export default Login;