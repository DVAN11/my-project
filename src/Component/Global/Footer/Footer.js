import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-about col">
                    <h3>About Us</h3>
                    <p>Welcome to our Japanese restaurant, where we offer authentic Japanese cuisine in a serene atmosphere. Join us for a delightful dining experience.</p>
                </div>
                <div className="footer-contact col">
                    <h3>Contact Us</h3>
                    <p>VD Sushi Restaurant, No. MG2-02, Hamlet 1, Vinh Long City, Vinh Long Province</p>
                    <p>📞 Phone: +81 123-456-789</p>
                    <p>✉️ Email: <a href="mailto:info@VDrestaurant.com">info@VDrestaurant.com</a></p>
                </div>
                <div className="footer-links col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>

                <div className="footer-social col">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 VD Restaurant. All Rights Reserved.</p>
                <ul>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms of Service</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
