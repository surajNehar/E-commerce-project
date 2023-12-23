import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart, removeFromCart } from "../../../features/Addtocartslice";
import Footer from "../../Footer/Footer";
import { GrDeliver } from "react-icons/gr";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtn = () => {
    navigate("/shop-all");
  };

  return (
    <>
      <div className="nav-section">
        <Navbar />
      </div>

      {cart.length === 0 ? (
        <div className="cart-section-empty">
          <div>
            <p className="cart-text">Your Cart is empty</p>
            <button className="cart-btn" onClick={handleBtn}>
              Let's do shopping
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <div className="cart-head-section">
              <FaShoppingCart /> {/* Corrected icon component */}
              <h4 className="cart-head-text">{cart.length + " "} items</h4>
            </div>
            <hr></hr>
            <div className="cart-main-section">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt="img" onClick={() => navigate(`/product/${item.id}`)} />
                  <div>
                    <h3>{item.name}</h3>
                    
                    <div className="quantity-container">
                      <p>Quantity: {item.quantity}</p>
                      <button onClick={() => dispatch(addToCart(item))}>
                        +
                      </button>
                    </div>

                    <p className="price-item">${item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      
      <div className="container text-center mt-2 mb-2 ">
        <div className="row">
          <div className="col">
            <GrDeliver className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">FREE & FAST DELIVERY</p>
                Shipping within 48 hours across India.
              </div>
            </div>
          </div>
          <div className="col">
            <PiKeyReturnFill className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">RETURN POLICY</p>
                Easy returns within 7 days.
              </div>
            </div>
          </div>
          <div className="col">
            <MdContacts className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">CONTACT US</p>
                Write us at support@t-shaul.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </>
    
  );
};

export default Cart;
