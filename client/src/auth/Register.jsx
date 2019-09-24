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

const Register = props => {
  // Hooks, setting state
  const [creds, setCreds] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const registerUser = newUser => {
    axios
      .post("http://localhost:8000/api/registration/", newUser)
      .then(res => {
        console.log("Response:", res.data);
        localStorage.setItem("token", res.data);
        //props.history.push('/')
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = e => {
    if (e) {
        e.preventDefault();
    registerUser(creds);
    }
  };

  return (
      <FormContainer>
    <Signup onSubmit={handleSubmit}>
      <input
        type="type"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={creds.username}
      />

      <input
        type="type"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={creds.email}
      />

      <input
        type="password"
        name="password1"
        placeholder="password1"
        onChange={handleChange}
        value={creds.password1}
      />

      <input
        type="password"
        name="password2"
        placeholder="password2"
        onChange={handleChange}
        value={creds.password2}
      />

      <button type="submit">Register</button>
    </Signup>
    </FormContainer>
  );
};

export default Register;
