import './Cart.css'
import Cartitem from './../CartItem/Cartitem'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import formatCurrency from '../../utils/formatCurrency'

function Cart(){
  const {cartItems, cartActive} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc:number, item:number) => item.price + acc, 0)

  return (
    <section className={"cart "+cartActive}>
      <div className="cart-items">
        {cartItems.map((cartItem) =>  <Cartitem key={cartItem.id} data={cartItem}/>)}
       
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  )
}

export default Cart