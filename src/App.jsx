import React,{useState,useEffect} from 'react';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import Orders from './pages/Orders.jsx';
function App(){
 const[cart,setCart]=useState(()=>{
  const savedCart = localStorage.getItem('cart-storage');
  return savedCart ? JSON.parse(savedCart):[];
 });
 useEffect(()=>{
     localStorage.setItem('cart-storage',JSON.stringify(cart))
 },[cart]);

function handleAddToCart(product,quantity)
{
  setCart(prevCart =>{
    const existingItem = prevCart.find(item =>item.id == product.id);

    if(existingItem){

      return prevCart.map(item=>
        item.id === product.id ?{...item, quantity:item.quantity + quantity} :item
      );
      
     
    }
    else{
      return [...prevCart,{...product,quantity}];
    }
  });
}
function handleRemoveFromCart(productId)
{
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
}

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cart} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path='/Orders' element={<Orders/>}/>
     </Routes>
    </Router> 
  
  )
}

export default App
