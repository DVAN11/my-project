import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { UseCart } from '../../../Context/Context';
import services from './DataServices';
import "./Booking.css";



const Booking = () => {
  const { handleShowModalBook } = UseCart();
  return (
      <div className="booking-section">
        <Container>
          {services.map((service) => (
            <Row key={service.id} className={`service-row ${service.id % 2 === 0 ? 'reverse-order' : ''}`}>
              <Col md={12} lg={6} className="service-video-col">
                <div className="service-video">
                  <iframe
                    width="100%"
                    height="315"
                    src={service.videoUrl}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="service-offer">
                  <p>{service.offer}</p>
                </div>
                <Button className="btn-booking" onClick={handleShowModalBook}>Book Now</Button>
              </Col>
              <Col xs={12} md={6} className="service-details-col">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-description">
                  {service.descriptions.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>
                <div className="service-highlights">
                  <p>Key Highlights:</p>
                  <ul>
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  };
  
export default Booking;