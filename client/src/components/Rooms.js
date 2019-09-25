import React, { useState, useEffect } from "react"; 
import styled from "styled-components"; 

import axiosWithAuth from '../auth/axiosAuth'; 


// Import the data from what backend created 
// Loop through rooms, conditionally render based on directional information
// E.g. if there's an exit, draw a 1px border 

function Rooms () {
    // Clearing our state 
    const [rooms, setRooms] = useState([]); 

    // Making axios call, useEffect more efficient with size of our data  
    useEffect(() => {
        // Only render maps if authorized (header there)
        axiosWithAuth()
        .get("https://teampheroku.herokuapp.com/api/adv/rooms")
        .then(res => {
            console.log(res)  
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // Square braces stop an infinite loop 
    
    return (
        <h1>Hello!</h1>
    )
}

export default Rooms; 