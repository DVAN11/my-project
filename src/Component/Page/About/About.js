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
              <Image src="history-image.jpg" alt="Our story" fluid className="history-image" />
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
              <Image src="mission-image.jpg" alt="Our mission" fluid className="mission-image" />
            </Col>
          </Row>
        </section>

        <section className="about-section why-choose-us">
          <h2>Why Choose Us</h2>
          <Row>
            <Col md={4} className="why-choose-item">
              <Image src="fresh-ingredients-icon.png" alt="Fresh Ingredients" className="icon" />
              <h4>Fresh Ingredients</h4>
              <p>Our dishes are made with fresh and high-quality ingredients, ensuring authentic flavors in every bite.</p>
            </Col>
            <Col md={4} className="why-choose-item">
              <Image src="skilled-chefs-icon.png" alt="Skilled Chefs" className="icon" />
              <h4>Skilled Chefs</h4>
              <p>Our chefs are trained in traditional Japanese cooking techniques to bring the best experience.</p>
            </Col>
            <Col md={4} className="why-choose-item">
              <Image src="cozy-ambiance-icon.png" alt="Cozy Ambiance" className="icon" />
              <h4>Cozy Ambiance</h4>
              <p>Enjoy your meal in a warm and inviting atmosphere that reflects Japanese culture.</p>
            </Col>
          </Row>
        </section>

        <section className="about-section">
          <h2>Our Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <Image src="dish1.jpg" alt="Dish 1" className="gallery-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="dish2.jpg" alt="Dish 2" className="gallery-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="restaurant-interior.jpg" alt="Restaurant Interior" className="gallery-image" />
            </Carousel.Item>
          </Carousel>
        </section>

        <Team />
      </Container>
    </div>
  );
};

export default About;
