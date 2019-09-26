import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../auth/axiosAuth';

function Display(){
    const [users, setUser] = useState([]);
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
      }, []);
console.log("USERS", users)
      return (
        <div>
            <h1>{users.name}</h1>
            <p>Please go N to start the game</p>
        </div>
      )
}

export default Display;