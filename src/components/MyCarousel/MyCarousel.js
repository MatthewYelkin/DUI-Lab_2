import React from 'react';
import {Carousel} from "react-bootstrap";
import "./MyCarousel.css"

const MyCarousel = ({singer, albums}) => {
    return (
        <div className="MyCarousel_wrapper">
            <Carousel data-bs-theme="dark" interval={null} className="works-carousel">
                {albums.map((title, index) =>
                    <Carousel.Item key={index}>
                        <img
                            className="carousel-image"
                            src={require(`../../img/singers/albums/${singer}/${index+1}.png`)}
                            alt={`${title} album photo`}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p>{title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

export default MyCarousel;