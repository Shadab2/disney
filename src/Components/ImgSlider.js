import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <div>
          <img src="/assets/images/slider-badag.jpg" alt="" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/assets/images/slider-badging.jpg" alt="" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/assets/images/slider-scale.jpg" alt="" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/assets/images/slider-scales.jpg" alt="" />
        </div>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    z-index: 1;
    opacity: 0;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer
  position: relative;
  

  div {
    border-radius: 4px;
    box-shadow: -4px 7px 20px 3px rgba(0, 0, 0, 0.64);
    display: block;
    padding: 4px;
    cursor:pointer;
    img {
      width: 100%;
      height: 100%;
    }
    
  &:hover{
    border:4px solid rgb(249,249,249,0.8);
    padding:0;
  }
  }
`;

export default ImgSlider;
