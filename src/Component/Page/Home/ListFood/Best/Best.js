import React from 'react';
import {Button} from 'react-bootstrap';
import './Best.css';

const Best_seller = (props) => {

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
                        <Button>Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best_seller;
