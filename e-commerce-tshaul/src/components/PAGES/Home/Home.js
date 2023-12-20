import React from 'react';
import "./Home.css"
import Navbar from '../../Navbar/Navbar'
import ProductList from '../../Products/ProductList';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Home() {
  const cart = useSelector(state => state.items)
  console.log(cart)
  return (
    <>
    <div className='nav-section'>
     <Navbar/>
    </div>
    <ProductList/>
    </>
  )
}

export default Home