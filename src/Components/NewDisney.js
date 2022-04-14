import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NewDisney() {
  return (
    <Container>
      <h2>New To Disney++</h2>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://media.newyorker.com/photos/5b23e1b240328426ed9a8b49/master/pass/Lane-Incredibles-2.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://cdn.thetealmango.com/wp-content/uploads/2021/09/toyy.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/assets/images/recommend.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/assets/images/recommend.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/assets/images/recommend.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/assets/images/recommend.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/assets/images/recommend.jpg" alt="" />
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
export default NewDisney;
