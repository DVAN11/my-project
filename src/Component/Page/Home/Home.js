import React, { useEffect} from 'react';
import Banner from './Banner/Banner';
import ListFood from './ListFood/ListFood';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Service from './Service/Service';
import Special from './Special/Special';
import Team from './Team/Team';
import Rating from './Rating/Rating';
import { UseCart } from '../../../Context/Context';
import BookingForm from '../../Global/BookingForm/BookingForm';
import "./Home.css";

const Home = () => {
  const info = [
    { value: 100, unit: "%", title: "Satisfied" },
    { value: 24, unit: "/ 7", title: "Operational Hours" },
    { value: 12, unit: "Y", title: "Experience" },
    { value: 45, unit: "+", title: "Chefs Expert" },
  ];
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  }); 
  const carouselItems = [
    {
        id: 1,
        imgSrc: "https://png.pngtree.com/background/20230516/original/pngtree-japanese-chef-preparing-some-food-in-a-restaurant-picture-image_2617159.jpg",
        alt: "First slide",
        title: "Discover Fresh Sushi",
        description: "Join us to experience the freshest sushi, crafted from the finest ingredients, delivering the authentic flavors of Japanese cuisine."
    },
    {
        id: 2,
        imgSrc: "https://png.pngtree.com/background/20220718/original/pngtree-hefeng-restaurant-hotel-room-restaurant-gold-picture-image_1662935.jpg",
        alt: "Second slide",
        title: "Experience Japanese Culinary Culture",
        description: "We not only serve food, but also offer you a unique cultural experience through traditional Japanese dishes."
    },
    {
        id: 3,
        imgSrc: "https://png.pngtree.com/background/20230321/original/pngtree-japanese-restaurant-serving-yakiniku-picture-image_2153790.jpg",
        alt: "Third slide",
        title: "We Are the Heart of Japanese Delicacies",
        description: "Come and enjoy the perfect combination of flavor and artistry in every dish, from fresh sashimi to rich ramen."
    }
];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner carouselItems={carouselItems}/>
      <Container className="info" ref={ref}>
        <Row>
          {info.map((fact, index) => (
            <Col key={index} md={3} className="fact-col">
              <div className="fact-content">
                <div className="num">
                  {inView ? (
                    <CountUp start={0} end={fact.value} duration={1} delay={0} />
                  ) : (
                    0
                  )}
                  <span className="unit">{fact.unit}</span>
                </div>
                <h3 className="title">{fact.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Service></Service>
      <Special></Special>
      <ListFood></ListFood>
      <Rating></Rating>
      <Team></Team>
    </>
  );
};

export default Home;




