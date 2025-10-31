import React,{useState} from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
export function ProductCard({product,onAddToCart})
{
  const[quantity,setQuantity]=useState(1);
  const handleQuantityChange=(e)=>{
    setQuantity(Number(e.target.value));
  }
  return(
    <div className="product-container">
           <div className="product-image-container">
             <img className="product-image" src={product.image} alt={product.name} />
           </div>
          <div className="product-name">{product.name}</div>
          <div className="price-container">₹{product.price.toFixed(2)}</div>
          <div className="product-quantity">
            Quantity:
            <select className="quantity-selector" value={quantity} onChange={handleQuantityChange}>
               <option selected value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
           </select>
          </div>
          <div className="add-cart-button">
            <button className="add-to-cart" onClick={()=>onAddToCart(product,quantity)}>Add to cart</button>
          </div>
          
          <div className="buy-container">
            <Link to="/Orders">
            <button className="buy-now">Buy now</button>
            </Link>
          </div>
          
       </div>

  );  
}
export default ProductCard;