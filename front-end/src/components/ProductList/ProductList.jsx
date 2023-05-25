import React from 'react';
import Product from '../products/Product';
import './ProductList.css';

const ProductList = ({ productsData, loading }) => {
  return (
    <div className="productlist">
      {loading ? <p>Loading</p> : productsData.map((product) => <Product product={product} key={product.id} />)}
    </div>
  );
};

export default ProductList;

