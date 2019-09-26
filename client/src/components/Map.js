import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  MarkSeries,
  FlexibleXYPlot,
  VerticalBarSeries
} from "react-vis";

import axiosWithAuth from "../auth/axiosAuth";

function Map({ currentRoom }) {
  // Clearing our state
  const [rooms, setRooms] = useState([]);
  const [data, setData] = useState([]);

  // Making axios call, useEffect more efficient with size of our data
  // Replaces componentDidMount
  useEffect(() => {
    // Only render maps if authorized (header there)
    // axiosWithAuth()
    //   .get("https://teampheroku.herokuapp.com/api/adv/initialize")
    //   .then(res => {
    //     //console.log(res)
    //     //Affecting state with response from server
    //     setRooms(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/rooms")
      .then(res => {
        //console.log(res)
        // Affecting state with response from server
        console.log(res.data)
        let dataArray = []

        {res.data.map(room => {
          let x = room.fields.x
          let y = room.fields.y
          return dataArray.push({'x': x, 'y': y})
        })}
        
        console.log("DATA ARRAY AFTER MAP", dataArray)
        setRooms(dataArray)
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // Square braces stop an infinite loop
  console.log(rooms);

  return (
    <Container>
      <ID>
        <FlexibleXYPlot width={700} height={700}>
          <MarkSeries data={rooms} />
          {/* <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={[{x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}]} /> */}
          {/*
          <LineSeries
            color="red"
            data= {[{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]}
          />
          */}
        </FlexibleXYPlot>
      </ID>
    </Container>
  );
}

export default Map;

const Container = styled.section`
  width: 100%;
  height: 0 auto;
  display: flex;
  justify-content: center;
`;

const ID = styled.div`
  border: 5px dashed #fe50c2;
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;
