import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineSeries,
  MarkSeries,
  FlexibleXYPlot,
} from "react-vis";

import axiosWithAuth from "../auth/axiosAuth";
import Move from './Move';

function Map({ currentRoom }) {
  // Clearing our state
  const [rooms, setRooms] = useState([]);
  const [roads, setRoads] = useState([]);
  const [users, setUser] = useState([]);
  const [trackID, setTrackID] = useState(0)

  // Making axios call, useEffect more efficient with size of our data
  // Replaces componentDidMount
  useEffect(() => {
    //Only render maps if authorized (header there)
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/initialize")
      .then(res => {
        //console.log(res)
        //Affecting state with response from server
        console.log("Data:", res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/rooms")
      .then(res => {
        //console.log(res)
        // Affecting state with response from server
        console.log(res.data);
        let dataArray = [];
        {
          res.data.map(room => {
            let x = room.fields.x;
            let y = room.fields.y;
            return dataArray.push({ x: x, y: y });
          });
        }

        // {1,2},{2,4}

        let roads = [];
        for (let i = 0; i < res.data.length - 1; i++) {
          let xFirst = res.data[i].fields.x;
          let yFirst = res.data[i].fields.y;
          let xSecond = res.data[i + 1].fields.x;
          let ySecond = res.data[i + 1].fields.y;
          // [{1,2},{1,2}]
          roads.push([{ x: xFirst, y: yFirst }, { x: xSecond, y: ySecond }]);
        }
        console.log(roads);
        setRoads(roads);

        console.log("DATA ARRAY AFTER MAP", dataArray);
        setRooms(dataArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // Square braces stop an infinite loop
  console.log(rooms);

  const move = direction => {
    axiosWithAuth()
      .post("https://teampheroku.herokuapp.com/api/adv/move", direction)
      .then(res => {
        console.log("MOVE", res.data)
        setTrackID(res.data.track_id)
        console.log(trackID)
      })
      .catch(err => {
        console.log(err)
      })
    axiosWithAuth()
      .get("https://teampheroku.herokuapp.com/api/adv/initialize")
      .then(res => {
        //console.log(res)
        //Affecting state with response from server
        console.log("Data:", res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Container>
      <ID>
        <FlexibleXYPlot width={500} height={500}>
          <MarkSeries data={rooms} />
          <MarkSeries data={users.cords} color="yellow" />
          {roads.map(road => {
            return <LineSeries data={road} color="#59c2fe" />;
          })}
          {/* <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={} /> */}
          {/*
          <LineSeries
            color="red"
            data= {[{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]}
          />
          */}
        </FlexibleXYPlot>

      </ID>
      <div>
        <h1>Welcome {users.name}!</h1>
        <p>Please travel {users.room_direction} to continue</p>
      </div>

      <div>
        <h1>Move</h1>
        <button onClick={() => move({ "direction": "n" })}>Move North </button>
        <button onClick={() => move({ "direction": "s" })}>Move South </button>
        <button onClick={() => move({ "direction": "e" })}>Move East </button>
        <button onClick={() => move({ "direction": "w" })}>Move West </button>
      </div>
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
  width: 100%;
  margin-right: 5%;
`;
