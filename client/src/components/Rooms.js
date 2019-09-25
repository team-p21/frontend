import React, { useState, useEffect } from "react"; 
import styled from "styled-components"; 

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

import axiosWithAuth from '../auth/axiosAuth'; 

function Rooms ({currentRoom}) {
    // Clearing our state 
    const [rooms, setRooms] = useState([]); 

    // Making axios call, useEffect more efficient with size of our data 
    // Replaces componentDidMount 
    useEffect(() => {
        // Only render maps if authorized (header there)
        axiosWithAuth()
        .get("https://teampheroku.herokuapp.com/api/adv/rooms")
        .then(res => {
            // console.log(res)
            // Affecting state with response from server 
            setRooms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // Square braces stop an infinite loop 
    
    console.log(rooms)
    return (
        
        <div>
            <h1>Hello!</h1> 
            <XYPlot
                width={300}
                height={300}>
            <HorizontalGridLines />
            <LineSeries
                data={[
                    rooms.cords
                ]}/>
            <XAxis />
            <YAxis />
            </XYPlot>
        </div>  
        
    )
}

export default Rooms; 

// Comments 

/* // Loop through rooms (something like rooms.map), conditionally render based on direction 
            // Description tells us what drection we can go 
            // If currentRoom.room_direction is E, draw 1px red 
                // Else W, draw 1px blue 
                // Else N, draw 1px green  */
        /* <XYPlot
            width={300}
            height={300}>
        <HorizontalGridLines />
            <LineSeries
                {rooms.cords.map(currentRoom => )}/>
            <XAxis />
            <YAxis />
        </XYPlot>  */
        /* {rooms.map(room => {
            let [x, y] = room.cords 
            if (room.cords == currentRoom) {
                return room.cords; 
            }
        })} */