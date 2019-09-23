import React, {useState} from "react"

import axios from "axios"

const Login = props => {
    // Hooks, setting state 
    const [creds, setCreds] = useState({username: "", password1: "", password2: ""}); 
    
    const handleChange = e => {
        setCreds({...creds, [e.target.name]:[e.target.value]})
    } 

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://lambda-mud-test.herokuapp.com/api/login/", creds)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
        })
        .catch(
            err => 
            console.log(err.response)
        )
    }

    return(
        <form onSubmit= {handleSubmit}>
            <input
            type= "type" 
            name= "username"
            placeholder= "username"
            onChange= {handleChange}
            value= {creds.username}
            /> 

            <input
                type= "type" 
                name= "password1"
                placeholder= "password1"
                onChange= {handleChange}
                value= {creds.password1}
            /> 

            <input
                type= "type" 
                name= "password2"
                placeholder= "password2"
                onChange= {handleChange}
                value= {creds.password2}
            /> 

            <button type= "submit">
                Login
            </button>

        </form>  
    )
}

export default Login 