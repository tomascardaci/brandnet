import React from 'react'
import cart from '../../assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cartWidget'>    
        <img className='cart' src={cart} alt="cart-icon" />
        <p className='cartCount'>2</p>
    </div>
  )
}

export default CartWidget