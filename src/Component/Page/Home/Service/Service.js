import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Service.css";

const Service = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="about-us">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="video-container">
                            <div 
                                className="video-btn"
                                onClick={handleShow}
                                aria-label="video-popup"
                            >
                                <i class="fa-solid fa-play"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h3>Authentic Japanese Flavors</h3>
                        <p>Welcome to our restaurant, where we bring you traditional Japanese dishes with the freshest ingredients and the highest quality.</p>
                        <ul className="icon-list">
                            <li><i className="fas fa-check"></i> Fresh ingredients</li>
                            <li><i className="fas fa-check"></i> Traditional cooking methods</li>
                            <li><i className="fas fa-check"></i> Dedicated service</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/rL-TKSWvGPU?si=eVWfoPlHM3N8m9W9" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Service;
