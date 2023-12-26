import React, { useContext } from 'react'
import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa";
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({data}){


  const { title, thumbnail, price} = data
  const {cartItems, setCartItems} = useContext(AppContext)

  const handleAddCart = () => setCartItems([...cartItems, data])
  
  return (
    <section className='product-card'>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" className='card__image'/>

      <div className='card__infos'>
        <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button 
      onClick={handleAddCart}
      type='button' className='button__add-cart'>
        <FaCartPlus />
      </button>
    </section>
  )
}

export default ProductCard