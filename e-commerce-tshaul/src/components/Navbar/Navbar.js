import React from "react";
import { LuContact } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "./image/aa12fc74-2166-42a4-8fcd-4e67de95b05c.jpg";
import "./Navbar.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
  const cart = useSelector((state) => state.items);

  const totalQuantity = function () {
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    return total;
  };
  const total = totalQuantity();

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid custom-style">
          <img
            class="navbar-brand img-fluid"
            src={img}
            height={60}
            width={150}
            alt="img"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active custom-font-size"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active custom-font-size"
                  aria-current="page"
                  to="/shop-all"
                >
                  Shop All
                </Link>
              </li>
              <li class="nav-item dropdown">
                <div
                  class="nav-link active dropdown-toggle custom-font-size"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Everything
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/male-product">
                      Male
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/female-product">
                      Female
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active custom-font-size" to="#">
                  Sweatshirt
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link active dropdown-toggle pt-3 custom-font-size"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Get In Touch!
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/contact">
                        Contact Us{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item ">
                  <Link
                    class="nav-link active custom-font-size-icon"
                    to="/login"
                  >
                    <LuContact />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active custom-font-size-icon"
                    to="/cart"
                  >
                    <FaShoppingCart />
                    <span id="cart-length">{total !== 0 ? total : "0"}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
