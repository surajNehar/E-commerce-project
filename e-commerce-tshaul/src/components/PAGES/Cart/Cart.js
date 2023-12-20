import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../Navbar/Navbar';
import './Cart.css';


const Cart = () => { 
    const cart = useSelector(state => state.items)

  return (
    <>
    <div className='nav-section'>
      <Navbar/>
    </div>
    <h1 style={{marginTop:100}}>cart:{cart.length}</h1>
    <div className='main'style={{display:"flex"}}>
    {cart.map((item) => (
    <div key={item.id} className='item-section' >
    <img className='img' src={item.image} height={200} width={200} alt={item.name} />
    </div> 
    
))}
 </div>
    </>
  )
}

export default Cart