import React, {useState} from "react"

import axios from "axios"

const Register = props => {
    // Hooks, setting state 
    const [creds, setCreds] = useState({username: "", email: "", password1: "", password2: ""}); 
    
    const handleChange = e => {
        setCreds({...creds, [e.target.name]:[e.target.value]})
    } 

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://lambda-mud-test.herokuapp.com/api/register/", creds)
        .then(res => {
            console.log("Response:", res)
            localStorage.setItem("token", res.data.key)
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
                name= "email"
                placeholder= "email"
                onChange= {handleChange}
                value= {creds.email}
            /> 

            <input
                type= "password" 
                name= "password1"
                placeholder= "password1"
                onChange= {handleChange}
                value= {creds.password1}
            /> 

            <input
                type= "password" 
                name= "password2"
                placeholder= "password2"
                onChange= {handleChange}
                value= {creds.password2}
            /> 

            <button type= "submit">
                Register
            </button>

        </form>  
    )
}

export default Register 