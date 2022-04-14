import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 70px;
  padding: 0px calc(2.5vw + 5px);

  &:after {
    content: "";
    inset: 0px;
    position: absolute;
    z-index: -1;
    background: url("/assets/images/home-background.png") center center / cover
      no-repeat fixed;
  }
`;
export default Home;
