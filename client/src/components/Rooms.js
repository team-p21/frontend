import React, { useState, useEffect } from "react"; 
import styled from "styled-components"; 


import axiosWithAuth from '../auth/axiosAuth'; 

function Rooms ({currentRoom}) {
    // Clearing our state 
    const [rooms, setRooms] = useState([]); 
    const [map, setMap] = useState([]);

    // Making axios call, useEffect more efficient with size of our data 
    // Replaces componentDidMount 
    useEffect(() => {
        // Only render maps if authorized (header there)
        axiosWithAuth()
        .get("https://teampheroku.herokuapp.com/api/adv/initialize")
        .then(res => {
            console.log("Init:", res)
            // Affecting state with response from server 
            setMap(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        // axiosWithAuth()
        // .get("https://teampheroku.herokuapp.com/api/adv/rooms")
        // .then(res => {
        //     // console.log(res)
        //     // Affecting state with response from server 
        //     setRooms(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }, []) // Square braces stop an infinite loop 
    
        console.log(map)
    return (
        <h1>hi</h1>
        // <>
        // {rooms.map(room => {
        //     return console.log(room.id)
        // })}
        // </> 
        
    )
}

export default Rooms; 

