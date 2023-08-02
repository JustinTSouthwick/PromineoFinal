import React from "react";
import { Carousel } from 'react-bootstrap';


export default function Top3Carousel() {
    return (
        <Carousel className="carousel">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require('../assets/fendercarousel.jpg')}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 style={{color: 'white'}}>Fender Guitars</h5>
            <p style={{color: 'white'}}>Photo by <a href="https://unsplash.com/@toyamakanna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">戸山 神奈</a> on <a href="https://unsplash.com/photos/s5EWVSKiiQ0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require('../assets/ibanezcarousel.jpg')}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 style={{color: 'white'}}>Ibanez Guitars</h5>
            <p style={{color: 'white'}}>Image by <a href="https://pixabay.com/users/aetaylor-2497217/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7815037">Alan Taylor</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7815037">Pixabay</a></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require('../assets/martincarousel.jpg')}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 style={{color: 'white'}}>Martin Guitars</h5>
            <p style={{color: 'white'}}>Photo by <a href="https://unsplash.com/@dannybarness?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Barnes</a> on <a href="https://unsplash.com/photos/o9ar0kiNq2o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}