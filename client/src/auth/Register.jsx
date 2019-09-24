import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const FormContainer = styled.section`
    margin: 0 auto;
    padding: 7.5%;
    border-radius: 5px;
    border: 2px solid red;
`;

const Signup = styled.form`
    display: flex;
    flex-direction: column;
    margin: 8%;

    input {
        width: 100%;
        padding: 5% 5px;
        margin: 5% ;
        border: 1px solid red;
        border-radius: 5px;
    }

    button {
        width: 110%;
        padding: 5% 5px;
        margin: 5%;
        border: 1px solid red;
        border-radius: 5px; 
    }
`;

function Register(props) {
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
        .post(`https://teampheroku.herokuapp.com/api/registration/`, creds)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          props.history.push('/gameplay')
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  
    return (
      <div className="Login-Page">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="Login-Title">Register</h1>
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
            name="password1"
            value={creds.password1}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="password2"
            value={creds.password2}
            onChange={handleChange}
          />
          <button className="registerBtn">Register</button>
        </form>
      </div>
    );
  }
  
  export default Register;
