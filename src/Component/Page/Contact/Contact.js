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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.479765377909!2d106.73645577573538!3d10.697429660644472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753ab3089291b1%3A0xe0b8056a2c373391!2zMTgwNiBIdeG7s25oIFThuqVuIFBow6F0LCBUVC4gTmjDoCBCw6gsIE5ow6AgQsOoLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731499140353!5m2!1svi!2s"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="location-map"
                  ></iframe>              
                </div>
              ) : (
                <div className="location-details">
                  <h3>Vĩnh Long</h3>
                  <p>456 Le Duan, Vinh Long City, Vietnam</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1908340307846!2d105.97515877573201!3d10.246187668748727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a9df5e8e237af%3A0x51dcc880558ed77e!2sVincom%20Plaza%20V%C4%A9nh%20Long!5e0!3m2!1svi!2s!4v1731500460135!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="location-map"
                  ></iframe>
                </div>
              )}
            </Col>

            <Col md={6} className="contact-form">
              <h2>Contact Us</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us what we can help you with"
                    required
                  />
                </Form.Group>

                <button variant="primary" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
