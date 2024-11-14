import React from 'react';
import { Card } from 'react-bootstrap';
import './FoodProduct.css';

const FoodProduct = ({ id, imageUrl, title, price, ingredients }) => {
    return (
        <>
            <Card key={id} className='card-product'>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {ingredients.join(', ')}
                    </Card.Text>
                    <div className='foot'>
                        <Card.Text>
                            {price} $
                        </Card.Text>
                        <button
                            className="btnn"
                        >
                            VIEW DETAIL
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default FoodProduct;
