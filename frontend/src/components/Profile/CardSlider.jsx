import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import HomeCardSkeleton from '../Cards/HomeCardSkeleton';
import { Box } from "@mui/material";
// import DiscusssionHomePageCard from '../Discussions/DiscusssionHomePageCard';


export default function CardSlider({ children }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 900, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
    }
    return (
        <Box sx={{ margin: "0rem auto", maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" }, }} >
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5" 
                // transitionDuration={1000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {Array.from(new Array(10)).map((data, index) => {
                    return (
                        // <HomeCardSkeleton key={index} />
                        <Box key={index}>
                            {children}
                        </Box>


                    )
                })
                }
            </Carousel>
        </Box>

    )
}



