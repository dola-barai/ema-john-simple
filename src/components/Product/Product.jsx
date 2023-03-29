import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4> 
            <p>Manufactures: {seller}</p>
            <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} 
            className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;