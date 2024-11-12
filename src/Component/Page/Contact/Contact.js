import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [location, setLocation] = useState('hcmc'); // Default location: Hồ Chí Minh

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out to us!</p>
      </div>

      <Container>
        <section className="contact-info">
          <Row>
            <Col md={6} className="contact-info-item">
              <h2>Our Locations</h2>
              <div className="location-selection">
                <Button 
                  variant={location === 'hcmc' ? 'primary' : 'outline-primary'}
                  onClick={() => setLocation('hcmc')}
                >
                  Hồ Chí Minh
                </Button>
                <Button 
                  variant={location === 'vinhlong' ? 'primary' : 'outline-primary'}
                  onClick={() => setLocation('vinhlong')}
                >
                  Vĩnh Long
                </Button>
              </div>

              {location === 'hcmc' ? (
                <div className="location-details">
                  <h3>Hồ Chí Minh</h3>
                  <p>123 Nguyen Thi Minh Khai, District 3, Ho Chi Minh City, Vietnam</p>
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Map_of_Ho_Chi_Minh_City_in_Vietnam.svg/1024px-Map_of_Ho_Chi_Minh_City_in_Vietnam.svg.png" 
                    alt="Ho Chi Minh City Location" 
                    className="location-map"
                  />
                </div>
              ) : (
                <div className="location-details">
                  <h3>Vĩnh Long</h3>
                  <p>456 Le Duan, Vinh Long City, Vietnam</p>
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Map_of_Vinh_Long_in_Vietnam.svg" 
                    alt="Vinh Long Location" 
                    className="location-map"
                  />
                </div>
              )}
            </Col>

            <Col md={6} className="contact-form">
              <h2>Get In Touch</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
