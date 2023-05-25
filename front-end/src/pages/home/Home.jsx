import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/SideBar/SideBar';
import ProductList from '../../components/ProductList/ProductList';
import { getAllProducts } from '../../slice/productSlice';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <ProductList productsData={products} loading={loading} />
    </div>
  );
};

export default Home;
