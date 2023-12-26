import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import './CartButton.css'
import AppContext from '../../context/AppContext';

function CartButton(){

  const {cartItems, cartActive, setCartActive} = useContext(AppContext)
  
  return (
    <button type="button" className='cart__button' onClick={() => cartActive === '' ? setCartActive('cart--active') : setCartActive('')}>
      <CiShoppingCart />
      {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
    </button>
  )
}

export default CartButton