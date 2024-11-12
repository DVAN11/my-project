import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";
const Banner = (pros) => {
    return (
        <Container fluid className='banner'>
            <Row>
                <Col lg={6}>
                    <div className='intro'>
                        <h6>SPECIAL JAPANESE FOODS</h6>
                        <h1>Unbeatable Sushi Melts Your Mouth</h1>
                        <p>Discover the ultimate sushi experience with our expertly crafted rolls, made from the freshest ingredients. Each bite offers a delicious explosion of flavor that truly melts in your mouth!</p>
                        <div className='but'>
                            <a href="/menu">VIEW OUR MENU</a>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <Carousel interval={12000}>
                    {pros.carouselItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
