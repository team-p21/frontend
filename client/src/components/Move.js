// import React, { useState, useEffect } from 'react';
// import authWithAxios from '../auth/axiosAuth';

// function Move(props) {
//   const [moves, setMove] = useState([])
//   // const [moving, setMoving] = useState(false)

//   // useEffect(() => {
//   //   setMoving(props.moving)
//   // }, [moving]);
  
//   const move = direction => {
//     authWithAxios()
//         .post("https://teampheroku.herokuapp.com/api/adv/move", direction)
//         .then(res => {
//             console.log("MOVE", res.data)
//             setMove(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//   }
            
//     return (
//       <>
//         <h1>Move</h1>
//         <button onClick={() => move({"direction":"n"})}>Move North </button> 
//         <button onClick={() => move({"direction":"s"})}>Move South </button> 
//         <button onClick={() => move({"direction":"e"})}>Move East </button> 
//         <button onClick={() => move({"direction":"w"})}>Move West </button>
//       </>
//     )
// }
// {/*{"direction":"n"}*/}
// export default Move;