import React from 'react';
import {Button} from 'react-bootstrap';
import { UseCart } from '../../../../../Context/Context';
import './Best.css';

const Best_seller = (props) => {
    const { handleAddCart} = UseCart();
    return (
        <div className="card-food">
            <div className="food d-flex">
                <div className="images">
                    <img src={props.imageUrl} alt={props.title} />
                </div>
                <div className="des">
                    <div className="des-title">
                        <h5>{props.title}</h5>
                        <h6>${props.price}</h6>
                    </div>
                    <div className='des-intro'>
                        <p>{props.ingredients.join(', ')}</p>
                        <Button onClick={() => {handleAddCart({ 
                            id: props.id, 
                            imageUrl: props.imageUrl, 
                            title: props.title, 
                            price: props.price, 
                            ingredients: props.ingredients }, 1)}}>Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best_seller;
