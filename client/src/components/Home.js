import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-family: "Roboto", sans-serif;
    }

`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Retro MUD</h1>
      <h3>
        A basic game Lambda School students built to put CS algorithms into
        practice.{" "}
      </h3>
      <h5>Play today!</h5>
    </HomeContainer>
  );
};

export default Home;
