import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from "../../Cards/Images/Image1.jfif"
import Image2 from "../../Cards/Images/Image2.jfif"
import Image3 from "../../Cards/Images/Image3.jfif"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class LazyLoad extends Component {
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };
        return (
            <div>
                <Slider {...settings}>
                    <div >
                        <img src={"https://source.unsplash.com/random"} alt="cycle" />
                    </div>
                    <div >
                        <img src={"https://source.unsplash.com/random"} alt="cylce" />
                    </div>
                    <div >
                        <img src={"https://source.unsplash.com/random"} alt="cycle" />
                    </div>
                </Slider>
            </div>
        );
    }
}