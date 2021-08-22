import React from 'react';
import { Carousel } from 'react-bootstrap';



const CarouselContainer = () => {
  return (
      <section id="caros">
          <div className="container-fluid bg-secondary">
    <Carousel fade={false} pause={false}>
      <Carousel.Item interval={4000}>
      <img  className="caro-imageone" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ZenBook_13_UM325UA_SA_Product_photo_2G_Pine_Grey_05_NumberPad.png" class="d-block w-50" alt="laptop"/>
        <Carousel.Caption>
          <h3>Laptops</h3>
          <p>Quality And affordable Products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="caro-image " src="https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_6s_-_Space_Grey_dc89827a-529c-4f2a-8f9a-7d523f8b245b_2000x.png?v=1578414793" class="d-block w-50" alt="phone"/>
        <Carousel.Caption>
          <h3>Phones</h3>
          <p>Look no where for the Best.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img  className="caro-image" src="https://cdn.vox-cdn.com/thumbor/bRX-3rGxrIJwbIwiKu7EGKCCuhE=/0x0:2000x1126/1200x800/filters:focal(840x403:1160x723)/cdn.vox-cdn.com/uploads/chorus_image/image/63108794/IdeaPad_S540___6.0.png" class="d-block w-75" alt="laptop"/>        <Carousel.Caption>
          <h3>Laptops</h3>
          <p>It's all About You.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </section>
  )
}

export default CarouselContainer;