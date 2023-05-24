import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product';
import { getAllProducts } from '../../slice/productSlice';
import './ProductList.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const loading = useSelector((state) => state.products.loading);
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="productlist">
      {loading? <p>loading</p>: products.map((product)=><Product product={product}></Product>)}
    </div>
  );
};

export default ProductList;
