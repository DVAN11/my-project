import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../../src/assets/logo.png";
import Container from 'react-bootstrap/Container';
import { UseCart } from '../../../Context/Context';
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const [tab, setTab] = useState(1);
    const { cart, handleShowModalBook } = UseCart();
    const handleTab = (index) => {
        setTab(index);
        setMenu(false);
    }
    const menuRef = useRef();
    const iconRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/menu/${e.target.querySelector("input").value}`);
        e.target.querySelector("input").value = "";
        setTab(2);
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
    
    return (
        <div className="header">
            <Container>
                <div className='header-inner'>
                    <Link to="/" onClick={() => handleTab(1)} className={`logo ${tab === 1 ? "activetab" : ""}`}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="header-left">
                        <nav className={`menu ${menu ? 'active' : ''}`} ref={menuRef}>
                            <ul className="nav-links">
                                <li>
                                    <Link to="/" onClick={() => handleTab(1)} className={`nav-link ${tab === 1 ? "activetab" : ""}`}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/menu" onClick={() => handleTab(2)} className={`nav-link ${tab === 2 ? "activetab" : ""}`}>
                                        Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service"onClick={() => handleTab(3)} className={`nav-link ${tab === 3 ? "activetab" : ""}`}>
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about"onClick={() => handleTab(4)} className={`nav-link ${tab === 4 ? "activetab" : ""}`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={() => handleTab(5)} className={`nav-link ${tab === 5 ? "activetab" : ""}`}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <form className="search-form" onSubmit={handleSearch}>
                                <input type="search" placeholder="What food you want?" className="search-input" />
                            </form>
                            <Link to="#" className="btn-book"onClick={handleShowModalBook}>Booking</Link>
                        </nav>
                        <div className="header-icons">
                            <Link to="/cart" className="header-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className='cart-count'>
                                    {cart.length < 1 ? 0 : cart.length}
                                </div>
                            </Link>
                            <Link to="/#" className='phone'>
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
