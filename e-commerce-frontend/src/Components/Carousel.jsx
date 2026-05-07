import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="https://tse3.mm.bing.net/th/id/OIP.gfwRnYycPq_c0FRH0-10XAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="https://c8.alamy.com/comp/2J5A49J/e-commerce-ecommerce-web-banner-on-violet-background-various-shopping-icons-online-shopping-concept-2J5A49J.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="https://th.bing.com/th/id/OIP.TU8jc0GlR9OJiEdB-6A0qAHaEO?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;