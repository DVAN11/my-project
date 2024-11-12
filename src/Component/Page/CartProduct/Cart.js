import React from 'react';
import { UseCart } from '../../../Context/Context';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import './Cart.css';
import Order from './Order/Order';

const Cart = () => {
    const { cart, handleQuantity, handleDele } = UseCart() || { cart: [] };
    console.log(cart);
    
    return (
        <Container fluid>
            <Row>
                <Col xs={12} lg={6} className='left'>
                    <div className='cart'>
                        {cart.map((item, index) => (
                            <div className="box-cart">
                                <div className="list-cart">
                                    <div className="cart-item">
                                        <div className="item_img">
                                            <img src={item.imageUrl} alt="" />
                                        </div>
                                        <div className="item_content">
                                            <div className="content_top">
                                                <div className="info-cart">
                                                    <h3 className="title-cart">{item.title}</h3>
                                                </div>
                                                <div className="delete">
                                                    <a href="javascript:;">
                                                        <i className="fa-solid fa-trash-can" onClick={() => handleDele(index)}></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content_bot">
                                                <div className="left">
                                                    <span>Quanlity: </span>
                                                    <div className="quantity">
                                                        <span type="minus" onClick={() => handleQuantity("minus", index)}>
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </span>
                                                        <input type="text" name="quantity" value={item.quantity} disabled="disabled" />
                                                        <span type="plus" onClick={() => handleQuantity("plus", index)}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <span>{item.price * item.quantity}</span> $
                                                </div>
                                                <div className="pricecore" style={{ display: 'none' }}>
                                                    {cart.reduce((prev, current) =>{
                                                        return prev + current.quantity;
                                                    }, 0)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="s_total">
                            <div className="info-cart">
                                <div>Total</div>
                                <div className="total">
                                    <span>
                                        {cart.reduce((prev, current) =>{
                                                return prev + current.quantity * current.price;
                                            }, 0)}
                                    </span> $
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6} className='right'><Order></Order></Col>
            </Row>
        </Container>

    );
};

export default Cart;