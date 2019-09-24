import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

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
          props.history.push('/protected')
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
