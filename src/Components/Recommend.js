import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Recommend() {
  return (
    <Container>
      <h2>Recommended for You</h2>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://scrapsfromtheloft.com/wp-content/uploads/2021/03/Raya-and-the-Last-Dragon-2021-e1615243289520.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/503/919/646/movie-black-widow-taskmaster-marvel-comics-hd-wallpaper-preview.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://allcareer24.com/wp-content/uploads/2021/06/Jungle-Cruise-on-Theater-and-Disney-.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://cdn.wallpapersafari.com/6/45/QDx4gk.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://w0.peakpx.com/wallpaper/781/791/HD-wallpaper-thor-the-dark-world-chris-hemsworth-hammer.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="http://www.hdwallpaperslife.com/wp-content/uploads/2019/06/onward_2020_animation_pixar_4k-3840x2160.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://images.hdqwalls.com/wallpapers/poster-avengers-endgame-ni.jpg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 25px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: -4px 7px 20px 3px rgba(0, 0, 0, 0.64);
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgb(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 1px solid rgb(249, 249, 249, 0.7);
    box-shadow: -4px 7px 20px 3px rgba(0, 0, 0, 0.64);
  }
`;
export default Recommend;
