import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4> 
            <p>Manufactures: {seller}</p>
            <p>Rating: {ratings} stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;