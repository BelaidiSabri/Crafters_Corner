import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import ProductList from '../../components/ProductList/ProductList'
import './home.css'

const Home = () => {
  return (
    <div className="container">
        <Navbar/>
        <ProductList></ProductList>
    </div>
  )
}

export default Home