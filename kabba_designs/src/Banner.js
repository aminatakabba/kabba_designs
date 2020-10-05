import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo from './img/logo.png'
import sample1 from './img/sample1.jpg';
import sample2 from './img/sample2.jpg';
import sample3 from './img/sample3.jpg';
import './Banner.css'

export default function CarouselComponent() {
    return (
        <div class="carousel__wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay class="carousel">
                <div class="carousel__container">
                    <img src={sample1} class="carousel__img"/>
                </div>
                <div class="carousel__container"> 
                    <img src={sample2} class="carousel__img"/>
                </div>
                <div class="carousel__container">
                    <img src={sample3} class="carousel__img"/>
                </div>
            </Carousel>
        </div>
    );
}