import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselHome() {
  return(
    <div className="intro intro-carousel">
        <Carousel>
          <Carousel.Item>
            <img className="background-image" src="./assets/images/slide-1.jpg" alt="First Slide" />
            <Carousel.Caption>
              <h1 className="intro-title mb-4">
                Image #1
              </h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="./assets/images/slide-2.jpg" alt="Second Slide" />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Paragraph 1 123 123 123 123 123 123 123</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="./assets/images/slide-3.jpg" alt="Third Slide" />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Paragraph 1 123 123 123 123 123 123 123</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselHome;
