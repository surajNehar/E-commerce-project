import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../features/Addtocartslice";
import "./ProductDetails.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// ProductDetails.js
const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.items);
  console.log(cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    //  alert(`you have successfully added to cart - ${product.name}`)

    const toast = new window.bootstrap.Toast(
      document.getElementById("cart-toast")
    );
    toast.show();
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const getProductQuantityInCart = () => {
    const cartItem = cart.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="nav-section">
        <Navbar />
      </div>

      <div className="path">
        <p>Home/{product.name}</p>
      </div>

      <div className="ts-section">
        <div className="image-section">
          <img
            src={product.image}
            alt={product.name}
            className="image"
            height={700}
            width={600}
          />
        </div>

        <div className="image-info">
          <h1 className="ts-name">{product.name}</h1>
          <p className="price">${product.price}</p>

          <hr></hr>

          <div className="size-section">
            <div className="size-part">
              <p className="size-heading">size:</p>
              <Link className="size-link" to="/sizechart">
                <p className="size-link-text">Size-chart</p>
              </Link>
            </div>

            <div class="size-buttons">
              <button class="size-button">XS</button>
              <button class="size-button">S</button>
              <button class="size-button">M</button>
              <button class="size-button">L</button>
              <button class="size-button">XL</button>
              <button class="size-button">XXL</button>
            </div>

            <div className="add-remove-btn">
              <button className="add-button" onClick={handleAddToCart}>
                Add to Cart{" "}
                {getProductQuantityInCart() > 0 && (
                  <span id="cart-item">{getProductQuantityInCart()}</span>
                )}
              </button>

              <div
                id="cart-toast"
                className="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header d-flex justify-content-between">
                  <small className="text-body-secondary">Just now</small>
                  <div className="d-flex align-items-center">
                    <small
                      onClick={() => navigate("/cart")}
                      className="toast-cart-link "
                    >
                      Cart
                    </small>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>

                <div className="toast-body">
                  {`You have successfully added to cart - ${product.name}`}
                </div>
              </div>

              <button className="remove-button" onClick={handleRemoveFromCart}>
                Remove-f-Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetails;
