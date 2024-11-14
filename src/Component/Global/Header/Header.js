import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../../../../src/assets/logo.png";
import Container from 'react-bootstrap/Container';
import { UseCart } from '../../../Context/Context';
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menu, setMenu] = useState(false);
    const { cart, handleShowModalBook } = UseCart();
    const menuRef = useRef();
    const iconRef = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/menu/${e.target.querySelector("input").value}`);
        e.target.querySelector("input").value = "";
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && iconRef.current && !iconRef.current.contains(e.target)) {
                setMenu(false);
            } 
        };

        const handleIconClick = (e) => {
            if (iconRef.current && iconRef.current.contains(e.target)) {
                setMenu(prev => !prev);
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("click", handleIconClick);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("click", handleIconClick);
        };
    }, []);

    const getTabClass = (path) => {
        window.scroll(0,0);
        return location.pathname === path ? "activetab" : "";
    };

    return (
        <div className="header">
            <Container>
                <div className='header-inner'>
                    <Link to="/"  className={`logo ${getTabClass("/")}`}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="header-left">
                        <nav className={`menu ${menu ? 'active' : ''}`} ref={menuRef}>
                            <ul className="nav-links">
                                <li>
                                    <Link to="/" className={`nav-link ${getTabClass("/")}`}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/menu"  className={`nav-link ${getTabClass("/menu")}`}>
                                        Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service"  className={`nav-link ${getTabClass("/service")}`}>
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about"  className={`nav-link ${getTabClass("/about")}`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact"  className={`nav-link ${getTabClass("/contact")}`}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <form className="search-form" onSubmit={handleSearch}>
                                <input type="search" placeholder="What food you want?" className="search-input" />
                            </form>
                            <Link to="#" className="btn-book" onClick={handleShowModalBook}>Booking</Link>
                        </nav>
                        <div className="header-icons">
                            <Link to="/cart" className="header-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className='cart-count'>
                                    {cart.length < 1 ? 0 : cart.length}
                                </div>
                            </Link>
                            <Link to="/contact" className='phone'>
                                <i className="fa-solid fa-phone"></i>
                                <div>(+84) 939595778</div>
                            </Link>
                        </div>
                        <div className="menu-icon">
                            <i ref={iconRef} className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'}`}></i>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
