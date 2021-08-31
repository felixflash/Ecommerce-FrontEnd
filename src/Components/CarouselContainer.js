import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1  from './slide1.png'
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import slide4 from './slide4.png'
import slide5 from './slide5.png'
import slide6 from './slide6.png'



const CarouselContainer = () => {
  return (
      <section id="caros">
          <div className="container-fluid bg-white">
    <Carousel fade={false} pause={false}>
      <Carousel.Item interval={4000}>
      <img  className="caro-image" src={slide1}  class="d-block " alt="laptop"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img className="caro-image " src={slide2}  class="d-block " alt="phone"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img className="caro-image " src={slide3}  class="d-block " alt="phone"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img className="caro-image " src={slide4}  class="d-block " alt="phone"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img className="caro-image " src={slide5}  class="d-block " alt="phone"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img className="caro-image " src={slide6}  class="d-block " alt="phone"/>
      </Carousel.Item>

  
    </Carousel>
    </div>
    </section>
  )
}

export default CarouselContainer;