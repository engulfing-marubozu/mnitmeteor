import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeCardSkeleton from '../Cards/HomeCardSkeleton';
import {Box} from "@mui/material";

export default function CardSlider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
    return (
        <Box sx={{ margin:"0pxm auto" ,maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" } }} >
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {Array.from(new Array(10)).map((data, index) => {
                    return (
                        <HomeCardSkeleton key={index} />
                    )
                })
                }
            </Carousel>
        </Box>


    )
}



