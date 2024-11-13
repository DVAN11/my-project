import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { UseCart } from '../../../Context/Context';
import "./Booking.css";

const services = [
    {
      id: 1,
      title: "Omakase",
      descriptions: [
        "Omakase means 'I leave it to you'. A style where diners trust the chef's choices, allowing them to experience the best of what the chef has to offer.",
        "A dining experience where the chef personally selects dishes based on seasonal ingredients, ensuring a unique and fresh meal every time.",
        "Enjoy a variety of exquisite dishes, each designed to showcase the chef’s expertise in combining flavors, textures, and presentation."
      ],
      videoUrl: "https://www.youtube.com/embed/oAC3DODqLn4?si=C6yq8hd2JjjJL9rG",
      offer: "Special 10% discount for first-time customers!",
      highlights: [
        "Custom-tailored dining experience.",
        "Seasonal ingredients handpicked by the chef.",
        "Perfect for food adventurers and sushi lovers."
      ]
    },
    {
        id: 2,
      title: "Kaiseki",
      descriptions: [
        "Kaiseki is a traditional Japanese meal focused on aesthetics, flavor, and balance. It’s a refined multi-course meal that emphasizes harmony between taste and visual appeal.",
        "An artful presentation of seasonal dishes, meticulously prepared to balance flavor and texture. Each course is thoughtfully crafted for a full sensory experience.",
        "A multi-course meal that brings together fresh, seasonal ingredients, each prepared with precision to create a perfect balance of flavor and presentation."
      ],
      videoUrl: "https://www.youtube.com/embed/MUH0CJYSDkE?si=zreim0vhmDRkSGne",
      offer: "Enjoy a complimentary drink with every Kaiseki meal!",
      highlights: [
        "Elegant multi-course dining.",
        "Carefully balanced flavors with seasonal themes.",
        "Perfect for intimate dining experiences."
      ]
    },
    {
        id: 3,
      title: "Teppanyaki",
      descriptions: [
        "Teppanyaki is a dining style where diners sit around a grill and the chef prepares food right in front of them. It’s a dynamic and engaging experience.",
        "Enjoy freshly grilled meats and vegetables cooked right in front of you by a skilled chef. The food is prepared with precision and flair for a memorable dining experience.",
        "A theatrical cooking style that combines food, entertainment, and interaction with the chef, making each meal a lively and engaging performance."
      ],
      videoUrl: "https://www.youtube.com/embed/wbp-kT6g8jE?si=2smkDZjkdEy-Z1ei",
      offer: "Family package: Book for 4, pay for 3!",
      highlights: [
        "Interactive cooking style.",
        "Perfect for group dining and special occasions.",
        "Live cooking performance from skilled chefs."
      ]
    },
    {
        id: 4,
      title: "Izakaya",
      descriptions: [
        "Izakaya is a Japanese-style pub serving a variety of small dishes paired with drinks. It’s a casual dining experience meant for socializing and relaxing.",
        "An informal setting where you can relax with friends while enjoying flavorful small bites, typically paired with drinks like sake or beer.",
        "A great place to enjoy an array of traditional Japanese bar snacks along with a variety of drinks, perfect for after-work relaxation or casual get-togethers."
      ],
      videoUrl: "https://www.youtube.com/embed/djbDRFO9qD0?si=Ok_X2jbaKWnS7VoJ9",
      offer: "Buy 2 drinks, get 1 free on Fridays!",
      highlights: [
        "Casual dining atmosphere.",
        "Perfect for after-work socializing.",
        "Wide selection of small plates and drinks."
      ]
    },
    {
        id: 5,
      title: "Shabu-shabu",
      descriptions: [
        "Shabu-shabu is a Japanese hot pot dish where meat and vegetables are cooked in boiling broth. It’s a communal dining experience where everyone gets involved in cooking.",
        "A communal dish where thinly sliced meat and vegetables are cooked in a simmering pot of broth, creating a fun and interactive meal for everyone at the table.",
        "Dip meat and vegetables into the hot broth and cook them right before you eat, allowing everyone to customize their meal to their liking."
      ],
      videoUrl: "https://www.youtube.com/embed/tw8EXKWwudQ?si=iPCh-Tl8R3poUE4R",
      offer: "Group booking special: Get 15% off for 5 or more people!",
      highlights: [
        "Interactive hot pot experience.",
        "Fresh and healthy ingredients.",
        "Fun dining experience for family or groups."
      ]
    },
    {
        id: 6,
      title: "Yakiniku",
      descriptions: [
        "Yakiniku is a Japanese style of cooking bite-sized meat and vegetables on gridirons or griddles. It’s a fun and interactive dining experience where diners cook their own food.",
        "Grill your own choice of meat and vegetables at the table, perfect for sharing with friends and family. It’s a social meal where everyone can enjoy cooking their food together.",
        "A fun and interactive meal where diners can cook their food right at the table, making it a great choice for gatherings and casual meals with loved ones."
      ],
      videoUrl: "https://www.youtube.com/embed/QFClnbb8iL8?si=JLoOkfs6sGsQpI-G",
      offer: "Order 3 meats, get a side dish free!",
      highlights: [
        "Grill your own food at the table.",
        "Ideal for meat lovers and family gatherings.",
        "Casual, fun dining experience."
      ]
    }
];

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