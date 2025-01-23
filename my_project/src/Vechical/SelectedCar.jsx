import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {Link } from 'react-router-dom';

export default function SelectedCar( props ) {
  console.log(props.image)
    return (
        <div >
            {/* <h2>Selected Car</h2> */}
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. price{props.price}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <Link to ={`/carrents/${props.brand}`} style={{textDecoration:"none"}}>  <Button variant="primary">Go somewhere</Button></Link> */}

        </div>
    );
}
