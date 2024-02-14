import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BsMinecartLoaded } from "react-icons/bs"
import Cart from "../../pages/Cart"
import flag from "../../assets/img/en.png"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
const Navbar = () => {
  const products = useSelector(state => state.Cart.products);
  const [cartopen, setCartOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='container'>

        <div className='left'>

          <div className='item sm'>
            <img src={flag} alt='flag-img' />
            <IoIosArrowDown />
          </div>

          <div className='item sm'>
            <span>USD</span>
            <IoIosArrowDown />
          </div>

          <div className='item'>
            <Link to="/products/3">Men</Link>
          </div>

          <div className='item'>
            <Link to="/products/5">Women</Link>
          </div>

          <div className='item'>
            <Link to="/products/2">Kids</Link>
          </div>

          <div className='item'>
            <Link to="/products/6">Shoes</Link>
          </div>

           




        </div>

        

          
      


        <div className='right'>

        <div className='item'>
            <Link to='/'>SHARKSTORE</Link>
          </div>


          <div className='item'>
            <div  onClick={() => setCartOpen(!cartopen)}>
              <BsMinecartLoaded className='cart-icon' />
              <span>{products.length}</span>
            </div>
          </div>

        </div>
      </div>
      {cartopen && <Cart />}
    </div>
  )
}

export default Navbar