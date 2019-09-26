import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axiosWithAuth from "../auth/axiosAuth";


function Map({ currentRoom }) {
  // Clearing our state
  const [rooms, setRooms] = useState([]);

  // Making axios call, useEffect more efficient with size of our data
  // Replaces componentDidMount
  useEffect(() => {
    // Only render maps if authorized (header there)
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/initialize")
      .then(res => {
        // console.log(res)
        // Affecting state with response from server
        setRooms(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/rooms")
      .then(res => {
        //console.log(res)
        // Affecting state with response from server
        setRooms(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // Square braces stop an infinite loop
console.log(rooms);
  return (
      <>
        <h1>Wow</h1>
      </>
  );
}

export default Map;

