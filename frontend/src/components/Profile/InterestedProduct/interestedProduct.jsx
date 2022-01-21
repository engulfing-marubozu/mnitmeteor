import React from "react";
import CardForInterestedProduct from "./CardForInterestedProduct";
import Slider from "react-slick";
import styled from "styled-components";
export const SliderContainer = styled.div`
  width: 1200px;
  margin:0px auto 40px;

  @media (max-width: 1300px) {
    width: 820px;
  }
  @media (max-width: 800px) {
    width: 560px;
  }
  @media (max-width: 520px) {
    width: 280px;
  }
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8,9];
function InterestedProduct() {
  var settings = {
    dots: true,
    className: "innerDiv",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

          dots: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            return <CardForInterestedProduct key={index} />;
          })}
      </Slider>
    </SliderContainer>
  );
}
export default InterestedProduct;
