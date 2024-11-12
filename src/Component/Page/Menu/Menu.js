import React, { useState, useEffect, useCallback } from 'react';
import FoodProduct from '../../Global/FoodProduct/FoodProduct';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Modal, Dropdown } from 'react-bootstrap';
import useFetch from '../../../Feature/useFetch';
import { UseCart } from '../../../Context/Context';
import Carousel from 'react-bootstrap/Carousel';
import "./Menu.css";

const Menu = () => {
    
    const carouselItem2 = [
        {
            id: 1,
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/08/mon-an-nhat-ban-2.jpg?tr=dpr-2,w-675",
            alt: "First slide",
            title: "Essence of Japanese Quality",
            description: "Discover the finesse in every dish, crafted from the freshest ingredients to bring you the authentic taste of Japan."
        },
        {
            id: 2,
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/08/mon-an-nhat-ban-3.jpg?tr=dpr-2,w-675",
            alt: "Second slide",
            title: "Culinary Art and Tradition",
            description: "Experience the perfect harmony of flavor and artistry; each dish is a work of cultural heritage from Japan."
        },
        {
            id: 3,
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/08/mon-an-nhat-ban-5-1024x684.jpg?tr=dpr-2,w-675",
            alt: "Third slide",
            title: "Excellence in Every Bite",
            description: "From fresh sashimi to rich ramen, we are committed to delivering the highest quality in every dish."
        }
    ];

    const url = `https://6716466633bc2bfe40bd3647.mockapi.io/food`;
    const foodData = useFetch(url);
    const [filter, setFilter] = useState([]);
    const [pricefilter, setPricefilter] = useState("0$ - 50$");
    const [types, setTypes] = useState("All"); 
    const [prices, setPrices] = useState([0, 50]);
    const [show, setShow] = useState(16);
    const [count, setCount] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const { handleAddCart} = UseCart();
    const [cardProduct, setCardProduct] = useState({
        id: "",
        title: "",
        imageUrl: "",
        ingredients: "",
        price: "",
    });
    const { slug: keysearch } = useParams();
    console.log(keysearch);
    const navigate = useNavigate();

    const handleType = (type) => {
        setTypes(type);
        navigate(`/menu`);
    };

    const handlePrice = (min = prices[0], max = prices[1]) => {
        setPrices([min, max]);
        setPricefilter(`${min}$ - ${max}$`);
    };

    const DetailFilter = useCallback(() => {
        let filteredData = foodData.data;
    
        if (types !== "All") {
            filteredData = filteredData.filter(item => item.type === types);
        }
        filteredData = filteredData.filter(item => item.price >= prices[0] && item.price <= prices[1]);
        
        if (keysearch) {
            filteredData = filteredData.filter(item => 
                item.title.toLowerCase().includes(keysearch.toLowerCase())
            );
        }
    
        filteredData = filteredData.slice(0, show);
    
        setFilter(filteredData);
    }, [foodData.data, types, prices, show, keysearch]);
    

    useEffect(() => {
        if (foodData.data) {
            console.log("Keysearch: ", keysearch);
            DetailFilter();
        }
    }, [types, prices, show, foodData.data, keysearch]);

    const handleShowModal = (product) => {
        setCardProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setCount(1); 
        setShowModal(false);
        setCardProduct({
            id: "",
            title: "",
            imageUrl: "",
            ingredients: "",
            price: "",
        });
    };
    
    if (!foodData || !foodData.data) {
        return <div className='load'>Loading...</div>;
    }

    const Filtermenu = ["All", ...new Set(foodData.data.map(item => item.type))];
    
    return (
        <>
            <Container fluid className='banner'>
                    <Carousel interval={12000}>
                    {carouselItem2.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                    </Carousel>
            </Container>
            <Container>
                <div className='type-name'>
                    {Filtermenu.map((item, index) => (
                        <div key={index} className='filter-menu' onClick={() => handleType(item)}>{item}</div>
                    ))}
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                            {pricefilter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handlePrice(0, 50)}>0$ - 50$</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePrice(0, 8.25)}>0$ - 8.25$</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePrice(8.25, 17)}>8.25$ - 17$</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePrice(17, 30)}>17$ - 30$</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>

            {filter.length > 0 ? (
                <Container>
                    <Row>
                        {filter.map((item) => (
                            <Col lg={3} key={item.id}>
                                <div onClick={() => handleShowModal(item)}>
                                    <FoodProduct 
                                        id={item.id} 
                                        title={item.title}
                                        imageUrl={item.imageUrl} 
                                        ingredients={item.ingredients} 
                                        price={item.price}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <div className='no'>No Food found...</div>
            )}
            <button className='show-more' onClick={() => setShow((prev) => prev + 16)}>Show more</button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{cardProduct.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={cardProduct.imageUrl} alt={cardProduct.title} />
                    <p>{cardProduct.ingredients}</p>
                    <p>Price: {cardProduct.price}$</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className='sl'>
                        <i className="fa-solid fa-minus" onClick={() => setCount(count > 1 ? count - 1 : count)}></i>
                        <span>{count}</span>
                        <i className="fa-solid fa-plus" onClick={() => setCount (count + 1)}></i>
                    </div>
                    <button className='btnb' onClick={() => {handleAddCart(cardProduct, count);handleCloseModal()}}>
                        Add to cart
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Menu;



