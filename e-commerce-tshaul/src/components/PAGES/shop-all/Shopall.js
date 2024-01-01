import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Shopall.css';
import ProductList from '../../Products/ProductList';
import Footer from '../../Footer/Footer';

const Shopall = () => {
  return (
   <>
   <div className='nav-section'> 
    <Navbar/>
   </div>
   <div className='product-section'>
    <ProductList/>
   </div>
   <Footer/>
   </>
  )
}

export default Shopall;