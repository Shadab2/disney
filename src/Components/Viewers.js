import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/assets/images/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img
          src="/assets/images/viewers-national.png"
          alt="national geogrphic"
        />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/videos/geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 25px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: -4px 7px 20px 3px rgba(0, 0, 0, 0.64);
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 2px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    inset: 0;
    height: 100%;
    opacity: 1;
    z-index: 1;
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  &:hover {
    box-shadow: -4px 7px 20px 3px rgba(0, 0, 0, 0.64);
    transform: scale(1.05);
    border: 2px solid rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
