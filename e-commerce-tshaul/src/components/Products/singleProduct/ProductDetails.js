import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart } from "../../../features/Addtocartslice";
import './ProductDetails.css'
import { Link } from "react-router-dom";


// ProductDetails.js
const ProductDetails = ({ product }) => {
  
  const cart = useSelector(state => state.items)
  console.log(cart)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
         dispatch(addToCart(product))
  };
  const handleRemoveFromCart = () => {
         dispatch(removeFromCart(product.id))
  }

  const getProductQuantityInCart = () => {
    const cartItem= cart.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
      
        <div className="ts-section">

          <div className="image-section">
          <img src={product.image} alt={product.name} className="image" height={700} width={600}/>
          </div>

          <div className="image-info">
            <h1 className="ts-name">{product.name}</h1>
            <p className="price">${product.price}</p>
            
            <div className="add-remove-btn">
               <button className="add-button"
                       onClick={handleAddToCart}>
                       Add to Cart{" "}
                       {getProductQuantityInCart() > 0 && (
                      <span id="cart-item">{getProductQuantityInCart()}</span>
                      )}
               </button>
               <button className="remove-button"
                      onClick={handleRemoveFromCart}>
                      Remove-f-Cart
               </button>
            </div>
           
          <div className="size-section">
            <div className="size-part">
            <p className="size-heading">size:</p>
            <Link className="size-link" to="/sizechart" ><p className="size-link-text">Size-chart</p></Link>
            </div>
            
          <div class="size-buttons">
              <button class="size-button">XS</button>
              <button class="size-button">S</button>
              <button class="size-button">M</button>
              <button class="size-button">L</button>
              <button class="size-button">XL</button>
              <button class="size-button">XXL</button>
           </div>
          </div>
          



           </div>

        </div>

      </div>
    );
  }
  export default ProductDetails;
  