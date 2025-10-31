import "../Styles/App.css"
import products from '../data/products';
import ProductCard from '../Components/ProductCard';
import React from 'react';
import { Link } from "react-router-dom";
function HomePage({onAddToCart,cartItems}) {

   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
    
    <div className="header">
      <div className="app-name">Game of Purchase</div>
      <div className="search-bar-container">
        <input className="search-input" type="text" placeholder="Search Items"/>
      </div>
      <div className="cart-image">
        <Link to="/Cart">
        <img className='cart-pic' src='/Images/Other/shopping-cart.png' alt='cart'></img>
        {totalItems >0 && (<div className="cart-badge">{totalItems}</div>)}
        
        </Link>
     </div>
    </div>
    
    <div className="main">
      <div className="products-container-grid">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}
          onAddToCart={onAddToCart}/>
        ))}
      </div>
     </div>
     </>
  );
}

export default HomePage
