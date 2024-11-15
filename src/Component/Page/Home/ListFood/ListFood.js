import React, { useState, useEffect } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Slider from 'react-slick';
import "./ListFood.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import all from "../../../../assets/all.png";
import useFetch from '../../../../Feature/useFetch';
import Best_seller from './Best/Best';

//API https://6716466633bc2bfe40bd3647.mockapi.io/food
const ListFood = () => {
    const Category = [
        { title: "All", imageUrl: all, link: "all" },
        { title: "Bento", imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-wooden-box-containing-sushi-rolls-image_2530857.jpg", link: "Bento" },
        { title: "Donburi", imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20231023/pngtree-teriyaki-chicken-donburi-a-delicious-japanese-dish-of-steamed-rice-image_13695262.png", link: "Donburi" },
        { title: "Ramen", imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20240331/pngtree-vibrant-bowl-of-traditional-japanese-ramen-with-a-hard-boiled-egg-image_15699465.jpg", link: "Ramen" },
        { title: "Salads", imageUrl: "https://png.pngtree.com/background/20230612/original/pngtree-salad-with-vegetables-in-a-black-bowl-picture-image_3176463.jpg", link: "Salads" },
        { title: "Sushi", imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20231229/pngtree-sushi-rolls-and-uncooked-rice-image_13855319.png", link: "Sushi" },
        { title: "Sashimi", imageUrl: "https://png.pngtree.com/background/20230425/original/pngtree-large-platter-of-various-sashimi-and-sushi-picture-image_2469767.jpg", link: "Sashimi" },
        { title: "Appetizer", imageUrl: "https://png.pngtree.com/background/20230426/original/pngtree-plate-full-of-japanese-appetizers-picture-image_2483688.jpg", link: "Appetizer" },
        { title: "Drinks", imageUrl: "https://png.pngtree.com/background/20230426/original/pngtree-bottle-of-sake-with-japanese-script-on-it-resides-around-a-picture-image_2491862.jpg", link: "Drinks" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: false } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }
        ]
    };
    const url = `https://6716466633bc2bfe40bd3647.mockapi.io/food`;
    const foodData = useFetch(url);
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        if (foodData.data) {
            const foodMenu = foodData.data.filter(item => item.best_seller);
            setMenu(foodMenu.sort(() => Math.random() - 0.5).slice(0,4));
        }
    }, [foodData]);
    
    const handleClick = (link) => {
        if (foodData.data) {
            if (link === "all") {
                const foodMenu = foodData.data.filter(item => item.best_seller);
                setMenu(foodMenu.sort(() => Math.random() - 0.5).slice(0,4));
            } else {
                const foodMenu = foodData.data.filter(item => item.type === link && item.best_seller);
                setMenu(foodMenu.slice(0,4));
            }
        }
    };
    console.log(menu);
    
    return (
        <>
            <div className='menu-main'>
                <h3>Best Seller</h3>
                <Slider {...settings}>
                    {Category.map((category, index) => (
                        <div key={index} className={`category-item`} onClick={() => handleClick(category.link)}>
                            <div className="category-bg">
                                <img src={category.imageUrl} alt={category.title} loading="lazy" />
                                <div className="category-title">{category.title}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Container fluid>
                <Row>
                {menu.map((item) => (
                    <Col md={12} lg={6}>
                     <Best_seller  key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} ingredients={item.ingredients}></Best_seller>
                    </Col>
                ))}
                </Row>
                
            </Container>
        </>
       
    );
};

export default ListFood;