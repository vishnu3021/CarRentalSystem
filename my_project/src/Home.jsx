import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import React from 'react';


function Home() {
  return (
    <div>
    <Carousel data-bs-theme="primary">
      <Carousel.Item>
        <img
          className='d-block w-100 img'
          src="https://media.autoexpress.co.uk/image/private/s--dsad6H7D--/v1562247060/autoexpress/2018/11/2twin.jpg"
          alt="First slide" height="10%"
        />
        <Carousel.Caption>
          <h5>Bentley Continental GT</h5>
          <p className='carintro'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img'
        
          src="https://www.motortrend.com/uploads/2022/11/2024-audi-q8-sportback-front-three-quarter.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Audi e-tron GT Concept</h5>
          <p className='carintro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="https://www.teslarati.com/wp-content/uploads/2022/09/Tiago-EV-Charging-scaled.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>EV Vechile</h5>
          <p className='carintro'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </div>
  );
}

export default Home;