import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import image3 from "../_Styling/Images/image3.png";
import image4 from "../_Styling/Images/image4.png";
import image5 from "../_Styling/Images/image5.png";
import {
  BackgoundBox,
  MainTextBox,
  SmallTextBox,
  TextContainer,
} from "./homePageStyling";
export default function FrontBanner() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <BackgoundBox image={image3}>
            <TextContainer>
              <MainTextBox>Buy & Sell </MainTextBox>
              <SmallTextBox>
                Save money and efforts by directly buying and selling in the campus.
              </SmallTextBox>
            </TextContainer>
          </BackgoundBox>
        </div>
        <div className="keen-slider__slide number-slide2">
          <BackgoundBox image={image4}>
            <TextContainer>
              <MainTextBox>Community </MainTextBox>
              <SmallTextBox>
              Undertake projects, find teammates, ask queries. Whole new community experience at meteor.
              </SmallTextBox>
            </TextContainer>
          </BackgoundBox>
        </div>
        <div className="keen-slider__slide number-slide3">
          <BackgoundBox image={image5}>
            <TextContainer>
              <MainTextBox>Find what's lost</MainTextBox>
              <SmallTextBox>
                Finding lost item is quicker than ever with the seamless lost & found section. 
              </SmallTextBox>
            </TextContainer>
          </BackgoundBox>
        </div>
      </div>
    </>
  );
}
