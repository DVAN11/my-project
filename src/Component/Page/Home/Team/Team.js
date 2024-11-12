import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Yamada Taro',
            title: 'MASTER CHEF',
            description: 'A master chef with diverse culinary skills.',
            imgSrc: 'https://png.pngtree.com/png-clipart/20240117/original/pngtree-chef-professional-portrait-with-arms-folded-on-the-front-decorated-with-png-image_14128150.png',
            socialLinks: [
                { platform: 'facebook', icon: 'fa-brands fa-facebook-f', url: '#' },
                { platform: 'twitter', icon: 'fa-brands fa-twitter', url: '#' },
                { platform: 'instagram', icon: 'fa-brands fa-instagram', url: '#' },
            ],
        },
        {
            name: 'Sato Hanako',
            title: 'MASTER CHEF',
            description: 'An expert in Japanese cuisine, creating traditional recipes with a modern approach.',
            imgSrc: 'https://png.pngtree.com/png-clipart/20231005/original/pngtree-chef-portrait-illustration-png-image_13124929.png',
            socialLinks: [
                { platform: 'facebook', icon: 'fa-brands fa-facebook-f', url: '#' },
                { platform: 'twitter', icon: 'fa-brands fa-twitter', url: '#' },
                { platform: 'instagram', icon: 'fa-brands fa-instagram', url: '#' },
            ],
        },
        {
            name: 'Suzuki Ichiro',
            title: 'MASTER CHEF',
            description: 'Specializes in the fusion of French and Japanese cuisine.',
            imgSrc: 'https://png.pngtree.com/png-clipart/20231005/original/pngtree-chef-portrait-illustration-png-image_13124931.png',
            socialLinks: [
                { platform: 'facebook', icon: 'fa-brands fa-facebook-f', url: '#' },
                { platform: 'twitter', icon: 'fa-brands fa-twitter', url: '#' },
                { platform: 'instagram', icon: 'fa-brands fa-instagram', url: '#' },
            ],
        },
        {
            name: 'Tanaka Miki',
            title: 'MASTER CHEF',
            description: 'Passionate about researching new culinary techniques.',
            imgSrc: 'https://png.pngtree.com/png-clipart/20240918/original/pngtree-a-chef-hat-wearing-woman-with-smile-png-image_16035574.png',
            socialLinks: [
                { platform: 'facebook', icon: 'fa-brands fa-facebook-f', url: '#' },
                { platform: 'twitter', icon: 'fa-brands fa-twitter', url: '#' },
                { platform: 'instagram', icon: 'fa-brands fa-instagram', url: '#' },
            ],
        },
    ];

    return (
        <div className="team-section">
            <div className="team-slide">
                <img src="img/slide/bg-21.png" alt="" />
            </div>
            <div className="team-food-slide">
                <img src="img/slide/bg-9.png" alt="" />
            </div>
            <div className="team-headline text-center">
                <h4>EXPERIENCED TEAM</h4>
                <p><img src="img/product/separator.png" alt="" /></p>
                <div className="content">
                    <h2>Meet Our Chef</h2>
                </div>
            </div>
            <Container>
                <Row>
                    {teamMembers.map((member, index) => (
                        <Col xs={12} md={6} lg={3} key={index}>
                            <Card className="team-card">
                                <div className="team-image">
                                    <Card.Img variant="top" src={member.imgSrc} alt="" />
                                    <div className="team-title">
                                        <ul className="d-flex">
                                            {member.socialLinks.map((link, idx) => (
                                                <li key={idx}>
                                                    <a href={link.url}>
                                                        <i className={link.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body className="team-card-body">
                                    <Card.Title className="team-card-title">{member.name}</Card.Title>
                                    <Card.Subtitle className="team-card-subtitle mb-2">{member.title}</Card.Subtitle>
                                    <Card.Text className="team-card-text">{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Team;
