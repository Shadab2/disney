import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Originals() {
  return (
    <Container>
      <h2>Originals</h2>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_payoff-18191_8c0c935b.jpeg?region=0%2C0%2C540%2C810"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/05/cruella_ver9_xxlg.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZmVhMWIxN2UtNGI4OC00ZWRlLTliYWItYTI5ZTcyOWQ1OTlmXkEyXkFqcGdeQXVyMjk2MTQxMzg@._V1_.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://sportshub.cbsistatic.com/i/2021/11/10/bb8f0fee-624a-4f78-aff1-d82042277cbb/marvel-hawkeye-tv-series-christmas-poster.jpg?auto=webp&width=1080&height=1350&crop=0.8:1,smart"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://cdn.vox-cdn.com/thumbor/oNf9-YF5pbXsBRzXUH5QREznJqs=/0x0:1687x2500/1200x0/filters:focal(0x0:1687x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22382443/Loki_Digital_KeyArt_Teaser_v4_Lg.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://i.pinimg.com/originals/2c/4f/98/2c4f98572edcce7f10239140cad944a6.jpg"
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
export default Originals;
