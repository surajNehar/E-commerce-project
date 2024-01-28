import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Footer from "../../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import imgUrl from "./images/back-img.jpg";

function Home() {
  const cart = useSelector((state) => state.items);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <>
      <div className="nav-section">
        <Navbar />
      </div>

      <div className="container-fluid mt-5 pt-5">
        <div className="jumbotron jumbotron-fluid text-center text-dark bg-light">
          <div className="container">
            <h1 className="display-4">Welcome to the T-Shirt Shop!</h1>
            <p className="lead">
              Find the coolest T-shirts for every occasion.
            </p>
            <Link
              className="btn btn-secondary btn-lg mb-4"
              to="./shop-all"
              role="button"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img
              src={imgUrl}
              className="card-img-top img-fluid"
              alt="Product Image"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Product Image"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="Product Image"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Product Image"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <img
                src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
