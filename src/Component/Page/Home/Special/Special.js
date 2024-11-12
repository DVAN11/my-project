import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { UseCart } from '../../../../Context/Context';
import { motion } from 'framer-motion';
import './Special.css';

const service = [
    {
        title: "Omakase",
        description: "Omakase means 'I leave it to you'. A style where diners trust the chef's choices...",
        imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20240716/pngtree-a-chef-lighting-torch-to-sear-piece-of-sushi-adding-smoky-image_16004175.jpg",
        link: "/omakase"
    },
    {
        title: "Kaiseki",
        description: "Kaiseki is a traditional Japanese meal focused on aesthetics, flavor, and balance...",
        imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20220515/pngtree-exquisite-kaiseki-delights-indulging-in-yudanakas-famous-japanese-cuisine-photo-image_36646646.jpg",
        link: "/kaiseki"
    },
    {
        title: "Teppanyaki",
        description: "Teppanyaki is a dining style where diners sit around a grill and the chef prepares food...",
        imageUrl: "https://png.pngtree.com/background/20240926/original/pngtree-beef-with-vegetables-teppanyaki-japanese-cooking-japan-barbecue-wagyu-photo-picture-image_10655557.jpg",
        link: "/teppanyaki"
    },
    {
        title: "Izakaya",
        description: "Izakaya is a Japanese-style pub serving a variety of small dishes paired with drinks...",
        imageUrl: "https://png.pngtree.com/background/20230516/original/pngtree-tea-shop-is-an-izakaya-picture-image_2603948.jpg",
        link: "/izakaya"
    },
    {
        title: "Shabu-shabu",
        description: "Shabu-shabu is a Japanese hot pot dish where meat and vegetables are cooked in boiling broth...",
        imageUrl: "https://png.pngtree.com/background/20230424/original/pngtree-japanese-cooking-pot-with-meat-picture-image_2459363.jpg",
        link: "/shabu-shabu"
    },
    {
        title: "Yakiniku",
        description: "Yakiniku is a Japanese style of cooking bite-sized meat and vegetables on gridirons or griddles...",
        imageUrl: "https://png.pngtree.com/background/20230518/original/pngtree-yakiniku-chef-grilling-his-best-meat-picture-image_2647590.jpg",
        link: "/menu/yakiniku"
    }
];

const Special = () => {
    const { ref, inView } = useInView({
        threshold: 0.1 ,
    });
    const { handleShowModalBook } = UseCart();
    return (
        <Container>
            <h2>"Exclusive Service at Japanese Restaurant"</h2>
            <Row className="experience-row" ref={ref}>
            {service.map((exp, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={4} className="experience-col">
                    <motion.div
                        initial={{ scale: 0, opacity: 0, }}
                        animate={inView ? { scale: 1, opacity: 1, } : {}}
                        transition={{ duration: 0.7, ease: [0.68, -0.55, 0.27, 1.55] }}
                    >
                        <Card className="card-custom">
                            <Card.Img variant="top" src={exp.imageUrl} alt={exp.title} />
                            <Card.Body>
                                <Card.Title className="card-title">{exp.title}</Card.Title>
                                <Card.Text className="card-description">{exp.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <button className="btn-custom" onClick={handleShowModalBook}>Booking Now</button>
                            </Card.Footer>
                        </Card>
                    </motion.div>
                </Col>
            ))}
            </Row>
        </Container>
    );
};

export default Special;
