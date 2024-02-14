import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import "./Cart.scss"
import { removeFromCart, resetCart } from '../components/ReduxTookit/CartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { makeRequestByAxios } from '../components/MakeRequestByAxios';
const Cart = () => {
const products = useSelector(state=>state.Cart.products)
  const dispatch = useDispatch();


  const totalPrice = ()=>{
    let total = 0;
    products.forEach(item => 
   (   total += item.quantity * item.price));
   return total.toFixed(2);
      
    };

    const stripePromise = loadStripe('pk_test_51NLZxRKh3GfKdQ6FwYPi1CvUReZQTyfjg2hx6Uh4dWccFMhHbtVxUDgiLaanhAGvBi9XoiNU4BRDZy5O9VDKyyQ700A4LNxj7R');
  
 const handlePayment =async()=>{
  try {
    const stripe = await stripePromise;
    const res = await makeRequestByAxios.post("/orders",{
      products,
    });
    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    }).then(
    dispatch(resetCart()))
  } catch (error) {
    console.log(error)
    
  }

 }

  return (
    <div className='cart' >
      <h1>PROUDCTS IN CART</h1>
      {products?.map((item) => (

        <div className='item' key={item.id}>
          <img src={ item.img} alt='item-img' />

          <div className='details'>
            <h1>{item.title} </h1>
            <p>{item.desc.substring(0, 100)} </p>


            <div className='price'>{item.quantity} * ${item.price}</div>
            <AiOutlineDelete className='delete'  onClick={()=>{dispatch(removeFromCart (item.id))}}/>
          </div>
          </div>
     
      ))}

          <div className='total'>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
          </div>

          <button  onClick={handlePayment}>PROCCED TO CHECKOUT</button>
          <span className='reset' onClick={()=>dispatch(resetCart())} >Reset Cart</span>

        </div>
      
  );
      };

   
      
export default Cart;