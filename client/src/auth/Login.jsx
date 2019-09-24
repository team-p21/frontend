import React, {useState} from "react"

import axios from "axios"

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
        .post(`https://mud-be.herokuapp.com/api/login/`, creds)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          props.history.push("/protected");
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  
    return (
      <div className="Login-Page">
        <form className="login-form" onSubmit={handleLogin}>
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
        </form>
      </div>
    );
  }
  
  export default Login;