import React from "react";
import "../Styles/Cart.css";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
function Cart({cartItems,onRemoveFromCart}){
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

 return(
  <div className="cart-main">
       <div className="checkout-header">
          <div>Checkout({totalItems})Items</div>
       </div>
    <div className="cart-content">
    <div className="cart-items-section">
 {cartItems.map((item)=>(
  <div key={item.id} className="cart-card">
  
       <div className="cart-item-image-container">
         <img className="cart-item-image" src={item.image} alt={item.name}></img>
       </div>
       <div className="item-details">
         <div className="cart-item-name">{item.name} </div>
         <div className="item-quantity">Quantity = {item.quantity}</div>
         <div className="cart-item-price">TOTAL ={item.price}*{item.quantity} = ₹{item.price * item.quantity}   </div>
         <div className="delivery-date">Estimated Delivery:{" "} {dayjs().add(5,"day").format("dddd,MMM D,YYYY")}</div>
         <button className="remove-button" onClick={()=>onRemoveFromCart(item.id)}>Delete</button>
      </div>
     </div>  
  ))}
</div>

<div className="price-details-section">
          <h3>Price Details</h3>
          <div className="price-line">
            <span>Total Items:</span>
            <span>{cartItems.length}</span>
          </div>
          
         <div className="shipping-line">
            <span>Shipping charge:</span>
            <span>{totalPrice ? 10 :0}</span>
         </div>

         <div className="price-line">
            <span>Total Price:</span>
            <span>₹{totalPrice? totalPrice+10:0}</span>
             
         </div>

        <div className="order-placement">

          {cartItems.length===0?<p>Your cart empty</p>:<Link to="/orders">
           <button className="order-button">Place order</button>
         </Link>}
        
        </div>
       </div>
      </div>
      </div>
  );
}
export default Cart