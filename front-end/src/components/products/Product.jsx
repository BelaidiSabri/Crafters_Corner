import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className='card'>
      <div className="image-holder">
        <img src={product.image} alt="product photo" />
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price} Dt</div>
      </div>
      <div className="product-description">{product.description}</div>
      <button className="add-to-cart-button">Add To Cart</button>
    </div>
  );
};

export default Product;
