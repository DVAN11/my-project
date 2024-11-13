import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import Team from '../Home/Team/Team';
import './About.css';

const About = () => {
  return (
      <div className="about-page">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Discover the essence of Japanese dining at our restaurant</p>
      </div>

      <Container>
        <section className="about-section">
          <Row>
            <Col md={6} className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a deep passion for Japanese cuisine, our restaurant brings the art of
                Japanese dining to the heart of our city. Over the years, we've dedicated ourselves to
                crafting dishes that honor traditional techniques and flavors while infusing a touch
                of modern creativity.
              </p>
            </Col>
            <Col md={6}>
              <Image src="https://yensushisake.vn/wp-content/uploads/2023/06/YENSAKEPUB-30TS-21-09-2022-DUCPHAMFOTO-0934257244-13_2-min.jpg" alt="Our story" fluid className="history-image" />
            </Col>
          </Row>
        </section>

        <section className="about-section">
          <Row>
            <Col md={6} className="about-text">
              <h2>Our Mission</h2>
              <p>
                We aim to offer an authentic experience that celebrates the rich heritage of Japanese
                cuisine. Our commitment to quality, freshness, and customer satisfaction ensures
                every meal is a memorable experience.
              </p>
            </Col>
            <Col md={6}>
              <Image src="https://th.bing.com/th/id/OIP.6yxV2aFPXyPumzZkiF8H9AHaE7?w=292&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Our mission" fluid className="mission-image" />
            </Col>
          </Row>
        </section>

        <section className="about-section why-choose-us">
          <h2>Why Choose Us</h2>
          <Row>
            <Col md={4} className="why-choose-item">
              <img src="https://th.bing.com/th/id/OIP.AxWIKHMpZLq4V9pNezz43gHaEL?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Fresh Ingredients" className="icon" />
              <h4>Fresh Ingredients</h4>
              <p>Our dishes are made with fresh and high-quality ingredients, ensuring authentic flavors in every bite.</p>
            </Col>
            <Col md={4} className="why-choose-item">
              <img src="https://th.bing.com/th/id/OIP.bY-GTxSmCWt-eLhElDqOmAHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Skilled Chefs" className="icon" />
              <h4>Skilled Chefs</h4>
              <p>Our chefs are trained in traditional Japanese cooking techniques to bring the best experience.</p>
            </Col>
            <Col md={4} className="why-choose-item">
              <img src="https://hatoyama.vn/wp-content/uploads/2017/09/TANG-1-ANH-4.jpg" alt="Cozy Ambiance" className="icon" />
              <h4>Cozy Ambiance</h4>
              <p>Enjoy your meal in a warm and inviting atmosphere that reflects Japanese culture.</p>
            </Col>
          </Row>
        </section>

        <section className="about-section">
          <h2>Our Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <Image src="https://20sfvn.com/wp-content/uploads/2022/09/thiet-ke-nha-hang-phong-cach-nhat-ban.jpeg" alt="Dish 1" className="gallery-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://digifood.vn/blog/wp-content/uploads/2021/07/nha-hang-nhat-dao-tan-5.jpg" alt="Dish 2" className="gallery-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/42238430.jpg?k=38e5a65a46d9400a700975b5a670d4f74fcd9068be9c9246bd6eed0546c694ba&o=&s=1024x" alt="Restaurant Interior" className="gallery-image" />
            </Carousel.Item>
          </Carousel>
        </section>

        <Team />
      </Container>
    </div>
  );
};

export default About;
