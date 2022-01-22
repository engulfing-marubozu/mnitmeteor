import React from "react";
import CardForPublishedAd from "./CardForPublishedAd";
import Slider from "react-slick";
import styled from "styled-components";
const arr = [1, 2, 3, 4, 5];
const slides1500 = arr.length >= 4 ? 4 : arr.length;
const slides1300 = arr.length >= 3 ? 3 : arr.length;
const slides800 = arr.length >= 2 ? 2 : arr.length;
const slides520 = arr.length >= 1 ? 1 : arr.length;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,}}
      onClick={onClick}
    />
  );
}

export const SliderContainer = styled.div`
  width: ${slides1500 * 260 + 40 * slides1500}px;
  margin: 0px auto 40px;

  @media (max-width: 1300px) {
    width: ${slides1300 * 260 + 20 * slides1300}px;
  }
  @media (max-width: 800px) {
    width: ${slides800 * 260 + 20 * slides800}px;
  }
  @media (max-width: 520px) {
    width: ${slides520 * 260 + 20 * slides520}px;
  }
`;

function PublishedAds() {
  var settings = {
    dots: true,
    className: "innerDiv",
    infinite: true,
    speed: 500,
    slidesToShow: slides1500,
    slidesToScroll: slides1500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: slides1300,
          slidesToScroll: slides1300,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: slides800,
          slidesToScroll: slides800,

          dots: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: slides520,
          slidesToScroll: slides520,
          dots: false,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {arr &&
          arr.map((data, index) => {
            return <CardForPublishedAd key={index} />;
          })}
      </Slider>
    </SliderContainer>
  );
}

export default PublishedAds;
